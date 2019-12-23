const WSS = require('ws').Server;

module.exports = {
  WSS: WSS,
  createSocket: createSocket

}


function createSocket(req, res) {

  console.log("body from client: " + req.body)
  // const mainWss = new WSS({ port: data.port, host: data.host, origin: '*' });


  return new Promise(function (resolve, reject) {

    err ? reject(err) : resolve("SUCCESS")
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
  })
}




