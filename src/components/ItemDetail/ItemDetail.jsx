import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
function ItemDetail ( { producto } ) {
    if (!producto) return <p>Cargando...</p>;

    return (
        <section key={producto.id} className="detalle-producto">
            <div className="fotos-info">
                <img src={producto.imgDetail} alt={producto.name} />
                <div className="texto-producto">
                    <h2>{producto.name}</h2>
                    <div className="compra">
                        <h2>U$S {producto.price}</h2>
                        <p> | </p>
                        <h2>Hasta 10 cuotas sin recargo</h2>
                        <p> | </p>
                        <ItemCount item={producto}/>
                    </div>
                </div>
            </div>
            <h3>Descripción</h3>
            <p>{producto.description}</p>
        </section>
    )
}


export default ItemDetail