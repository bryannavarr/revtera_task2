TASK 2: Basic Server Client sending messages to each other via NPM, over TCP sockets.

There should be two separate apps, called client and server.
First is a server which will be executed via npm like

$ cd interviewbase/server
$ npm start

The server then will start a simple GUI

node.js standalone GUI with one "QUIT" button which will quit the server.  It
should have two text dialogs ("HOST:" and "PORT:") which will be used to enter
an IP address and port for which the server should listen on (TCP).  and a
"LISTEN" button. Once the user has entered an IP address (say "127.0.0.1") and
a port number (say 8801), and the LISTEN button is pressed, server should wait
for incoming TCP connections on the specified HOST and print out on to the GUI
window the list of incoming lines received in socket.

Once a TCP connection is established, the GUI should present a new text dialog
("Input text to send:") with a "SEND" button which will send back on the
socket a message that was inputted. The "SEND" button can be pressed multiple
times to send different messages.

You should pick a simple methodology for printing out any received messages on
the socket. The received text must be shown somehow on the GUI, and it must be
able to show the lines as it arrives (until the "QUIT" button is pressed). For
example, you can use a large square box that lists the 10 most recent lines
received.  You can also use an "alert" window that will temporarily show an
incoming line for a few seconds and then disappears.  You should take care to
make sure that the app can asynchronously display incoming lines of text
without blocking. It should be possible for both client and server to be
sending and receiving at (nearly) the same time. The app should quit cleanly
when the QUIT button is pressed.

Also, have the server periodically ping the client with a small "sequence number"
If such a sequence number is received by the server from the client, it
should be displayed separately (like a stopwatch clock). This sequence
number should be out-of-band from the text messages being sent/received, but
must be sent over the same socket. The server (and client) must be able to
distinguish such pings from the actual text messages being sent and received.


The app should quit cleanly when the QUIT button is pressed.

BONUS:
* Have the server create a new window instance for every connection, so that
  this new window display incoming text on this particular connection only.
  (This actually might be simpler to code, albeit it will take a few more lines)
* Have the GUI display (or otherwise notify) if the connecting client has
  closed the connection. After the client quits, there will be no more
  incoming text on this TCP connection, so the "SEND" button can be grayed out.
* Place a sliding bar which will control the frequency of ping messages sent
  by the server to the client. The bounds can be 0.1 second to 10 seconds.
  Sliding the bar on the server side should increase or decrease the
  frequency of the pings sent by the server to the client.

The second will be executed similarly.
$ cd interviewbase/client
$ npm start

The Client app should also start a standalone window via node.js
It should have a "QUIT" button, a text dialog ("HOST:" ) for
entering an ip address, a second text dialog ("PORT:") for
entering a port number, and a "CONNECT" button.  Once the connect button is
pushed, the client app should connect to the specified IP address and port
over TCP and then display a third text dialog "Input text to send:" and a SEND
button. Once some text is inputted and the "SEND" button is pressed, the
inputted text should be sent to the server.
The client should also print any lines received on the socket, just like the
server.

Just like the server, you should pick a simple methodology for printing out
any received messages on the socket. The received text must be shown somehow
on the GUI, and it must be able to show the lines as it arrives (until the
"QUIT" button is pressed). For example, you can use a large square box that
lists the 10 most recent lines received.  You can also use an "alert" window
that will temporarily show an incoming line for a few seconds and then
disappears.  You should take care to make sure that the app can asynchronously
display incoming lines of text without blocking.

Also, have the client ping the server periodically with a small sequence number.
If such a sequence number is received by the client from the server, it
should be displayed separately (like a stopwatch clock). This sequence
number should be out-of-band from the text messages being sent/received, but
must be sent over the same socket. The server (and client) must be able to
distinguish such pings from the actual text messages being sent and received.


The app should quit cleanly when the QUIT button is pressed.


BONUS:
* if the Client is unable to connect after a short period of time, it should
  notify the user somehow, and allow the user to modify the IP address/port