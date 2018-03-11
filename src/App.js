import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Button>Submit</Button>
          <Button type={'primary'}>Primary</Button>
          <Button type={'primary warning'}>Warning</Button>
          <Button type={'primary danger'}>Danger</Button>
          <br/>
          <Button>Submit</Button>
          <Button type={'secondary'}>Primary</Button>
          <Button type={'secondary warning'}>Warning</Button>
          <Button type={'secondary danger'}>Danger</Button>
      </div>
    );
  }
}

export default App;
