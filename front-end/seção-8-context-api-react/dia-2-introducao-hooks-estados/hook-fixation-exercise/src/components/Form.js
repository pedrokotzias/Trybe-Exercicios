import React, { useContext, useState } from 'react';
import FormContext from '../context/FormContext';

function Form() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState();
  const { addData } = useContext(FormContext)

  const handleClick = (event) => {
    event.preventDefault();
    const personalInfo = {
      name,
      age,
      city,
      module,
    };
    addData(personalInfo);
  };

  return (
    <form>
      <fieldset>
        <legend>
          Dados pessoais
        </legend>
        <label htmlFor="name">
          Nome completo
          <input 
            type="text"
            id="name"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor="age">
          Idade
          <input 
            type="number"
            id="age"
            value={ age }
            onChange={ ({ target }) => setAge(target.value) }
          />
        </label>
        <label htmlFor="name">
          Cidade
          <input 
            type="text"
            id="name"
            value={ city }
            onChange={ ({ target }) => setCity(target.value) }
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>
          Módulo
        </legend>
        <label htmlFor='fundamentals'>
          Fundamentos
          <input 
            type='radio'
            id='fundamentals'
            name='module'
            value="Fundamentos"
            checked={ module === 'Fundamentos' }
            onChange={ ({ target }) => setModule(target.value) }
          />
        </label>
        <label htmlFor='fundamentals'>
          Front-End
          <input 
            type='radio'
            id='frontend'
            name='module'
            value="Front-End"
            checked={ module === 'Front-End' }
            onChange={ ({ target }) => setModule(target.value) }
          />
        </label>
        <label htmlFor='fundamentals'>
          Back-End
          <input 
            type='radio'
            id='backend'
            name='module'
            value="Back-End"
            checked={ module === 'Back-End' }
            onChange={ ({ target }) => setModule(target.value) }
          />
        </label>
        <label htmlFor='fundamentals'>
          Ciência da Computação
          <input 
            type='radio'
            id='cs'
            name='module'
            value="Ciência da Computação"
            checked={ module === 'Ciência da Computação' }
            onChange={ ({ target }) => setModule(target.value) }
          />
        </label>
      </fieldset>
        <button
          type='submit'
          onClick={ handleClick }
        >
          Envie as informações
        </button>
    </form>
  );
}

export default Form;