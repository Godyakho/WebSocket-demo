var ws = require('nodejs-websocket')

var PORT = 3000

var clientId = 0

var server = ws.createServer(function(con){
	clientId++
	console.log('New connection')
	con.nickName = 'user'+clientId
	broadcast(con.nickName + 'comes in')

	con.on('text',function(str){
		broadcast(str)
	})

	con.on('close',function(){
		console.log('Connection close')
		broadcast(con.nickName + 'left')
	})

	con.on('error',function(err){
		console.log('handle err')
		console.log(err)
	})
}).listen(PORT)

console.log('WebSocket server is listening on PORT :' + PORT)

function broadcast(str){
	server.connections.forEach(function(connection){
		connection.send(str)
	})
}