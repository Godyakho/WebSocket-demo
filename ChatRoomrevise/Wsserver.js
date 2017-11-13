var ws = require('nodejs-websocket')

var PORT = 3000

var clientId = 0

var server = ws.createServer(function(con){
	clientId++
	console.log('New connection')
	con.nickName = 'user'+clientId
	var mes ={ 
		type : 'enter',
		data : con.nickName + 'comes in'
	}

	broadcast(JSON.stringify(mes))

	con.on('text',function(str){
		var mes = {
			type :'message',
			data : con.nickName +'says :'+str
		}	
		broadcast(JSON.stringify(mes))
	})

	con.on('close',function(){
		console.log('Connection close')
		var mes ={
			type : 'leave',
			data : con.nickName + 'left'
		}
		broadcast(JSON.stringify(mes))
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