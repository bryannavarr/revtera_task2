const WSS = require('ws').Server;

module.exports = WSS

const mainWss = new WSS({ port: 8000, host: '127.0.0.1', origin: '*' });


mainWss.on('connection', function connection(socket) {
  console.log("Opened Connection")
  socket.send("Connection established successfully")

  socket.on('message', function message(message) {
    console.log("data from client :" + message)
    mainWss.clients.forEach(function each(client) {

      client.send("Message received!");


    })


  })

})



