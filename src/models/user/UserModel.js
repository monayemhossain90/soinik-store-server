const mongoose=require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "firstName is required"],
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: [true, "lastName is required"],
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: [true, "email is required"],
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: [true, "password is required"],
            min: 5,
        },
        role: {
            type: String,
            default: "user",
            enum: ["user", "admin"]
        }
    },
    { timestamps: true, versionKey:false},
);



const UserModel=mongoose.model('users',UserSchema);
module.exports=UserModel

