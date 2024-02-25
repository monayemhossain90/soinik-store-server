const mongoose = require("mongoose");
const CategoryModel = require("../../models/category/CategoryModel");
const GetAllService = require("../../services/common/GetAllService");
const DeleteService = require("../../services/common/DeleteService");
const CheckAssociateService = require("../../services/common/CheckAssociateService");
const ProductModel = require("../../models/product/ProductModel");
const CreateCategoryService = require("../../services/category/CreateCategoryService");
const UpdateCategoryService = require("../../services/category/UpdateCategoryService");



exports.CreateCategory = async (req, res) =>{
    await CreateCategoryService(req,res,CategoryModel);
}

exports.UpdateCategory = async (req, res) =>{
    await UpdateCategoryService(req,res,CategoryModel);
}

exports.GetAllCategory=async(req,res)=>{
    const projection = {$project: {_id:1, categoryName:1}}
    await GetAllService(req,res,CategoryModel, projection)
}


exports.DeleteCategory=async (req, res) => {
    let deleteId=req.params.id;
    const ObjectId = mongoose.Types.ObjectId;
    let CheckAssociate = await CheckAssociateService(req, res,{categoryId: new ObjectId(deleteId)},ProductModel);
    if(CheckAssociate){
        res.status(403).json({message:"associate", data: "associated with Product"})
    }else{
        await DeleteService(req, res, CategoryModel);
    }
}
