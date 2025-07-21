import { useContext } from 'react'
import './CartDetail.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

function CartDetail () {
    const { cart, eraseCart } = useContext(CartContext)
    let cantidad = 0
    let precio = 0
    cart.forEach(prod => {
        cantidad += prod.quantity 
        precio += (prod.quantity * prod.price)
    })
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