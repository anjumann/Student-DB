const express = require('express');
const app = express()
const port = 8080;
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const dotenv = require('dotenv')
const userRoute = require('./Routes/users')
const authRoute = require('./Routes/auth')
const postRoute = require('./Routes/posts')
const verificationRoute = require('./Routes/valid')
const imagekitRoute = require('./Routes/imagekitUpload')
const cors=require("cors");
dotenv.config();

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

 app.use(cors(corsOptions))

const dbConnect = async () =>{

    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
            console.log('Connected to DB');
        } )
    }catch(err){
        console.log('Connection Failed');
    }

}
//middleware
app.use(express.json())
app.use(helmet());
app.use(morgan('common'));
app.use('/user',userRoute)
app.use('/auth',authRoute)
app.use('/post',postRoute)
app.use('/verify',verificationRoute)
app.use('/imageauth',imagekitRoute)

app.get('/', (req, res)=>{
    console.log('hello');
    res.status(200).json('live')
} )

dbConnect().then(()=>{
    app.listen(port, ()=>{
        console.log('server running on port '+port);
    })
})