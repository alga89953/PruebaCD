import { Navbar } from "../components/Navbar"
//import { Footer } from "../components/Footer"
import {Route, Routes} from "react-router-dom"
import { UserMM } from "../pages/UserMM"
import { UserC } from "../pages/UserC"
import { Reportes } from "../pages/Reportes"
import { Pedidos } from "../pages/Pedidos"
import { AboutPage } from "../pages/AboutPage"
import { HomePage } from "../pages/HomePage"
import { Footer } from "../components/Footer"
import { Login } from "../pages/Login"
export const DashboardRoute = () =>{
    return(
        <>
        
        <Navbar/>
        <Routes>
            <Route path="home" element={<HomePage/>}/>
            <Route path="usermm" element={<UserMM/>}/>
            <Route path="userc" element={<UserC/>}/>
            <Route path="reportes" element={<Reportes/>}/>
            <Route path="pedidos" element={<Pedidos/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="login" element={<Login/>}/>
        </Routes>
        <Footer/>
        </>
        

    )
}