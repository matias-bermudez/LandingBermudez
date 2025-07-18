import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductsByCategory } from '../../firebase/db'

function ItemListContainer ({slogan, titulo}) {
    const [productos, setProductos] = useState([])
    const {type} = useParams()

    useEffect(() => {
        if(type) {
            getProductsByCategory(type)
                .then(res => setProductos(res))
                .catch((err) => console.log(err))
        } else { 
            getProducts()
                .then(res => setProductos(res))
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