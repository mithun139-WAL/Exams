const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const port = 3001;
const index = require('./routes/index');
const app = express();

app.use(index);
const server = http.createServer(app);
server.listen(port, () => console.log(`Activated port ${port}`));

const io = socketIo(server, {cors: {origin: '*'}});
let interval;
io.on('connection', (socket) => {
  console.log('New Socket client connected');
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1500);
  socket.on('disconnect', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

const getApiAndEmit = (socket) => {
  const response = Math.floor(Math.random() * 1000 + 1);
  console.log(response);
  socket.emit('RandomNumber', response);
};
