const mongoose = require("mongoose");


const GetProductService = async (req, res, ProductModel) => {
  try{
      let id =req.params.id;
      const ObjectId = mongoose.Types.ObjectId;
      let QueryObject = {_id: new ObjectId(id)};

      const data = await ProductModel.aggregate([
          {$match: QueryObject},
          {$lookup: {from: "categories", localField: "categoryId", foreignField: "_id", as: "categoryId"}}
      ]);

      res.status(200).json({message: "success", data: data[0]});
  }
  catch(error){
      res.status(500).json({message: "error", data: error.toString()});
  }
}

module.exports=GetProductService