import './ItemListContainer.css'

function ItemListContainer ({slogan}) {
    return (
        <section className="base-productos">
            <h1>¡Bienvenido a la tienda Logitech!</h1>
            <h2 className="slogan">{slogan}</h2>
        </section>
    );
}

export default ItemListContainer