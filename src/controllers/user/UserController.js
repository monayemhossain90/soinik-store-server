const UserModel = require("../../models/user/UserModel");
const UserCreateService = require("../../services/user/UserCreateService");
const UserLoginService = require("../../services/user/UserLoginService");
const AdminLoginService = require("../../services/user/AdminLoginService");
const GetAllService = require("../../services/common/GetAllService");
const MakeAdminService = require("../../services/user/MakeAdminService");
const RemoveAdminService = require("../../services/user/RemoveAdminService");


exports.Register = async (req, res) =>{
    await UserCreateService(req,res,UserModel);
}

exports.Login = async (req, res) =>{
    await UserLoginService(req,res,UserModel);
}

exports.AdminLogin=async(req,res)=>{
    await AdminLoginService(req,res,UserModel);
}

exports.GetAllUser=async(req,res)=>{
    const projection = {$project: {_id:1, email:1, firstName:1, lastName:1, role:1}}
    await GetAllService(req,res,UserModel, projection)
}

exports.MakeAdmin=async(req,res)=>{
    await MakeAdminService(req,res,UserModel)
}

//remove admin
exports.RemoveAdmin=async(req,res)=>{
    await RemoveAdminService(req,res,UserModel)
}

