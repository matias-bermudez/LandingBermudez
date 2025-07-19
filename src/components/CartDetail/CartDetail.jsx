import { useContext } from 'react'
import './CartDetail.css'
import { CartContext } from '../../context/CartContext'

function CartDetail () {
    const { cart } = useContext(CartContext)
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
            <button>Vaciar</button>
            <h2>|</h2>
            <button>Continuar</button>
        </div>
    )
}

export default CartDetail