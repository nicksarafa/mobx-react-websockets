import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledLogo>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </StyledLogo>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

const StyledLogo = styled.div`
  background: blue;
`

export default App
