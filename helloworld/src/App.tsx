import React, {useState} from 'react';
import { StringLiteral } from 'typescript';
import './App.css';
import InputText from './componentes/InputText';

export default function App({ empresa, nome }: {empresa: string, nome: string}) {

  const [endereco, setEndereco] = useState('')

  return(
    <>
      <h1>empresa :{empresa}</h1>
      <h2>nome : {nome}</h2>
      <h2>endereço: {endereco}</h2>
      <InputText 
        tipo='text'
        id='txtEndereco'
        placeholder='Endereco'
        setState={setEndereco}/>
    </>
  )

};
