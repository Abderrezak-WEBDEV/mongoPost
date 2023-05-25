const postModel = require("../models/post.model");


//route en get
module.exports.allPost= (req, res) => {
    postModel.find((err, docs) => {
        if(!err) return res.status(200).send(docs);
        else return (res.status(400).send("erreur to get data"));
    })
    .sort({createdAt: -1});
};
 // route post
 module.exports.addPost = async (req, res) => {
    const newPost = new postModel({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    });
    //ajouter à la base de donnée
    try{
        const post = await newPost.save();
        return res.status(201).json(post);
    } catch(err) {
        return res.status(400).json({message : err})
    }
 }