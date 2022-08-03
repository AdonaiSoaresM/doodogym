import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./main/Home"
import { BrowserRouter } from 'react-router-dom';
import Register from "./main/Register"


function Rotas() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register />}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas

