import Item from './Item'
function ItemList ( {productos} ) {
    return (
        <section className="contenedor-productos">
            {
                productos
                .filter(producto => producto.title.length <= 25)
                .map(producto => (
                    <Item producto={producto}/>
                ))
            }
        </section>
    );
}

export default ItemList