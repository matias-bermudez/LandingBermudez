import { useState } from "react"
import "./ItemCount.css"

function ItemCount() {
    const [count, setCount] = useState(0)

    const handleResta = () => {
        if(count > 0 ){
            setCount(count - 1)
        }    
    }

    const handleSuma = () => {
        if(count < 99){
            setCount(count + 1)
        }
    }

    return (
        <section>
            <div className="botones">
                <button onClick={handleResta}>-</button>
                <h2>{count}</h2>
                <button onClick={handleSuma}>+</button>
            </div> 
                <button>Agregar Al carrito</button>
        </section>       
    )
}

export default ItemCount