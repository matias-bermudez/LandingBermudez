import { useState, useContext, useEffect } from "react"
import "./ItemCount.css"
import { CartContext } from "../../context/CartContext"

function ItemCount( { item, type } ) {
    const { addToCart, eraseItem } = useContext(CartContext)
    const [count, setCount] = useState(1)
    useEffect(() => {
        if (type === "cart") {
            setCount(item.quantity)
        }
    }, [type, item])
    const handleResta = () => {
            if(count > 1 ){
                setCount(count - 1)
            } else {
                eraseItem(item)
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
            <section className="counter-detail">
                <div className="botones-detail">
                    <button onClick={handleResta}>-</button>
                    <h2>{count}</h2>
                    <button onClick={handleSuma}>+</button>
                </div> 
                <button className="agregar-boton-detail" onClick={handleAddToCart}>Agregar</button>
            </section>       
        )
}

export default ItemCount