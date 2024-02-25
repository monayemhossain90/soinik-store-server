const express =require('express');
const UserController = require("../controllers/user/UserController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");


const router = express.Router();


router.get("/get-all-user", AuthVerifyMiddleware, IsAdmin, UserController.GetAllUser);
// router.put("/update-user/:id", AuthVerifyMiddleware, UserController.UpdateUser);
// router.delete("/delete-user/:id", AuthVerifyMiddleware, IsAdmin, UserController.DeleteUser);


module.exports=router;

