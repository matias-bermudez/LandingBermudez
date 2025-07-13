import { CartContext } from './CartContext'

function CartProvider ( {children} ) {
    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider