const { default: mongoose } = require('mongoose');
const mongo = require('mongoose')
const Schema = mongo.Schema

const Post = new Schema(
    {
        id: {type: String, require: true, unique: true},
        userId: {type: String, require: true},
        content: {type: String},
        placeId: {type: String, require: true},
        photos: {type: Array, require: true},
        likeCount: {type: Number},
        commentCount: {type: Number},
        isDeleted: {type: Boolean, require: true}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Post', Post)