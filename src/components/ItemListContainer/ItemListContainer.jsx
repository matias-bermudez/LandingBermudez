import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

function ItemListContainer ({slogan, titulo}) {
    const [productos, setProductos] = useState([])
    const {type} = useParams()

    useEffect(() => {
        if(type) {
            fetch(`https://dummyjson.com/products/category/${type}`)
                .then((response) => response.json())
                .then((data) => setProductos(data.products))
                .catch((err) => console.log(err))
            } else { 
                fetch(`https://dummyjson.com/products/`)
                    .then((response) => response.json())
                    .then((data) => setProductos(data.products))
                    .catch((err) => console.log(err))
            }
    }, [type])

    return (
        <section className="base-productos">
            <h1>{titulo}</h1>
            <h2 className="slogan">{slogan}</h2>
            <ItemList productos={productos} />
        </section>
    );
}

export default ItemListContainer