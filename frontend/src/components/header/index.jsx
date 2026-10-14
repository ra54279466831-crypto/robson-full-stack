import './index.scss'
import { Link } from 'react-router-dom'

export default function Header({ titulo }) {

    return(
        <div className="comp-header">
            <Link to='/' className='voltar'>
                Voltar
            </Link>

            <h1>{titulo ?? "Pagina react"}</h1>
        </div>
    )
}   