import calculos from './controllers/calculosController.js'

export default function AddRoutes(api){
    api.use(calculos)
}