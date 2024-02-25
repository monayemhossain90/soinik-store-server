const mongoose = require("mongoose");
const GetSingleProductService = async (req, res, ProductModel) => {
    try{
        let id =req.params.id;
        const ObjectId = mongoose.Types.ObjectId;
        const QueryObject = {_id: new ObjectId(id)};

        const product = await ProductModel
            .findOne(QueryObject)
            .populate("categoryId");
        res.status(200).json({message: "success", data: product});
    }
    catch(error){
        res.status(500).json({message: "error", data: error.toString()});
    }
}

module.exports=GetSingleProductService