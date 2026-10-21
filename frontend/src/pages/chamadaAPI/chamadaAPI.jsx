import { useState } from 'react'
import './chamadaAPI.scss'
import axios from 'axios'
import Header from '../../components/header'

export default function ChamadaAPI() {
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState('')

    async function chamarApi() {
        const url = `https://viacep.com.br/ws/${cep}/json/`

        const res = await axios.get(url)
        const dados = res.data

        if (dados.erro) {
            setEndereco('CEP não encontrado!')
            return
        }

        let msg = dados.logradouro + " - " +
                  dados.bairro + " - " +
                  dados.localidade + " - " +
                  dados.uf

        setEndereco(msg)
    }

    return (
        
        <div className="cep-page">
            <Header titulo="Chamada de API" />

            <div className="content">
                <div className="cep">
                    <h1>Digite o seu CEP</h1>
                    <input
                        type="text"
                        value={cep}
                        onChange={e => setCep(e.target.value)}
                    />
                    <button onClick={chamarApi}>
                        Buscar CEP
                    </button>
                    <p>{endereco}</p>
                </div>
            </div>
        </div>
    )
}
