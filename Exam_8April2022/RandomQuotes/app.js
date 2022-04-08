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
  interval = setInterval(() => getApiAndEmit(socket), 2000);
  socket.on('disconnect', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

const getApiAndEmit = (socket) => {
  var quotes = [
    'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    'The way to get started is to quit talking and begin doing.',
    'If life were predictable it would cease to be life, and be without flavor.',
    "Life is what happens when you're busy making other plans.",
    'work hard today, relax tomorrow',
  ];
  const response = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(response);
  socket.emit('RandomQuotes', response);
};
