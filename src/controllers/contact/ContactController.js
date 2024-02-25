const CreateService = require("../../services/common/CreateService");
const ContactModel = require("../../models/contact/ContactModel");
const DeleteService = require("../../services/common/DeleteService");
const DetailsByIDService = require("../../services/common/DetailsService");
const GetAllService = require("../../services/common/GetAllService");
const UpdateService = require("../../services/common/UpdateService");


exports.CreateContact=async (req, res) => {
    await CreateService(req,res,ContactModel);
}


exports.UpdateContact=async(req,res)=>{
    await UpdateService(req,res,ContactModel)
}

exports.DeleteContact=async(req,res)=>{
    await DeleteService(req, res, ContactModel)
}

exports.GetContact=async (req, res) => {
    await DetailsByIDService(req, res, ContactModel);
}

exports.GetAllContact=async(req,res)=>{
    let Projection = {$project:{_id:1, name:1, email:1, message:1, status:1, createdAt:1, updatedAt:1}};
    await GetAllService(req, res, ContactModel,Projection)
}
