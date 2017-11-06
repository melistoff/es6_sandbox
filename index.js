var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/public/views');
app.set('view engine', 'html');

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});
http.listen(3000);