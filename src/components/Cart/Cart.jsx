import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../../components/CartItem/CartItem"
import './Cart.css' 
import CartDetail from "../CartDetail/CartDetail"

function Cart () {
    const { cart } = useContext(CartContext)
    if(cart[0] != null) {
        return (
            <section className="seccion-carrito">
                <CartDetail />
                {   
                    cart.map(prod => (
                        <CartItem key={prod.id} className="producto-carrito" producto={prod} />
                    ))
                }
            </section>
        )
    } else {
        return (
            <section className="seccion-vacio">
                <h1>El carrito esta vacio...</h1>
            </section>
        )
    }
}

export default Cart