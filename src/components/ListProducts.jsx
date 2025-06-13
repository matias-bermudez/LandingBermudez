import './ListProducts.css'
import { Link } from 'react-router-dom';
function ListProducts ( {productos} ) {
    return (
        <section className="contenedor-productos">
            {
                productos.map(producto => (
                    <div key={producto.id} className={producto.type}>
                        <Link to={`/producto/${producto.id}`}>
                            <img src={producto.img} alt="" />
                            <div className="info-producto">
                                <h1>{producto.nick}</h1>
                                <h2>U$S {producto.precio}</h2>
                            </div>
                            <div className="contenedor-boton">
                                <button className="agregar-carrito">Agregar al Carrito</button>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </section>
    );
}

export default ListProducts