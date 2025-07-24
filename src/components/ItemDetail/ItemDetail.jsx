import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
function ItemDetail ( { producto } ) {
    if (!producto) return <p>Cargando...</p>;

    return (
        <section key={producto.id} className="detalle-producto">
            <div className="informacion-producto">
                    <h1>{producto.name}</h1>
                    <h2>U$D {producto.price}</h2>
            </div>
            <div className="descripcion">
                <h3>Descripción</h3>
                <p>{producto.description}</p>
            </div>
            <div className="agregar">
                    <ItemCount item={producto} type={"detail"}/>
            </div>
            
            <div className="fotos-individuales">
                <img src={producto.img1} alt={producto.name} />
                <img src={producto.img2} alt={producto.name} />
            </div>
            <img src={producto.imgDetail} alt={producto.name} className="foto-principal"/>
        </section>
    )
}

export default ItemDetail