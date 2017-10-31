var socket = io();

socket.on('chat message', function(msg){
	$('#comments').append($('<li>').text(msg));
});

function emitMessage(){
	socket.emit('chat message', $('#newComment').val());
	$('#newComment').val('');
	return false;
}
