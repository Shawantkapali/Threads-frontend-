import mongoose from "mongoose";

const replySchema = mongoose.Schema(
	{

likes: {
    // array of user ids
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
},
postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  },
postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post', // Reference to the Post model to associate the reply with a post
    required: true,
  },
replies: [
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        replyId: {
             type:String,
             required: true,
        },
        replyimg:{
              type:String,
        },
        text: {
            type: String,
            required: true,
        },
        userProfilePic: {
            type: String,
        },
        username: {
            type: String,
        },
    },
],
    })

const Reply = mongoose.model("Reply", replySchema);

export default Reply;