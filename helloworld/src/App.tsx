

import React, { ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';

import CadastroCliente from './Component/CadastroCliente'

function App() {

  let nomeCliente: string = ''
  
  const txtNomeOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    nomeCliente = event.target.value
  }

  const txtNomeClick = () =>{
    alert(nomeCliente)
  }

  return (
    <div className="App">
  
    <CadastroCliente />
    {/*comentario em jsx*/}

    <label>Nome</label>
    <input type='text' id='txtNome' onChange={txtNomeOnChange} />
    <input type='button' value='Exibir Nome' onClick={txtNomeClick}/>
  
    

    </div>
  );
}

export default App;
