import './CartItem.css'
import ItemCountCart from '../../components/ItemCountCart/ItemCountCart'
function CartItem ( {producto} ) {
    return (
        <section key={producto.id} className="prod-carrito">
            <img src={producto.thumbnail} alt={producto.nick} />
            <div className="info-txt">
                <h2>{producto.title}</h2>
                <h3>{producto.description}</h3>    
            </div>
            <h2>U$S {producto.price}</h2>
            <ItemCountCart item={producto}/>
        </section>
    )
}

export default CartItem