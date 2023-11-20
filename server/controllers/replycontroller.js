import User from "../models/userModel.js";
import Reply from "../models/replyModel.js";
import Post from "../models/postModel.js";

import { v2 as cloudinary } from "cloudinary";
const likeUnlikeReply = async (req, res) => {
	try {
		const { id: replyId } = req.params;
		const userId = req.user._id;

		const reply = await Reply.findById(replyId);

		if (!reply) {
			return res.status(404).json({ error: "Reply not found" });
		}

		const userLikedReply = reply.likes.includes(userId);

		if (userLikedReply) {
			// Unlike post
			await Reply.updateOne({ _id: replyId }, { $pull: { likes: userId } });
			res.status(200).json({ message: "Reply unliked successfully" });
		} else {
			// Like post
			reply.likes.push(userId);
			await reply.save();
			res.status(200).json({ message: "Reply liked successfully" });
		}
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

const replyToPost = async (req, res) => {
	try {
		const { postedBy, text } = req.body;
		if (!postedBy || !text) {
			return res.status(400).json({ error: "Postedby and text fields are required" });
		}

		const user = await User.findById(postedBy);
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		if (user._id.toString() !== req.user._id.toString()) {
			return res.status(401).json({ error: "Unauthorized to create post" });
		}

		const maxLength = 500;
		if (text.length > maxLength) {
			return res.status(400).json({ error: `Text must be less than ${maxLength} characters` });
		}

		const newReply = new Reply({ postedBy, text, img });
		await newReply.save();

		res.status(201).json(newReply);
	} catch (err) {
		res.status(500).json({ error: err.message });
		console.log(err);
	}
};

const deleteReply = async (req, res) => {
	try {
		const reply = await Reply.findById(req.params.id);
		if (!reply) {
			return res.status(404).json({ error: "Post not found" });
		}

		if (reply.postedBy.toString() !== req.user._id.toString()) {
			return res.status(401).json({ error: "Unauthorized to delete post" });
		}

		if (reply.img) {
			const imgId = reply.img.split("/").pop().split(".")[0];
			await cloudinary.uploader.destroy(imgId);
		}

		await Reply.findByIdAndDelete(req.params.id);

		res.status(200).json({ message: "Reply deleted successfully" });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export {likeUnlikeReply, replyToPost, deleteReply}