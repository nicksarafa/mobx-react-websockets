import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

<<<<<<< Updated upstream
class App extends Component {
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
=======
const App = inject('routing')(
  inject('exampleStore')(
    observer(
      class App extends Component {
        componentDidMount() {
          this.props.exampleStore._toggleIsExampleWorking()
        }

        _goToHell() {
          this.props.routing.push(`/hell`)
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
              <button
                onClick={() =>
                  this.props.exampleStore._toggleIsExampleWorking()}
              >
                Toggle image
              </button>
              <button onClick={() => this._goToHell()}>
                Go to Hell
              </button>
            </div>
          )
        }
      },
    ),
  ),
)

export default App
>>>>>>> Stashed changes
