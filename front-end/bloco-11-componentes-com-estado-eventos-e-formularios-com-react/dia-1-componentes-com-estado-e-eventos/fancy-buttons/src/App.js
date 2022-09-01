import React from 'react';
import './App.css';



class App extends React.Component {
  constructor() {
    super()
    this.handleClickButtonOne = this.handleClickButtonOne.bind(this)
    this.handleClickButtonTwo = this.handleClickButtonTwo.bind(this)
    this.handleClickButtonThree = this.handleClickButtonThree.bind(this)

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };
  }

  handleClickButtonOne() {
    const { clicksBtnOne } = this.state;
    this.setState((prevState) => ({
      clicksBtnOne: prevState.clicksBtnOne +1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(clicksBtnOne)}`)
    });
  }

  handleClickButtonTwo() {
    const { clicksBtnTwo } = this.state;
    this.setState((prevState) => ({
      clicksBtnTwo: prevState.clicksBtnTwo +1,
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(clicksBtnTwo)}`)
    });
  }


  handleClickButtonThree() {
    const { clicksBtnThree } = this.state;
    this.setState((prevState) => ({
      clicksBtnThree: prevState.clicksBtnThree +1,
    }), () => {
      console.log(`Botão 3 ${this.getButtonColor(clicksBtnThree)}`)
    });
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'red';
  }

  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
      <>
        <button 
          type='button' 
          onClick={ this.handleClickButtonOne } 
          style={ {backgroundColor: this.getButtonColor(clicksBtnOne) } }>
          { clicksBtnOne }
        </button>
        <button 
          type='button' 
          onClick={ this.handleClickButtonTwo }
          style={ {backgroundColor: this.getButtonColor(clicksBtnTwo) } }>
          { clicksBtnTwo }
        </button>
        <button 
          type='button' 
          onClick={ this.handleClickButtonThree }
          style={ {backgroundColor: this.getButtonColor(clicksBtnThree) } }>
          { clicksBtnThree }
        </button>
      </>
    );
  }
}

export default App;