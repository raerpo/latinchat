import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as io from 'socket.io';
import { IMessage } from './chatTypings';

const app = express();
const server = http.createServer(app);
const socket = io.listen(server);

app.use('/js', express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


socket.on('connection', function(s) {
  console.log('a user connected');
  s.on('disconnect', function(){
    console.log('user disconnected');
  });
  s.on('send message', function(message: IMessage) {
    socket.emit('message', message);
  });
});

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Running on port ${port}`);
});


