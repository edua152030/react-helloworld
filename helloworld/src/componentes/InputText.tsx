import { useState } from "react"
import React from 'react'

export default function InputText(props: {
    id: string,
    tipo: string,
    placeholder: string,
    setState: React.Dispatch<React.SetStateAction<string>>
}){   

    

    return (
        <>
        <input  type={props.tipo} 
        id={props.id} 
        placeholder={props.placeholder}
        onChange={(evento) => { props.setState(evento.target.value)}}/>        
        </>
        )
}