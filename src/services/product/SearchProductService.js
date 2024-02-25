const SearchProductService = async (req, res, ProductModel) => {
    try{
        const { keyword } = req.params;
        const results = await ProductModel
            .find({
                $or: [
                    { productName: { $regex: keyword, $options: "i" } },
                    { description: { $regex: keyword, $options: "i" } },
                ],
            });

        res.status(200).json({message: "success", data: results});
    }
    catch(error){
        res.status(500).json({message: "error", data: error.toString()});
    }
}


module.exports=SearchProductService