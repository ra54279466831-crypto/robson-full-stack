import Header from "../../components/header";

export default function Ingresso(){
    return(
        <div className="ingresso-page">
            <Header titulo="Simulador de ingresso" />
            <div className="content">
                <h1>Meu ingresso</h1>
                <label htmlFor="">
                    <p>Quantidade de Ingresso</p>
                    <input type="text" onChange={e => setQuantidade(e.target.value)} />
                </label>
                <label htmlFor="">
                    <p>Meia entrada</p>
                    <input type="checkbox" onChange={e => setMeia(e.target.checked)} />
                </label>
                <label htmlFor="">
                    <p>Cupom: </p>
                    <input type="text" onChange={e => setCupom(e.target.value)} />
                </label>
            </div>
        </div>
    )
}