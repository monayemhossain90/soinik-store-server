const ProductModel = require("../../models/product/ProductModel");
const DeleteService = require("../../services/common/DeleteService");
const UpdateProductService = require("../../services/product/UpdateProductService");
const GetAllProductsService = require("../../services/product/GetAllProductsService");
const GetProductService = require("../../services/product/GetProductService");
const CreateProductWithImageService = require("../../services/product/CreateProductWithImageService");
const GetSingleProductService = require("../../services/product/GetSingleProductService");
const DeleteProductImageService = require("../../services/product/DeleteProductImageService");
const UpdateProductWithImageService = require("../../services/product/UpdateProductWithImageService");
const SearchProductService = require("../../services/product/SearchProductService");
const RelatedProductService = require("../../services/product/RelatedProductService");


exports.CreateProduct = async (req, res) =>{
    await CreateProductWithImageService(req,res,ProductModel);
}

exports.UpdateProduct = async (req, res) =>{
    await UpdateProductService(req,res,ProductModel);
}

exports.UpdateProductWithImage = async (req, res) =>{
    await UpdateProductWithImageService(req,res,ProductModel);
}

exports.GetAllProduct=async(req,res)=>{
    await GetAllProductsService(req,res,ProductModel)
}

exports.GetProduct=async(req,res)=>{
    await GetSingleProductService(req,res,ProductModel)
}

exports.DeleteProduct = async (req, res) =>{
    await DeleteService(req,res,ProductModel);
}

exports.DeleteProductImage = async (req, res) =>{
    await DeleteProductImageService(req,res,ProductModel);
}

exports.SearchProduct = async (req, res) =>{
    await SearchProductService(req,res,ProductModel);
}

exports.GetRelatedProduct = async (req, res) =>{
    await RelatedProductService(req,res,ProductModel);
}