import { Router } from 'express'
const endpoints = Router()

endpoints.get('/aumentar/:n1', (req, res) => {
    let valor = Number(req.params.n1)
    const novoValor = valor + 1

    res.status(200).send({
        aumentar: novoValor
    })
})
endpoints.get('/diminuir/:n1', (req, res) => {
    let valor = Number(req.params.n1)
    const novoValor = valor - 1

    res.status(200).send({
        diminuir: novoValor
    })
})
export default endpoints;