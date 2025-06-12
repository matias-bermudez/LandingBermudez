function ListProducts ( {productos} ) {
    return (
        <section className="contenedor-productos">
            {
                productos.map(producto => (
                    <div className="producto">
                        <div>
                            <img src={producto.img} alt="" />
                            <h1>{producto.nick}</h1>
                            <h2>{producto.precio}</h2>
                        </div>
                        <button>Agregar al Carrito</button>
                    </div>
                ))
            }
        </section>
    );
}

export default ListProducts