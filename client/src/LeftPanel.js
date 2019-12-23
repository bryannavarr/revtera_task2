import React from 'react'
// import * as socket from './services/socket.service'
const mainSocket = 'ws://localhost:8000'
let ws;



class LeftPanel extends React.Component {
  constructor() {
    super()

    this.state = {
      formData: '',
      isConnected: false

    }

    this.onListen = this.onListen.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onClose = this.onClose.bind(this)

  }

  // componentDidMount() {


  // }


  onListen(e) {
    e.preventDefault();

    // const ws = socket.initializeSocket();

    // if (ws) {
    this.setState(prevState => ({ isConnected: !prevState.isConnected }))
    // }
  }

  onClose() {

    ws.close();
    alert("Socket is closed")
  }

  onSubmit() {

    ws = new WebSocket(mainSocket)
    const data = this.state.formData

    ws.onopen = function (event) {


      ws.send(JSON.stringify(data))

    }



    ws.onmessage = function incoming(event) {
      console.log(event.data)

    }


    // ws.onopen = function (event) {

    // }

  }

  handleChange(e) {
    this.setState({ formData: e.target.value })
    console.log(this.state.formData)
  }


  render() {
    return (
      <React.Fragment>
        <div className="panel">

          <header>Configure the Server</header>


          <label>
            HOST:
            </label>
          <input placeholder="Enter IP address" />
          <label>
            PORT:
            </label>
          <input placeholder="Enter Port Number" />
          <button type="button" onClick={(e) => this.onListen(e)}>LISTEN</button>
          <button type="button" onClick={(e) => this.onClose(e)}>CLOSE</button>


          {this.state.isConnected && <div><textarea placeholder="Enter message to send to server" onChange={e => this.handleChange(e)}></textarea><button type="button" onClick={this.onSubmit}>SEND</button></div>}





        </div>

      </React.Fragment>


    )

  }

}

export default LeftPanel;