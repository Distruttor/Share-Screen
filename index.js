const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

var port = 3000 || PROC.env.PORT;


http.listen(port, () => {
    console.log("Server is listening on port " + port);
})