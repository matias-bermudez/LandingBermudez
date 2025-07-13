import { useState, useContext } from "react"
import "./ItemCount.css"
import { CartContext } from "../../context/CartContext"

function ItemCount( { item } ) {
    const [count, setCount] = useState(1)
    const { addToCart } = useContext(CartContext)
    const handleResta = () => {
        if(count > 1 ){
            setCount(count - 1)
        }    
    }

    const handleSuma = () => {
        if(count < 99){
            setCount(count + 1)
        }
    }

    const handleAddToCart = () => {
        addToCart({...item, quantity: count})
    }

    return (
        <section>
            <div className="botones">
                <button onClick={handleResta}>-</button>
                <h2>{count}</h2>
                <button onClick={handleSuma}>+</button>
            </div> 
                <button onClick={handleAddToCart}>Agregar Al carrito</button>
        </section>       
    )
}

export default ItemCount