import express from "express";
import { signupUser, loginUser, logoutUser, followUnFollowUser, updateUser, getUserProfile, searchUsers } from "../controllers/usercontroller.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();
router.get("/profile/:query", getUserProfile);
router.post ("/signup", signupUser);
router.post ("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnFollowUser);
router.put("/update/:id", protectRoute, updateUser)
router.get('/search/:query?', searchUsers);
export default router;