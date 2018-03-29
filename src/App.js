import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';

import cardImage from './images/sample.png';


import Button from './components/Button/index';
import Card from "./components/Card";

class App extends Component {
    onButtonClick(e,action){
        alert("Button Clicked");
        action ? alert("Card action is "+action) : null;
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
          <div className={'cardsContainer'}>

              <Card
                  image={cardImage}
                  title={"Title"}
                  subTitle={"Sub Title"}
                  content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tellus arcu. Fusce quis iaculis libero, eget auctor magna. Aenean sit amet neque nulla. Donec sed vestibulum lectus, vitae varius orci. Curabitur bibendum tellus dui, sed mollis libero lacinia non. Pellentesque condimentum at nisi quis iaculis. Pellentesque sodales suscipit risus ac condimentum. Maecenas quis nunc velit. Duis quis varius ante, non condimentum mi. Pellentesque faucibus placerat blandit."}
                  cardActions={{'primary':'Action 1' , 'secondary':'Action 2' }}
                  onPrimaryClick={this.onButtonClick}
                  onSecondaryClick={this.onButtonClick}
              />

              <Card
                  image={cardImage}
                  title={"Title"}
                  subTitle={"Sub Title"}
                  // content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tellus arcu. Fusce quis iaculis libero, eget auctor magna. Aenean sit amet neque nulla. Donec sed vestibulum lectus, vitae varius orci. Curabitur bibendum tellus dui, sed mollis libero lacinia non. Pellentesque condimentum at nisi quis iaculis. Pellentesque sodales suscipit risus ac condimentum. Maecenas quis nunc velit. Duis quis varius ante, non condimentum mi. Pellentesque faucibus placerat blandit."}
                  cardActions={{'primary':'Action 1' , 'secondary':'Action 2' }}
                  onPrimaryClick={this.onButtonClick}
                  onSecondaryClick={this.onButtonClick}
              />

              <Card
                  // image={cardImage}
                  title={"Title"}
                  subTitle={"Sub Title"}
                  content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tellus arcu. Fusce quis iaculis libero, eget auctor magna. Aenean sit amet neque nulla. Donec sed vestibulum lectus, vitae varius orci. Curabitur bibendum tellus dui, sed mollis libero lacinia non. Pellentesque condimentum at nisi quis iaculis. Pellentesque sodales suscipit risus ac condimentum. Maecenas quis nunc velit. Duis quis varius ante, non condimentum mi. Pellentesque faucibus placerat blandit."}
                  cardActions={{'primary':'Action 1' , 'secondary':'Action 2' }}
                  onPrimaryClick={this.onButtonClick}
                  onSecondaryClick={this.onButtonClick}
              />
              <Card
                  image={cardImage}
                  // title={"Title"}
                  // subTitle={"Sub Title"}
                  // content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tellus arcu. Fusce quis iaculis libero, eget auctor magna. Aenean sit amet neque nulla. Donec sed vestibulum lectus, vitae varius orci. Curabitur bibendum tellus dui, sed mollis libero lacinia non. Pellentesque condimentum at nisi quis iaculis. Pellentesque sodales suscipit risus ac condimentum. Maecenas quis nunc velit. Duis quis varius ante, non condimentum mi. Pellentesque faucibus placerat blandit."}
                  // cardActions={{'primary':'Action 1' , 'secondary':'Action 2' }}
                  onPrimaryClick={this.onButtonClick}
                  onSecondaryClick={this.onButtonClick}
              />

          </div>
      </div>
    );
  }
}

export default App;
