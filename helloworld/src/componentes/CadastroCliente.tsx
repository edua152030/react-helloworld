import React, { ChangeEvent, useState } from 'react'
import './CadastroCliente.css'

interface rsClienteInterface {
    nome: string
    empresa:string
}

export default function CadastroCliente() {

    let NomeCliente: string = 'Nome fixo do cliente'
    let NomeEmpresa: string = 'Nome fixo da empresa'

    const [rsCliente, setRsCliente] = useState<rsClienteInterface>({
        nome: 'eduardo',
        empresa: 'programacao'
    })

    const txtNomeOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        
        NomeCliente = event.target.value

        setRsCliente({...rsCliente,
            nome: NomeCliente})
    }

    const txtempresaOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        
        NomeEmpresa = event.target.value

        setRsCliente({...rsCliente,
            empresa: NomeEmpresa})
    }

    const txtNomeclick = () => {
        alert('seu nome é :'.concat(rsCliente.nome))
    }

    const txtempresaclick = () => {
        alert('sua empresa é :'.concat(rsCliente.empresa))
    }

    return (
        <div className='componenteCadastro'>
            
            <h2>Cadastro de Cliente</h2>
            <label>nome</label>
            <input type='text' id='txtNome' onChange={txtNomeOnChange}/>
            <input type='button' value='enviar nome' onClick={txtNomeclick}/>
            <br/>
            <label>nome</label>
            <input type='text' id='txtNome' onChange={txtempresaOnChange}/>
            <input type='button' value='enviar nome' onClick={txtempresaclick}/>

            <p>nome: {rsCliente.nome}</p>
            <p>empresa: {rsCliente.empresa}</p>

        </div>    
    )
}

