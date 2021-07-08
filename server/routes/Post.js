const express = require('express');
const router = express.Router();
const { Posts } = require("../models")

router.post("/", async (req, res) => {
    const post = req.body;
    await Posts.create(post);
})

router.get("/", async (req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
})


module.exports = router;