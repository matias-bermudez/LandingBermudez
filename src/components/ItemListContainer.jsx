import './ItemListContainer.css'

function ItemListContainer ({slogan, titulo}) {
    return (
        <section className="base-productos">
            <h1>{titulo}</h1>
            <h2 className="slogan">{slogan}</h2>
        </section>
    );
}

export default ItemListContainer