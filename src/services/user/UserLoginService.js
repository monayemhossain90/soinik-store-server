const CreateToken = require("../../utility/CreateToken");
const bcrypt = require("bcryptjs");

const UserLoginService= async (req, res, DataModel) => {

    try {
        let email = req.body.email;
        let password = req.body.password;
        let user =await DataModel.aggregate([{$match:{email:email}}]);

           if(user.length>0) {
                let CheckPassword = await bcrypt.compare(password, user[0].password);
                //if password is not matching
                  if (!CheckPassword) {
                      res.status(400).json({message: "fail", data:"Wrong Password!"});
                  }else{
                    let TokenData = {email: user[0].email, id: user[0]._id,}
                    let token = await CreateToken(TokenData);
                    res.status(200).json({message:"success",token:token,});
               }
           }
           else{
                res.status(404).json({message: "fail", data:"Could not Find this Email!"});
           }
    }
    catch (error) {
        res.status(500).json({ message: "error", data:error.toString()});
    }
}
module.exports=UserLoginService