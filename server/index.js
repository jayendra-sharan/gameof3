const express = require ('express');
const http = require ('http');
const socketIo = require ('socket.io');
const axios = require ('axios');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const port = process.env.PORT || 5000;
const gameRouter = require ('./tempDb/temp-db');
const socketServer = require ('./tempDb/socket');

const path = require ('path');

const app = express ();
app.use (cors ());
app.use (bodyParser.urlencoded({ extended: true }));
app.use (bodyParser.json ());
app.use (gameRouter);

app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + 'client/build/index.html'))
});

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

socketServer.createSocket (io);

server.listen (port, () => {
  console.log (`Server listening on *.${port}`);
});
