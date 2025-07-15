import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../../components/CartItem/CartItem"
import './Cart.css' 

function Cart () {
    const { cart } = useContext(CartContext)
    console.log("contenido del carrito", cart)
    if(cart) {
        return (
            <section className="seccion-carrito">
                {   
                    cart.map(prod => (
                        <CartItem key={prod.id} producto={prod} />
                    ))
                }
            </section>
        )
    } else {
        console.log("no ai nad")
    }
    
}

export default Cart