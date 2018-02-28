"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var http = require("http");
var io = require("socket.io");
var app = express();
var server = http.createServer(app);
var socket = io.listen(server);
app.use('/js', express.static(__dirname));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
socket.on('connection', function (s) {
    console.log('a user connected');
    s.on('disconnect', function () {
        console.log('user disconnected');
    });
    s.on('send message', function (message) {
        socket.emit('message', message);
    });
});
var port = process.env.PORT || 8080;
server.listen(port, function () {
    console.log("Running on port " + port);
});
