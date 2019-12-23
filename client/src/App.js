import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeftPanel from "./LeftPanel"
import RightPanel from "./RightPanel"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      data: ''
    }

  }

  render() {
    return (
      <div className="container">
        <LeftPanel data={this.state.data} />

        <RightPanel data={this.state.data} />
      </div>
    );
  }

}

export default App;
