const express = require ('express');
const http = require ('http');
const socketIo = require ('socket.io');
const axios = require ('axios');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const port = 4001;
const tempDb = require ('./tempDb/temp-db');

const app = express ();
app.use (cors ());
app.use (bodyParser.urlencoded({ extended: true }));
app.use (bodyParser.json ());
app.use (tempDb);

const server = http.createServer (app);
const io = socketIo (server);

const getApiAndEmit = async socket => {
  try {
    const res = await axios.get ('https://dog.ceo/api/breeds/image/random');
    socket.emit ('FromAPI', res.data.message);
  } catch (e) {
    console.error (e);
  }
};

let currentIndex = 0;
io.on ('connection', (socket) => {
  console.log ('New client connected.')
  setInterval (() => {
    getApiAndEmit (socket);
  }, 100);

  socket.on ('disconnect', () => {
    console.log ('Client disconnected.');
  });
});

server.listen (port, () => {
  console.log (`Server listening on *.${port}`);
});
