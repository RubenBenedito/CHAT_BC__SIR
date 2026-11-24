const {Socket} = require("dgram");
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);
const PORT = 3010;

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('mensagem', (message) => {
        console.log('Mensagem: ' + message);
        io.emit('mensagem', message);
    });
});

app.get('/ola', (req, res) => {
    res.send('Olá Mundo');
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});