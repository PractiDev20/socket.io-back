const socket = require('socket.io');
const commentsController = require('./controllers/comments');

module.exports = http => {
    const io = socket(http, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
            credentials: true,
            allowedHeaders: ["my-custom-header"],
        }
    });

    io.on('connection', socket => {
        socket.on('create-comment', (comment) => {
            commentsController.createComment(comment);
            io.emit('add-comment', comment);
        });
    });
}