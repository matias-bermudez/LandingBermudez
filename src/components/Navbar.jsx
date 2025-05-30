import CartWidget from './CartWidget'
import './Navbar.css'
import logo from '../assets/img/logo-logi.png'

function Navbar () {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#">Auriculares</a></li>
                <li><a href="#">Teclados</a></li>
                <li><a href="#"><img src={logo} alt="Logo Logitech"/></a></li>
                <li><a href="#">Ratones</a></li>
                <li><a href="#">Camaras Web</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default Navbar