const mongoose = require("mongoose");
const slugify = require("slugify");
const UpdateCategoryService = async (req, res, CategoryModel) => {
    try{
        let id =req.params.id;
        const ObjectId = mongoose.Types.ObjectId;
        let UpdateQueryObject = {_id: new ObjectId(id)};

        let PostBody=req.body;

        if(PostBody.categoryName){
            PostBody.slug=slugify(PostBody.categoryName);
        }

        let data = await CategoryModel.updateOne(UpdateQueryObject,PostBody);
        res.status(200).json({message: "success", data: data});

    }
    catch(error){
        res.status(500).json({message: "error", data: error});
    }
}

module.exports=UpdateCategoryService