const express =require('express');
const UserController = require("../controllers/user/UserController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");


const router = express.Router();




router.post('/register',UserController.Register);
router.post('/login',UserController.Login);
router.post('/admin-login',UserController.AdminLogin);



router.put("/make-admin/:id", AuthVerifyMiddleware,IsAdmin,  UserController.MakeAdmin);
router.put("/remove-admin/:id", AuthVerifyMiddleware, IsAdmin,  UserController.RemoveAdmin);

// //ForgotPassword
// router.post("/forgot-password-verify-email",UserController.ForgotPasswordVerifyEmail);
// router.get("/forgot-password-verify-otp/:email/:otp",UserController.ForgotPasswordVerifyOTP);
// router.post("/create-new-password",UserController.CreateNewPassword);
//
//
//
//
// //Recover Password With Link
// router.post("/recover-password-verify-email",UserController.RecoverPasswordVerifyEmail);
// router.post("/reset-password",UserController.ResetPassword);


module.exports=router;

