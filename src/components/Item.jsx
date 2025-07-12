import './Item.css'
import { Link } from 'react-router-dom';

function Item( {producto} ) {
    return (
        <div key={producto.id} className={producto.category}>
            <Link to={`/products/${producto.id}`}>
                <img src={producto.thumbnail} alt="" />
                <h1>{producto.title}</h1>
                <h2>U$S {producto.price}</h2>
                <div className="contenedor-boton">
                    <button className="agregar-carrito">Agregar al Carrito</button>
                </div>
            </Link>
        </div>
    )
}

export default Item