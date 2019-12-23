import React from 'react'
import * as onChangeHelper from "./helpers/onchange.helper";
import * as socket from './services/socket.service'
const mainSocket = 'ws://'
let ws;




class LeftPanel extends React.Component {
  constructor(props) {
    super(props)

    const formData = this.convertPropsToFormData(props);

    this.state = {
      formData: formData,
      isConnected: false

    }

    this.onListen = this.onListen.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = onChangeHelper.onChange.bind(this)
    this.onClose = this.onClose.bind(this)

  }

  // componentDidMount() {


  // }

  convertPropsToFormData(props) {
    // const login = props.formData && props.formData._id ? props.formData : {};
    const config = props.formData ? props.formData : {};

    const initializedConfig = {
      ipAddress: config.ipAddress || "",
      port: config.port || ""
    };

    let formData = {
      ipAddress: {
        originalValue: initializedConfig.ipAddress,
        value: initializedConfig.ipAddress
      },
      port: {
        originalValue: initializedConfig.port,
        value: initializedConfig.port
      }
    };

    // for (let fieldName in formData) {
    //   const field = formData[fieldName];
    // field.valid = validationHelper.validate(field.value, field.validation);
    // }

    return formData;
  }


  onListen() {
    // console.log("event:" + event.target)
    // e.preventDefault();

    const _data = this.state.formData
    console.log("data " + JSON.stringify(_data))
    const url = mainSocket + _data.ipAddress.value + ":" + _data.port.value
    ws = new WebSocket(url)
    console.log("websocket url : " + JSON.stringify(url))

    socket.createSocket(_data).then(data => {

    })

    this.setState(prevState => ({ isConnected: !prevState.isConnected }))

  }

  onClose() {

    ws.close();
    alert("Socket connection has been closed!")
  }

  onSubmit() {


    const data = this.state.formData

    ws.onopen = function (event) {


      ws.send(JSON.stringify(data))

    }



    ws.onmessage = function incoming(event) {
      console.log(event.data)

    }

  }

  // handleChange(e) {
  //   this.setState({ formData: e.target.value })
  //   console.log(this.state.formData)
  // }


  render() {
    return (
      <React.Fragment>
        <div className="panel">

          <header>Configure the Server</header>


          <label>
            HOST:
            </label>
          <input type="text" value={this.state.formData.ipAddress.value} onChange={this.onChange} name="ipAddress" placeholder="Enter IP address" />
          <label>
            PORT:
            </label>
          <input type="number" value={this.state.formData.port.value} name="port" onChange={this.onChange} placeholder="Enter Port Number" />
          <button type="button" onClick={(event) => this.onListen(event)}>LISTEN</button>
          <button type="button" onClick={(e) => this.onClose(e)}>CLOSE</button>


          {this.state.isConnected && <div><textarea placeholder="Enter message to send to server" onChange={e => this.onChange(e)}></textarea><button type="button" onClick={this.onSubmit}>SEND</button></div>}





        </div>

      </React.Fragment>


    )

  }

}

export default LeftPanel;