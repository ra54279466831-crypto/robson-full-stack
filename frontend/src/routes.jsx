import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Contador from './pages/contador/Contador'
import ApiContador from './pages/api/Api'
import Change from './pages/change/Change'
import ChamadaAPI from './pages/chamadaAPI/chamadaAPI';
import Ingresso from './pages/ingresso/ingresso';

export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contador' element={<Contador />} />
                <Route path='/change' element={<Change />} />
                <Route path='/api-contador' element={<ApiContador />} />
                <Route path='/api' element={<ChamadaAPI />} />
                <Route path='/ingresso' element={<Ingresso />} />
            </Routes>
        </BrowserRouter>
    )
}