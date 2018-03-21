import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';

import cardImage from './images/sample.png';


import Button from './components/Button/index';
import Card from "./components/Card";

class App extends Component {
    onButtonClick(){
        alert("Button Clicked");
    }

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
          <Button>Default</Button>
          <Button type={'primary'}><FontAwesomeIcon icon="coffee"/> &nbsp;Primary</Button>
          <Button type={'primary success'}>Success</Button>
          <Button type={'primary warning'}>Warning</Button>
          <Button type={'primary danger'}>Danger</Button>
          <br/>

          <Button type={'secondary'} onPress={this.onButtonClick} >Secondary</Button>
          <Button type={'secondary success'}>Secondary Success</Button>
          <Button type={'secondary warning'}>Warning</Button>
          <Button type={'secondary danger'}>Danger</Button>
          <br/>

          <Button type={'fab'} onPress={this.onButtonClick} ><FontAwesomeIcon icon="coffee"/></Button>



          <br/>
          <Card
              image={cardImage}
              title={"Title"}
              subTitle={"Sub Title"}
              content={"This is a sample content lorem ipsum types but not exactly lorem ipsum people also call this lipsum popularly"}
          />
          <Card/>
      </div>
    );
  }
}

export default App;
