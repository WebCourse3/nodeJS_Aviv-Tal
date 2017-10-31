var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/views/chat.html');
});


io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
	socket.on('chat message', function(msg){
		console.log('message: ' + msg);
		socket.broadcast.emit('chat message', msg);
	});
});


http.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});

