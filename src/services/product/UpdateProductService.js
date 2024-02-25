const slugify = require("slugify");
const mongoose = require("mongoose");
const UpdateProductService = async (req, res, ProductModel) => {
    try{
        let id =req.params.id;
        const ObjectId = mongoose.Types.ObjectId;
        let UpdateQueryObject = {_id: new ObjectId(id)};

        let PostBody=req.body;
        if(PostBody.productName){
            PostBody.slug=slugify(PostBody.productName);
        }

        let data = await ProductModel.updateOne(UpdateQueryObject,PostBody);
        res.status(200).json({message: "success", data: data});

    }
    catch(error){
        res.status(500).json({message: "error", data: error});
    }
}

module.exports=UpdateProductService;