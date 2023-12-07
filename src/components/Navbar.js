import { useDispatch, useSelector } from 'react-redux'
import i1 from './i1.png'
import { NavLink } from "react-router-dom"
import { startLogout } from '../actions/auth';

export const Navbar = () => {
    const {email} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(startLogout())
    }
    return (
        <nav className="navbar navbar-expand-lg " id="cb">
            <div className="container-fluid">
            <img src={i1} className="mb-2" alt="i1" width={55} height={55}/>
                <a className="navbar-brand"id="es"> ShopGo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                            <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ?
                                'active' : '')} to='/home' id="es">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ?
                                'active' : '')} to='/pedidos' id="es">Pedidos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ?
                                'active' : '')} to='/reportes'id="es">Reportes de usuario</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ?
                                'active' : '')} to='/userc'id="es">Usuarios</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ?
                                'active' : '')} to='/usermm'id="es">Moto-Mandaditos</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ?
                                'active' : '')} to='/about'id="es">Acerca de</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="text-left"id="es">
                    <span>{email} </span>
                    <button onClick={handleLogout} className="btn" id="b">Cerrar sesión</button>
                </div>
            </div>
        </nav>
    )
}