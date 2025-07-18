import Item from '../Item/Item'
import './ItemList.css'
function ItemList ( {productos} ) {
    return (
        <section className="contenedor-productos">
            {
                productos.map(producto => (
                    <Item key={producto.id} producto={producto}/>
                ))
            }
        </section>
    );
}

export default ItemList