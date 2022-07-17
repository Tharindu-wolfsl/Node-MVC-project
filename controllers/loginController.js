//for register page
const User = require("../models/User");
const bcrypt = require("bcryptjs");//for hash password

const registerView=(req,res)=>{

    res.render("register",{});

}
const loginView=(req,res)=>{

    res.render("login",{});

}

module.exports={
    registerView,
    loginView
};