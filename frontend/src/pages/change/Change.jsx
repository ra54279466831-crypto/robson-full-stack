import './Change.scss'
import { useState } from "react"
import { Link } from 'react-router-dom'

export default function Change(){
    const [titulo1, setTitulo1] = useState("Digite alguma coisa")
    const [preTexto, setPreTexto] = useState('')
    const [titulo2, setTitulo2] = useState("Digite e envie o texto")
    const [radio, setRadio] = useState(false)

    const [cor, setCor] = useState('#FFF')

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)

    const [soma, setSoma] = useState(0)
    const [subtracao, setSubtracao] = useState(0)
    const [multiplicacao, setMultiplicacao] = useState(0)
    const [divisao, setDivisao] = useState(0)
    const [potencicao, setPotenciacao] = useState(0)
    const [raiz, setRaiz] = useState(0)

    function Somar(){
        let res = Number(n1) + Number(n2)
        setSoma(res)
    }

    function Subtracao(){
        let res = Number(n1) - Number(n2)
        setSubtracao(res)
    }

    function Multiplicacao(){
        let res = Number(n1) * Number(n2)
        setMultiplicacao(res)
    }

    function Divisao(){
        let res = Number(n1) / Number(n2)
        setDivisao(res)
    }

    function Potenciacao(){
        let res = Math.pow(n1, n2)
        setPotenciacao(res)
    }

    function Raiz(){
        let res = Math.sqrt(n1)
        setRaiz(res)
    }

    return (
        <div className="change-page" style={{ backgroundColor: `${cor}`}}>
            <header>
                <Link to='/' className='voltar'>
                    Voltar
                </Link>
                
                <h1>Evento Change | React </h1>
            </header>
            <section>
                <div className="input">
                    <h2>{titulo1}</h2>
                    <input type="text" onChange={(e) => setTitulo1(e.target.value)} />
                </div>
            </section>
            <section>
                <div className="input">
                    <h2>{titulo2}</h2>
                    <input type="text" onChange={(e) => setPreTexto(e.target.value)} />
                    <button onClick={() => setTitulo2(preTexto)}>Enviar</button>
                </div>
            </section>
            <section>
                <div className="input">
                    <h2>{titulo2}</h2>
                    <input 
                    type="color" 
                    value={cor} 
                    onChange={(e) => setCor(e.target.value)}
                    style={{ width: '80%' }} />
                </div>
            </section>

            <section>
                <div className="input">
                    <h2>Programar é legal? {radio ? "Sim" : "Não"}</h2>
                    <input type="checkbox"
                    checked={radio}
                    onChange={(e) => setRadio(e.target.checked)}
                    />
                </div>
            </section>

            <section>
                <div className="input">
                    <h2>Soma</h2>
                    <hr />
                    <br />
                    <div className="calculador">
                        <input type="text" onChange={(e) => setN1(e.target.value)}/>
                        <h3>+</h3>
                        <input type="text" onChange={(e) => setN2(e.target.value)}/>
                        <h3>=</h3>
                        <h3>{soma}</h3>
                    </div>
                    <br />
                    <button className='btn' onClick={Somar}>Somar</button>
                </div>
            </section>

            <section>
                <div className="input">
                    <h2>Subtração</h2>
                    <hr />
                    <br />
                    <div className="calculador">
                        <input type="text" onChange={(e) => setN1(e.target.value)}/>
                        <h3>-</h3>
                        <input type="text" onChange={(e) => setN2(e.target.value)}/>
                        <h3>=</h3>
                        <h3>{subtracao}</h3>
                    </div>
                    <br />
                    <button className='btn' onClick={Subtracao}>Subtrair</button>
                </div>
            </section>

            <section>
                <div className="input">
                    <h2>Multiplicação</h2>
                    <hr />
                    <br />
                    <div className="calculador">
                        <input type="text" onChange={(e) => setN1(e.target.value)}/>
                        <h3>x</h3>
                        <input type="text" onChange={(e) => setN2(e.target.value)}/>
                        <h3>=</h3>
                        <h3>{multiplicacao}</h3>
                    </div>
                    <br />
                    <button className='btn' onClick={Multiplicacao}>Multiplicar</button>
                </div>
            </section>

            <section>
                <div className="input">
                    <h2>Divisão</h2>
                    <hr />
                    <br />
                    <div className="calculador">
                        <input type="text" onChange={(e) => setN1(e.target.value)}/>
                        <h3>%</h3>
                        <input type="text" onChange={(e) => setN2(e.target.value)}/>
                        <h3>=</h3>
                        <h3>{divisao}</h3>
                    </div>
                    <br />
                    <button className='btn' onClick={Divisao}>Multiplicar</button>
                </div>
            </section>

            <section>
                <div className="input">
                    <h2>Multiplicação</h2>
                    <hr />
                    <br />
                    <div className="calculador">
                        <input type="text" onChange={(e) => setN1(e.target.value)}/>
                        <h3>elevado a:</h3>
                        <input type="text" onChange={(e) => setN2(e.target.value)}/>
                        <h3>=</h3>
                        <h3>{potencicao}</h3>
                    </div>
                    <br />
                    <button className='btn' onClick={Potenciacao}>Potenciar</button>
                </div>
            </section>

            <section>
                <div className="input">
                    <h2>Raiz Quadrada</h2>
                    <hr />
                    <br />
                    <div className="calculador">
                        <input type="text" onChange={(e) => setN1(e.target.value)}/>
                        <h3>=</h3>
                        <h3>{raiz}</h3>
                    </div>
                    <br />
                    <button className='btn' onClick={Raiz}>Calcular Raiz</button>
                </div>
            </section>
        </div>
    )
}