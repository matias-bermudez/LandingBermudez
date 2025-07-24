import './CartItem.css'
import ItemCount from '../../components/ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

function CartItem ( {producto} ) {
    const { eraseItem } = useContext(CartContext)
    
    const handleErase = () => {
            eraseItem(producto)
        }

    return (
        <section key={producto.id} className="prod-carrito">
            <img src={producto.img1} alt={producto.nick} />
            <img src={producto.img2} alt={producto.nick} />
            <div className="info-txt">
                <h2>{producto.name}</h2>
                <h3>{producto.description}</h3>    
            </div>
            <h2 className="precio">U$S {producto.price}</h2>
            <ItemCount item={producto} type={"cart"}/>
            <button className="vaciar-carrito" onClick={handleErase}>🗑️</button>
        </section>
    )
}

export default CartItem