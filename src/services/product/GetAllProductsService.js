const GetAllProductsService = async (req, res, ProductModel) => {
    try{
        const data =await ProductModel.aggregate([
            {$lookup: {from: "categories", localField: "categoryId", foreignField: "_id", as: "Category"}},
            {$project:{_id:1, productName:1, slug:1, description:1, price:1, quantity:1, image:1, categoryId:1,categoryName:{$first:"$Category.categoryName"}, createdAt:1, updatedAt:1,}}
        ]);

        res.status(200).json({message: "success", data: data});
    }
    catch(error) {
        res.status(500).json({message: "error", data: error.toString()});
    }
}

module.exports=GetAllProductsService