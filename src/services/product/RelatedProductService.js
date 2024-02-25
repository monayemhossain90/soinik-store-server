const RelatedProductService = async (req, res, ProductModel) => {
    try{
        const { productId, categoryId } = req.params;

        const products = await ProductModel
            .find({
                categoryId: categoryId,
                _id: { $ne: productId },
            })
            .limit(3)
            .populate("categoryId");


        res.status(200).json({message: "success", data: products});
    }
    catch(error){
        res.status(500).json({message: "error", data: error.toString()});
    }
}

module.exports=RelatedProductService