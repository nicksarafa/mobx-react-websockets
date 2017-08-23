import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import logo from './logo.svg';
import './App.css';

@inject('exampleStore')
@observer
class App extends Component {
  componentDidMount() {
    console.log(this.props.exampleStore.isThisWorking)
    this.props.exampleStore.isThisWorking = !this.props.exampleStore.isThisWorking
    console.log(this.props.exampleStore.isThisWorking)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
