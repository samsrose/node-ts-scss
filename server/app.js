const { app, httpServer, io } = require("./server");
const express = require("express");
const apiRouter = require("./api");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', cors(), apiRouter);
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

httpServer.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});