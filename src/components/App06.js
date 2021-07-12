import React, {useState} from 'react';

export default function App6(){
    const [nome, setNome] = useState('')

    return (
        <>
            Nome: <input type="text" value={nome} onChange={(event)=>setNome(event.target.value)}/>
            <br/>
            <p>Olá, {nome}</p>
        </>
    )
}
