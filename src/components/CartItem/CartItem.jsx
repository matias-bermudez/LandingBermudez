import './CartItem.css'
import ItemCount from '../../components/ItemCount/ItemCount'
function CartItem ( {producto} ) {
    return (
        <section key={producto.id} className="prod-carrito">
            <img src={producto.thumbnail} alt={producto.nick} />
            <div>
                <h2>{producto.title}</h2>
                <h3>{producto.description}</h3>    
            </div>
            <h2>U$S {producto.price}</h2>
            <ItemCount item={producto}/>

        </section>
    )
}

export default CartItem