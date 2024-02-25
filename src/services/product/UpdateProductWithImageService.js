const fs = require("fs");
const cloudinary = require("../../utility/cloudinary");
const slugify = require("slugify");
const mongoose = require("mongoose");

const UpdateProductWithImageService = async (req, res, ProductModel) => {
    try{

        let id =req.params.id;
        const ObjectId = mongoose.Types.ObjectId;
        let UpdateQueryObject = {_id: new ObjectId(id)};

        let cloudinaryResponse;
        if (req.file) {
            cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
                folder: "Shops",
            });

            fs.unlinkSync(req.file.path);
        } else {
            res.status(400).json('Please provide a file');
        }

        if(cloudinaryResponse){

            const PostBody = req.body;
            if(PostBody.productName){
                PostBody.slug=slugify(PostBody.productName);
            }

            PostBody.image={
                public_id:cloudinaryResponse?.public_id,
                image_url:cloudinaryResponse?.secure_url
            }

            let data = await ProductModel.updateOne(UpdateQueryObject,PostBody);
            res.status(201).json({message:"success",data:data, result: cloudinaryResponse});

        }
    }
    catch(error){
        res.status(500).json({message:"error", data:error});
    }
}

module.exports=UpdateProductWithImageService