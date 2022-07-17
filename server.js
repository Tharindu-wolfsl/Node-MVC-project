const express=require('express');
const app=express();

const mongoose=require('mongoose');
const dotenv=require("dotenv");

dotenv.config();
//BodyParsing
app.use(express.urlencoded({extended: false}));

//Mongo DB connection

const database=process.env.MONGOLAB_URI;

mongoose.connect(database,{useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log('Database connected')}).catch((err)=>{
    console.log("database connect failed :" +err);
})



app.set('view engine','ejs');
app.use('/',require('./routes/login'));

// app.get('/',(req,res)=>{

//     res.send("This is work");
// })

const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server has started at port " + PORT))