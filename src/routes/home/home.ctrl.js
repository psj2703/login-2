"use strict";

const User = require("../../models/User.js")


const output = {
    home: (req,res) =>{
        res.render("home/index");
    },
    
    login: (req,res) => {
        res.render("home/login");
    },

    register: (req,res) => {
        res.render("home/register");
    },
};

const process = {
    login: async (req,res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);

        // const id = req.body.id;
        // const pwd = req.body.pwd;

        // const users = UserStorage.getUsers("id", "pwd")

        // const response = {}; 
        // if (users.id.includes(id)) {
        //     const idx = users.id.indexOf(id);
        //     if (users.pwd[idx] === pwd) {
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }

        // response.success = false;
        // response.msg = "로그인에 실패하셨습니다";
        // return res.json(response);
    },

    register: (req,res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};


module.exports = {
    output,
    process,
};