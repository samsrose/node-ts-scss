const socketIO = require("socket.io");
const express = require("express");
const app = express();
const httpServer = require("http").Server(app);
const io = socketIO(httpServer);

module.exports = { app, httpServer, io };