const app = require('express')();
const http = require('http').createServer(app);
const mongoose = require('mongoose');
const cors = require('cors');
const sockets = require('./sockets')

const routes = require('./routes');

mongoose.connect('mongodb://localhost:27017/commentsApp', () => {

});

const PORT = process.env.PORT || 3001;

app.use(routes);
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

sockets(http);

http.listen(PORT, () => {
    console.log(`listening port ${PORT}`);
});