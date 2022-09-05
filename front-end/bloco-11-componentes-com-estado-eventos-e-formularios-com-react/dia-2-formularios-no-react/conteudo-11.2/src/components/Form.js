import React, { Component } from 'react';

import PersonalFieldset from './PersonalFieldset'
import DataFieldset from './DataFieldset';
import './Form.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
      allTrue: false,
      formWithErrors: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleError() {
    const { name, email, age, anecdote, allTrue } = this.state;

    const errorCases = [
      !name.length,
      !email.match(/\S+@\S+\.\S+/),
      !age.length,
      !anecdote.length,
      !allTrue,
    ];

    const formsFilled = errorCases.every((error) => error !== true);

    this.setState({
      formWithErrors: !formsFilled,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { this.handleError(); });
  }

  render() {
    const { name, email, age, anecdote, allTrue, formWithErrors } = this.state;

    return (
      <div>
        <h1>Estados e React- Tecnologia fantástica ou reagin a regionalismos</h1>
        <form className='form'>
          <PersonalFieldset
            nameValue={ name }
            emailValue={ email }
            ageValue={ age }
            handleChange={ this.handleChange }
          />

          <DataFieldset 
            anecdoteValue={ anecdote }
            handleChange={ this.handleChange }
          />

          <label htmlFor='allTrue'>
            <input
            id='allTrue'
            name='allTrue'
            type='checkbox'
            onChange={ this.handleChange }
            value={ allTrue } />
            Tudo o que você informou é verdadeiro?
          </label>
        </form>
        { formWithErrors
          ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }>Todos os campos foram preenchidos</span> }
      </div>
    );
  }
}

export default Form;