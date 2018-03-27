var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(client){

	console.log("Have a new connection from client ",client.handshake.address)

  	client.on('event', function(data){
  		console.log("Event ", data)
  	});
  	client.on('disconnect', function(){
  		console.log("Client is disconnected");
  	});
});
server.listen(9100, function(){
	 console.log('Express server listening on port %d in %s mode', 9100);
});
console.log("Server is started on port 9100")