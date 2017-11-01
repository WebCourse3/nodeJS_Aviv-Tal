var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/views/chat.html');
});

io.on('connection', function (socket) {
	console.log('a user connected');
	socket.on('disconnect', function () {
		console.log('user disconnected');
	});
	socket.on('chat message', function (userName, msg) {
		console.log('message: ' + msg);
		var wordArray = msg.split(' ');
		//addAttr(wordArray,msg);
		socket.broadcast.emit('chat message', userName, msg, wordArray);
	});
});

http.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

function addAttr(wordArr,msg) {
	var len = wordArr.length;
	for (var i = 0; i < len; i++) {
		if (wordArr[i].search('/set') > -1) {
			var attrType=wordArr[i].substring(4,wordArr[i].length);
			switch(attrType){
				case 'Color':

					break;
			}
		}
	}
	return msg;
}

