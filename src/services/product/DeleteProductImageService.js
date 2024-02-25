const mongoose = require("mongoose");
const cloudinary = require("../../utility/cloudinary");
const DeleteProductImageService = async (req, res, ProductModel) => {
   try{
       let id =req.params.id;
       const ObjectId = mongoose.Types.ObjectId;
       let QueryObject = {_id: new ObjectId(id)};
       let public_id = req.body['public_id'];

        let cloudinaryResponse = await cloudinary.uploader.destroy(public_id);
        let UpdateProduct = await ProductModel.updateOne(QueryObject,{image: {public_id: "", image_url: ""}})

       res.status(200).json({message: 'success',data: UpdateProduct, result: cloudinaryResponse});
   }
   catch(error){
       res.status(500).json({message: "error", data: error.toString()});
   }
}

module.exports=DeleteProductImageService