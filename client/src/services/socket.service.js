

import axios from 'axios'

const headers = {};

const baseUrl = `http://localhost:8087/api/socket`;

export function createSocket(socketConfig) {
  const config = {
    method: "POST",
    headers,
    data: socketConfig
  };

  return axios(baseUrl, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);

}

// export function initializeSocket() {
//   ws = new WebSocket(mainSocket)
//   return ws;
// }


// export function sendOverSocket(data) {
//   console.log("data being sent over socket:" + data)
//   return ws.send(data);

// }

const responseSuccessHandler = response => {
  return response.data;
};

const responseErrorHandler = error => {
  console.log(error);
  return Promise.reject(error);
};






