const slugify = require("slugify");
const CreateCategoryService = async (req, res, CategoryModel) => {
    try{
        let PostBody=req.body;
        
        if(PostBody.categoryName){
            PostBody.slug=slugify(PostBody.categoryName);
        }
        let data = await CategoryModel.create(PostBody)
        res.status(201).json({message: "success", data: data});
    }
    catch (error) {
        res.status(500).json({message: "error", data: error});
    }
}


module.exports=CreateCategoryService