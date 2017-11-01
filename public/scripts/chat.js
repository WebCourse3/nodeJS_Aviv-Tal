var socket = io();

socket.on('chat message', function(userName, msg,wordArray){
	$('#comments').append($('<li>').text(userName));
	$('#comments').append($('<li>').text(msg));
});

function emitMessage(){
	socket.emit('chat message', $('#UserName').val(), $('#newComment').val());
	$('#newComment').val('');
	$('#UserName').val('');
	return false;
}
