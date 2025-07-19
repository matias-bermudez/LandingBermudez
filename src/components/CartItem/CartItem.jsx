import './CartItem.css'
import ItemCountCart from '../../components/ItemCountCart/ItemCountCart'
function CartItem ( {producto} ) {
    return (
        <section key={producto.id} className="prod-carrito">
            <img src={producto.img1} alt={producto.nick} />
            <img src={producto.img2} alt={producto.nick} />
            <div className="info-txt">
                <h2>{producto.name}</h2>
                <h3>{producto.description}</h3>    
            </div>
            <h2 className="precio">U$S {producto.price}</h2>
            <ItemCountCart item={producto}/>
        </section>
    )
}

export default CartItem