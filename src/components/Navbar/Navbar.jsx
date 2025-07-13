import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import logo from '../../assets/img/logo-logi.png'
import { Link } from "react-router-dom"

function Navbar () {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/category/smartphones">Celulares</Link></li>
                <li><Link to="/category/laptops">Laptops</Link></li>
                <li><Link to="/"><img src={logo} alt="Logo Logitech"/></Link></li>
                <li><Link to="/category/mens-watches">Relojes</Link></li>
                <li><Link to="/category/motorcycle">Birodados</Link></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default Navbar