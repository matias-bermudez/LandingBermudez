import { CartContext } from './CartContext'
import { useState } from 'react'

function CartProvider ( {children} ) {
    const [cart, setCart] = useState([])
    
    const addToCart = (product) => {
        setCart([...cart, product])
    }

    const getQuantity = () => {
        if(cart.length > 0) {
            const quantities = cart.map(prod => prod.quantity)
            const total = quantities.reduce((acc, current) => acc + current)
            return total
        } else {
            return 0
        }
    }

    return (
        <CartContext.Provider value={ {cart, addToCart, getQuantity} }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider