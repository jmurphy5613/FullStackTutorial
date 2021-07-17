const express = require('express');
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10).then((hashedPassword) => {
        Users.create({
            username: username,
            password: hashedPassword
        })
    })
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: {username: username} });

    if(!user) res.json({error: "User does not exsist"});

    bcrypt.compare(password, user.password).then((match) => {
        if(!match) {
            console.log("Wrong username or password");
        }
        else {
            console.log("Success");
        }
    })
})


module.exports = router;