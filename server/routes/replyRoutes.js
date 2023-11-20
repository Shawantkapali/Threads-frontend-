import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { likeUnlikeReply, replyToPost, deleteReply } from "../controllers/replycontroller.js";
const router = express.Router();
router.put("/reply/:id", protectRoute, replyToPost);
router.delete("/:id", protectRoute, deleteReply);
router.put("/like/:id", protectRoute, likeUnlikeReply);

export default router;