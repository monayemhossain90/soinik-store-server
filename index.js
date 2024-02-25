const express = require("express");
const app = new express();

const authRouter = require('./src/routes/authRoute');
const userRouter = require('./src/routes/userRoute');
const categoryRouter = require('./src/routes/categoryRoute');
const productRouter = require('./src/routes/productRoute');
const contactRouter = require('./src/routes/contactRoute');



//Security Middleware Import
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const morgan = require("morgan");
const cors = require('cors');

//Database Library Import
const mongoose = require('mongoose');
const dbConnect = require("./src/utility/dbConnect");

//Security Middleware Implementation
app.use(morgan("dev"));
app.use(cors())
//cors configuration
// app.use(cors({
//   origin: ['http://localhost:5173', /*'https://shops-admin.netlify.app'*/]
// }));
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())


// Middleware to block requests from Postman
// app.use((req, res, next) => {
//     // Check if request is coming from Postman
//     if (req.get('user-agent').includes('Postman')) {
//         return res.status(403).json({ error: 'Access forbidden from Postman' });
//     }
//     // If not from Postman, proceed with next middleware
//     next();
// });


//RequestBodySizeIncrease//Body Parser Implementation
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));


//Request Rate Limit Implementation

const Limiter = rateLimit({
    windowMs: 15 * 60 * 1000,   //15 Minutes
    max: 300000   //Limit each IP to 100 requests per windowMs
})
app.use(Limiter);



//MongoDB(mongoose) Atlas Database Connection
dbConnect();

//Managing Back-end Routing// Back-end Routing Implementation
//app.use('/api/v1', router);
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/category', categoryRouter);
app.use('/api/product', productRouter);
app.use('/api/contact', contactRouter);
app.get('/', (req, res)=>{
    res.send("<h1>This is Ecommerce Api</h1>");
})

//Undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({message:"Fail", data:"Route Not Found"});
});




app.listen(5000,function(){
    console.log("Server run @5000");
});