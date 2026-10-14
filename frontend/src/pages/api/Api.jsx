import Header from '../../components/header'
import './Api.scss'

import { useState } from 'react'

export default function ApiContador(){
    const [contador, setContador] = useState(0)

    async function mais() {
        const resultado = await fetch(`http://localhost:3000/aumentar/${contador}`)
        const dados = await resultado.json()

        setContador(dados.aumentar)
    }

    async function menos(){
        const resultado = await fetch(`http://localhost:3000/diminuir/${contador}`)
        const dados = await resultado.json()

        setContador(dados.diminuir)
    }


    return(
        <div className="contador-page">
            <Header titulo="Página api" />
            <section>
                <h2>Contador</h2>
                <div className="contador">
                    <button onClick={mais}>+</button>
                    <h2>{contador}</h2>
                    <button onClick={menos}>-</button>
                </div>
            </section>
        </div>
    )
}