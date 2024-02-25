const express =require('express');
const CategoryController = require("../controllers/category/CategoryController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");


const router = express.Router();


router.post("/create-category", AuthVerifyMiddleware, CategoryController.CreateCategory);
router.put("/update-category/:id", AuthVerifyMiddleware, CategoryController.UpdateCategory);
router.delete("/delete-category/:id", AuthVerifyMiddleware, CategoryController.DeleteCategory);
router.get("/get-all-category", CategoryController.GetAllCategory);



module.exports=router;

