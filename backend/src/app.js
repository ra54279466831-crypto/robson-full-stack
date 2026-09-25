import 'dotenv/config'
import express from 'express'
import cors from 'cors'
const app = express()

import AddRoutes from './router.js'

app.use(cors())
app.use(express.json())
AddRoutes(app)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`---> API rodando na porta ${PORT}`)
})