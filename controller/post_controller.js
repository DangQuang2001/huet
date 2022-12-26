const Post = require("../model/post")

class PostController {
    Add(req, res, next) {
        const post = new Post(req.body);
        post.save().then((post) => res.status(200).send({post})).catch((error) => res.status(403).json({
            message: "Error"
        }))
    }
    All(req, res, next) {
        Post.find({}).then((data) => res.json(data)).catch((error) => res.status(400).json({message: "cc"}))
    }
    Delete(req, res, next) {
        Post.deleteOne({id: req.params.id}).then(() => res.status(200).send({status: 1, message: "Deleted"})).catch((error) => res.status(400).json({message: "Failed to delete"}))
    }
    Update(req, res, next) {
        Post.updateOne({id: req.body.id}, {$set: {name: req.body.content}}).then((data) => res.status(200).json(data)).catch((error) => res.status(400).json({message: "cc"}))
    }
}

module.exports = new PostController()