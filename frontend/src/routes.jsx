import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Contador from './pages/contador/Contador'
import ApiContador from './pages/api/Api'

export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contador' element={<Contador />} />
                <Route path='/api-contador' element={<ApiContador />} />
            </Routes>
        </BrowserRouter>
    )
}