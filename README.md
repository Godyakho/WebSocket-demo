# WebSocket-demo
<pre>
$ npm install nodejs-websocket
</pre>
### WebSocketdemo
### ChatRoom Demo 
### ChatRoomrevise
Demo about WebSocket
### socket.io
The demo is refer to [https://socket.io/docs/](https://socket.io/docs/) 
<pre>
$ npm install socket.io
</pre>
```html
<script type="text/javascript" src="socket.io-2.0.4.js"></script>
```
```javascript
Server(WsServer.js)
var app = require('http').createServer()

var io = require('socket.io')(app);

app.listen(3000);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

```

```html
Client(index.html)

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>websocket</title>
	<script type="text/javascript" src="socket.io-2.0.4.js"></script>
</head>
<body>
	
<script>
  var socket = io('ws://localhost:3000');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
</script>
</body>
</html>
```
### socketChat

Fixed problem about socket.io-demo
