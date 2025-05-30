import './ItemListContainer.css'

function ItemListContainer ({slogan}) {
    return (
        <section className="base-products">
            <h1 className="slogan">{slogan}</h1>
        </section>
    );
}

export default ItemListContainer