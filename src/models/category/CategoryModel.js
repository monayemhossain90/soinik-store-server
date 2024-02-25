const  mongoose=require('mongoose');
const CategorySchema= new mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: [true, "categoryName is required"],
            trim: true
        },
        slug:{
            type:String,
            required:true,
            unique: true,
            lowercase:true
        },
    },
    { timestamps: true, versionKey:false},
);
const CategoryModel=mongoose.model('categories',CategorySchema);
module.exports=CategoryModel

