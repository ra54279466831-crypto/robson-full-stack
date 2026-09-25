import './Contador.scss'
import { Link } from 'react-router-dom'

import { useState } from 'react'

export default function Contador(){
    const [contador, setContador] = useState(0)
    const [input, setInput] = useState("Digite alguma coisa")

    function mais(){
        if (contador < 10){
            setContador(contador + 1)
        }
    }

    function menos(){
        if (contador > 0){
            setContador(contador - 1)
        }
    }

    function alterar(e){
        let valor = e.target.value
        setInput(valor)
    }

    return(
        <div className="contador-page">
            <header>
                <Link to='/'>
                    Voltar
                </Link>
                
                <h1>Contador | React</h1>
            </header>
            <section>
                <h2>Contador</h2>
                <div className="contador">
                    <button onClick={mais}>+</button>
                    <h2>{contador}</h2>
                    <button onClick={menos}>-</button>
                </div>
            </section>

            <section>
                <h2>
                    Input Mutável
                </h2>
                <div className="input">
                    <h2>{input}</h2>
                    <input type="text" onChange={alterar} />
                </div>
            </section>
        </div>
    )
}