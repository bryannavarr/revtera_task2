
const mainSocket = 'ws://localhost:8000'
let ws;

export function initializeSocket() {
  ws = new WebSocket(mainSocket)
  return ws;
}


export function sendOverSocket(data) {
  console.log("data being sent over socket:" + data)
  return ws.send(data);

}






