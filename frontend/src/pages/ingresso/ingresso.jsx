import { useState } from "react";
import Header from "../../components/header";

import './ingresso.scss'

export default function Ingresso(){
    const [quantidade, setQuantidade] = useState(0)
    const [meia, setMeia] = useState(0)
    const [cupom, setCupom] = useState(0)
    const [total, setTotal] = useState(0)

    const valor = 30
    
    function calcular(){
        let valorTotal = Number(quantidade) * valor

        if(meia) {
            valorTotal /= 2
        }

        if(cupom === "QUERO50"){
            valorTotal *= 0.5
        }

        setTotal(valorTotal)
    }

    return(
        <div className="ingresso-page">
            <Header titulo="Simulador de ingresso" />
            <div className="content">
                <div className="ingresso">
                    <h1>Meu ingresso</h1>
                    <label htmlFor="">
                        <p>Quantidade de Ingresso</p>
                        <input type="text" onChange={e => setQuantidade(e.target.value)} />
                    </label>
                    <label htmlFor="">
                        <p>Cupom: </p>
                        <input type="text" onChange={e => setCupom(e.target.value)} />
                    </label>
                    <label htmlFor="" className="x">
                        <p>Meia entrada</p>
                        <input type="checkbox" onChange={e => setMeia(e.target.checked)} />
                    </label>
                    <button onClick={calcular}>Calcular tudo</button>
                    <p>O total é: R${total.toFixed(2)}</p>
                </div>
            </div>
            
        </div>
    )
}