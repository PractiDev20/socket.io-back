const Comments = require('../models/Comment');

module.exports.createComment = async (data) => {
    try {
        const { text, user } = data;
        const comment = await Comments.create({ text, user });
        return comment;
    } catch (error) {
        return [];
    }
}

module.exports.getComments = async (_, res) => {
    try {
        const comments = await Comments.find({});
        res.json(comments);
    } catch (error) {
        res.sendStatus(500);
    }  
}