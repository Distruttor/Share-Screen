const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

var port = 3000 || process.env.PORT;

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log("A user has connected");
});


http.listen(port, () => {
    console.log("Server is listening on port " + port);
});