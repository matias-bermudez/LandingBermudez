import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../../components/CartItem/CartItem"

function Cart () {
    const { cart } = useContext(CartContext)
    const productos = cart
    return (
        cart.map(prod => {
            <CartItem producto={prod} />
        })
    )
}

export default Cart