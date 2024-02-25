const express =require('express');
const ContactController = require("../controllers/contact/ContactController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");


const router = express.Router();



router.post('/create-contact', ContactController.CreateContact);
router.get("/get-all-contact", AuthVerifyMiddleware, IsAdmin, ContactController.GetAllContact);
router.delete('/delete-contact/:id', AuthVerifyMiddleware, IsAdmin, ContactController.DeleteContact);
router.put('/update-contact-status/:id', AuthVerifyMiddleware, IsAdmin, ContactController.UpdateContact);
router.get('/get-contact/:id', AuthVerifyMiddleware, ContactController.GetContact);





module.exports=router;

