import CartWidget from './CartWidget'
import './Navbar.css'
import logo from '../assets/img/logo-logi.png'
import { Link } from "react-router-dom"

function Navbar () {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/categoria/auriculares">Auriculares</Link></li>
                <li><Link to="/categoria/teclados">Teclados</Link></li>
                <li><Link to="/"><img src={logo} alt="Logo Logitech"/></Link></li>
                <li><Link to="/categoria/ratones">Ratones</Link></li>
                <li><Link to="/categoria/camaras">Camaras Web</Link></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default Navbar