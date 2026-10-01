import './Change.scss'
import { useState } from "react"
import { Link } from 'react-router-dom'

export default function Change(){
    const [titulo1, setTitulo1] = useState("Digite alguma coisa")
    const [preTexto, setPreTexto] = useState('')
    const [titulo2, setTitulo2] = useState("Digite e envie o texto")
    const [radio, setRadio] = useState(true)

    const [cor, setCor] = useState('#FFF')

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
        </div>
    )
}