import logoCarrito from '../assets/img/carrito.png'
import './CartWidget.css'

function CartWidget () {

    const contador = 2;
    return (
        <div className="carrito">
            <button><a href=""><img src={logoCarrito} alt="Imagen de carrito de compras"/></a></button>
            <p>{contador}</p>
        </div>
    );
}

export default CartWidget