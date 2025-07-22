import { useContext } from 'react'
import './CartDetail.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

function CartDetail () {
    const { eraseCart, getPrice, getCompleteleyQuantity } = useContext(CartContext)
    let cantidad = getCompleteleyQuantity()
    let precio = getPrice()
    return (
        <div className="datos-facturacion">
            <h2> Cantidad de productos: {cantidad}</h2>
            <h2>|</h2>
            <h2> Precio final: U$D {precio}</h2>
            <h2>|</h2>
            <button onClick={eraseCart}>Vaciar</button>
            <h2>|</h2>
            <Link to="/cart/form">
                <button>Continuar</button>
            </Link>
        </div>
    )
}

export default CartDetail