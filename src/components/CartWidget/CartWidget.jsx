import logoCarrito from '../../assets/img/carrito.png'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"

function CartWidget () {
    const { getQuantity } = useContext(CartContext)
    const contador = getQuantity();

    return (
        <Link className="carrito" to="/cart">
            <button><img src={logoCarrito} alt="Imagen de carrito de compras"/></button>
            <p>{contador}</p>
        </Link>
    );
}

export default CartWidget