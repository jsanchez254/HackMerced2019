var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connetions = [];

server.listen(process.env.PORT || 3001);
console.log('Server running');

app.get('/',function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    
    
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
        console.log('message: ' + msg);
    });
  });

// io.sockets.on('connect',function(socket){
//     console.log('a user connected');
//     connections.push(socket);
//     console.log('Connected: %s sockets connected', connections.length);


//     //Disconnect
//     //needs to check if username
//     connections.splice(connections.indexOf(socket),1);
//     console.log('Connected: %s sockets connected', connections.length);

// });