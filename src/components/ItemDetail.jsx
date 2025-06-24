import './ItemDetail.css'
import ItemCount from './ItemCount'
function ItemDetail ( { producto } ) {
        if (!producto) return <p>Cargando...</p>;

    if(!producto.image?.length > 1) {
        return (
            <section key={producto.id} className="detalle-producto">
                <div className="fotos-info">
                    <img src={producto.thumbnail} alt={producto.nick} />
                    <div className="texto-producto">
                        <h2>{producto.title}</h2>
                        <div>
                            <h2>U$S {producto.price}</h2>
                            <p> | </p>
                            <h2>Hasta 10 cuotas sin recargo</h2>
                            <p> | </p>
                            <ItemCount />
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
                <h3>Descripción</h3>
                <p>{producto.description}</p>
            </section>
        )
    } else {
        return (
            <section key={producto.id} className="detalle-producto">
                <div className="fotos-info">
                    <img src={producto.thumbnail} alt={producto.nick} />
                    <img src={producto.images[1]} alt={producto.nick} />
                    <div className="texto-producto">
                        <h2>{producto.title}</h2>
                        <div>
                            <h2>U$S {producto.price}</h2>
                            <p> | </p>
                            <h2>Hasta 10 cuotas sin recargo</h2>
                            <p> | </p>
                            <ItemCount />
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
                <h3>Descripción</h3>
                <p>{producto.description}</p>
            </section>
        )
    }
}


export default ItemDetail