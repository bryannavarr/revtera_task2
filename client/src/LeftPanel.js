import React from 'react'



class LeftPanel extends React.Component {
  constructor() {
    super()

    this.state = {
      formData: '',
      isConnected: false

    }

    this.onSubmit = this.onSubmit.bind(this)

  }


  onSubmit(e) {
    e.preventDefault();

    this.setState(prevState => ({ isConnected: !prevState.isConnected }))

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
          <button type="button" onClick={(e) => this.onSubmit(e)}>LISTEN</button>


          {this.state.isConnected && <div><textarea onChange={e => this.handleChange(e)}></textarea><button type="button">SEND</button></div>}





        </div>

      </React.Fragment>


    )

  }

}

export default LeftPanel;