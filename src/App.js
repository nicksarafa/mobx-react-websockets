import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { inject, observer } from 'mobx-react'

const App = inject('exampleStore')(
  observer(
    class App extends Component {
      componentDidMount() {
        this.props.exampleStore._toggleIsExampleWorking()
      }

      render() {
        return (
          <div className="App">
            {this.props.exampleStore.isThisExampleWorking
              ? <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h2>Welcome to React</h2>
                </div>
              : false}
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <button onClick={() => this.props.exampleStore._toggleIsExampleWorking()}>Toggle image</button>
          </div>
        )
      }
    },
  ),
)

export default App
