const {Socket} = require("dgram");
const express = require('express');
const {createServer} = require('http');
const {Server} = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('static'));


io.on('connection', (socket) => {
    console.log('A user connected');
});

app.get('/ola', (req, res) => {
    res.send('Olá, mundo!');
});

const PORT = process.env.PORT || 3010;

server.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});