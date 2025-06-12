import './ListProducts.css'
function ListProducts ( {productos} ) {
    return (
        <section className="contenedor-productos">
            {
                productos.map(producto => (
                    <div className="producto">
                        <img src={producto.img} alt="" />
                        <div className="info-producto">
                            <h1>{producto.nick}</h1>
                            <h2>U$S{producto.precio}</h2>
                        </div>
                        <div className="contenedor-boton">
                            <button className="agregar-carrito">Agregar al Carrito</button>
                        </div>
                    </div>
                ))
            }
        </section>
    );
}

export default ListProducts