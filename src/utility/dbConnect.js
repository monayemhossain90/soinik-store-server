require('dotenv').config();
const mongoose = require("mongoose");

// const dbConnect = () => {
//     mongoose.set('strictQuery', false);
//     let uri = process.env.MONGO_URI;
//
//     mongoose.connect(uri).then((res)=>{
//         console.log("Connection Success");
//     }).catch((error)=>{
//         console.log("Connection Failed");
//         console.log(error);
//     })
// }
//


const dbConnect = async () => {
    mongoose.set('strictQuery', false);
    let uri = process.env.MONGO_URI;

    try {
        const res = await mongoose.connect(uri);
        console.log("Connection Success");
    } catch (error) {
        console.log("Connection Failed");
        console.log(error);
    }
}



module.exports=dbConnect;