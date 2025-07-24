import { CartContext } from './CartContext'
import { useState } from 'react'
import Swal from "sweetalert2"

function CartProvider ( {children} ) {
    const [cart, setCart] = useState([])
    
    const addToCart = (product) => {
        const indice = cart.findIndex( prod => prod.id == product.id) 
        if(indice == -1) {
            setCart([...cart, product])
        } else {
            if(product.quantity != cart[indice].quantity) {
                const cartUpdate = [...cart]
                const prod = {...cartUpdate[indice]}
                if(product.quantity > cart[indice].quantity) {
                    prod.quantity +=  product.quantity
                } else {
                    prod.quantity -=  product.quantity
                }
                cartUpdate[indice] = prod
                setCart(cartUpdate)
            }
        }
        Swal.fire({
                title: `${product.name} agregado al carrito.`,
                text: `(${product.quantity} unidades)`,
                icon: "success"
        })
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

    const eraseItem = ( obj ) => {
        setCart(cart.filter(prod => prod.id !== obj.id))
    }

    const subItem = ( obj ) => {
        if(obj.quantity <= 1) {
            eraseItem(obj)
        } else {
            let indice = cart.findIndex( prod => prod.id == obj.id)
            if (indice != -1) {
                const cartUpdate = [...cart]
                const prod = { ...cartUpdate[indice] }
                prod.quantity -= 1
                if(prod.quantity <= 1) {
                    eraseItem(obj)
                } else {
                    cartUpdate[indice] = prod
                    setCart(cartUpdate)
                }
            }
        }
    }

    const addItem = ( obj ) => {
        if(obj.quantity < 99) {
            let indice = cart.findIndex( prod => prod.id == obj.id)
            if (indice != -1) {
                const cartUpdate = [...cart]
                const prod = { ...cartUpdate[indice] }
                prod.quantity += 1
                cartUpdate[indice] = prod
                setCart(cartUpdate)
            }
        }
    }

    const eraseCart = () => {
        setCart([])
    }

    const getPrice = () => {
        let precio = 0
        cart.forEach(prod => {
            precio += (prod.quantity * prod.price)
        })
        return precio
    }

    const getCompleteleyQuantity = () => {
        let quantity = 0
        cart.forEach(prod => {
            quantity += prod.quantity
        })
        return quantity
    }

    return (
        <CartContext.Provider value={ {cart, addToCart, getQuantity, eraseItem, subItem, addItem, eraseCart, getPrice, getCompleteleyQuantity} }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider