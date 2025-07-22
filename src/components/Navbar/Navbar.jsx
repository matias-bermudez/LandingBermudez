import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import logo from '../../assets/img/logo-logi.png'
import { Link } from "react-router-dom"

function NavBar () {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/category/mouse">Mouses</Link></li>
                <li><Link to="/category/headphones">Headphones</Link></li>
                <li><Link to="/"><img src={logo} alt="Logo Logitech"/></Link></li>
                <li><Link to="/category/keyboard">Keyboard</Link></li>
                <li><Link to="/category/web-cams">Web Cams</Link></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar