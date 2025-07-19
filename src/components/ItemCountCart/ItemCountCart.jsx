import { useState, useContext } from "react"
import "../../components/ItemCount/ItemCount.css"
import { CartContext } from "../../context/CartContext"

function ItemCountCart ( {item} ) {
        const [count, setCount] = useState(item.quantity)
        const { addItem, eraseItem, subItem } = useContext(CartContext)

        const handleResta = () => {
            if(count > 0 ){
                subItem(item)
                setCount(count -1)
            }    
        }
    
        const handleSuma = () => {
            if(count < 99){
                setCount(count + 1)
                addItem(item)
            }
        }
    
        const handleErase = () => {
            eraseItem(item)
        }
    
        return (
            <section className="counter-detail">
                <div className="botones-detail">
                    <button onClick={handleResta}>-</button>
                    <h2>{count}</h2>
                    <button onClick={handleSuma}>+</button>
                </div> 
                    <button className="vaciar-carrito" onClick={handleErase}>🗑️</button>
            </section>       
        )
}

export default ItemCountCart