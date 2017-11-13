var ws = require('nodejs-websocket')

var PORT = 3000
var server = ws.createServer(function(con){
	console.log('New connection')
	con.on('text',function(str){
		con.sendText('hello  '+str)
	})
	con.on('close',function(){
		console.log('Connection close')
	})
	con.on('error',function(err){
		console.log('handle err')
		console.log(err)
	})
}).listen(PORT)

console.log('WebSocket server is listening on PORT :' + PORT)