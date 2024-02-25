const express =require('express');
const ProductController = require("../controllers/product/ProductController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");
const upload = require("../helper/upload/upload");


const router = express.Router();


router.post("/create-product", upload.single("image"), AuthVerifyMiddleware,IsAdmin, ProductController.CreateProduct);
router.put("/update-product/:id", AuthVerifyMiddleware, IsAdmin, ProductController.UpdateProduct);
router.put("/update-product-with-image/:id", upload.single("image"), AuthVerifyMiddleware,IsAdmin, ProductController.UpdateProductWithImage);
router.delete("/delete-product/:id", AuthVerifyMiddleware, ProductController.DeleteProduct);
router.put("/delete-product-image/:id", AuthVerifyMiddleware, IsAdmin, ProductController.DeleteProductImage);
router.get("/get-product/:id", ProductController.GetProduct);
router.get("/get-all-product", ProductController.GetAllProduct);
router.get("/search-product/:keyword", ProductController.SearchProduct);
router.get("/get-related-product/:productId/:categoryId", ProductController.GetRelatedProduct);

module.exports=router;

