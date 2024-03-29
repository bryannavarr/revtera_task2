const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./app/routes");
const cors = require("cors")
// const socket = require("./app/socket")
const http = require("http")

app.use(bodyParser.json());

// app.use(cors({origin: 'http://localhost:3003'}))

const port = process.env.PORT || 8087;

// app.use(socket);

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// register routes
app.use(router);




// app.listen(port, "127.0.0.1")
// console.log(`Node server running and listening on: ${port}`)



http.createServer(function (req, res) {

  // console.log('Server is listening on ' + port)

  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response

}).listen(port, 'localhost'); //the server object listens on port 8080





// start mongo connection pool, then start express app
