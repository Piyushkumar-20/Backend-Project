import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getcurrentUser,
  updateAccount,
  updateuserAvatar,
  updateUserCoverImage,
  getUserChannelProfile,
  getWatchHistory,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { jwtVerify } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

// Secured Routes
router.route("/logout").post(jwtVerify, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(jwtVerify, changeCurrentPassword);
router.route("/current-user".get(jwtVerify, getcurrentUser));
router.route("/update-account").patch(jwtVerify, updateAccount);

router
  .route("/avatar")
  .patch(jwtVerify, upload.single("avatar"), updateuserAvatar);
router
  .route("/cover-image")
  .patch(jwtVerify, upload.single("coverImage"), updateUserCoverImage);

router.route("/channel/:username").get(jwtVerify, getUserChannelProfile);
router.route("/history").get(jwtVerify, getWatchHistory);
export default router;
