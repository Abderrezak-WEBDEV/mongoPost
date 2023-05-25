const router =  require("express").Router();
const  {allPost, addPost}= require("./post.controller.js");

router.get("/", allPost);
router.post("/", addPost);

module.exports = router;