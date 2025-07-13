import logoCarrito from '../../assets/img/carrito.png'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function CartWidget () {
    const { getQuantity } = useContext(CartContext)
    const contador = getQuantity();

    return (
        <div className="carrito">
            <button><a href=""><img src={logoCarrito} alt="Imagen de carrito de compras"/></a></button>
            <p>{contador}</p>
        </div>
    );
}

export default CartWidget