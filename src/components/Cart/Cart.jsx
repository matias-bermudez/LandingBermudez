import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../../components/CartItem/CartItem"
import './Cart.css' 
import CartDetail from "../CartDetail/CartDetail"

function Cart () {
    const { cart } = useContext(CartContext)
    if(cart) {
        return (
            <section className="seccion-carrito">
                <CartDetail />
                {   
                    cart.map(prod => (
                        <CartItem key={prod.id} producto={prod} />
                    ))
                }
            </section>
        )
    } else {
    }
    
}

export default Cart