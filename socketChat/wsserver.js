var app = require('http').createServer()

var io = require('socket.io')(app)

var PORT = 3000

app.listen(PORT)

var clientId = 0

io.on('connection',function(socket){

	clientId++
	socket.nickName = 'user'+clientId

	io.emit('enter',socket.nickName + 'comes in')

	socket.on('message',function(str){
		io.emit('message',socket.nickName + 'says :'+str)
	})

	socket.on('disconnect',function(){
		io.emit('leave',socket.nickName + 'left')
	})

})

console.log('WebSocket server is listening on PORT :' + PORT)

