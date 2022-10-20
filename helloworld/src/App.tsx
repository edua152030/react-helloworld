import React from 'react';
import './App.css';

import CadastroCliente from './componentes/CadastroCliente'

function App() {

  const empresa: string = "Cursos REACT"

  const rsCliente = {
    nome: 'Zanatta',
    endereco: 'Av. 21 de Abril 504'
  }


  return (
    <div className="App">

      <h1>{empresa}</h1>
      <CadastroCliente />
      {/* comentarios */}

    </div>
  );
}

export default App;
