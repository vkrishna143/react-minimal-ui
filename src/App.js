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
          <Button type={'warning'}>Warning</Button>
          <Button type={'danger'}>Danger</Button>
          <br/>
          <Button>Submit</Button>
          <Button type={'primary'}>Primary</Button>
          <Button type={'warning'}>Warning</Button>
          <Button type={'danger'}>Danger</Button>



      </div>
    );
  }
}

export default App;
