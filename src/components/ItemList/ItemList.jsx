import Item from '../Item/Item'
function ItemList ( {productos} ) {
    return (
        <section className="contenedor-productos">
            {
                productos
                .filter(producto => producto.title.length <= 25)
                .map(producto => (
                    <Item key={producto.id} producto={producto}/>
                ))
            }
        </section>
    );
}

export default ItemList