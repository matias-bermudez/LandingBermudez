import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ListProducts from './ListProducts'

function ItemListContainer ({slogan, titulo}) {
    const [productos, setProductos] = useState([])
    const {type} = useParams()

    const getProductos = () => {
        return fetch('/db/productos.json')
                .then((response) => response.json())
                .then(data => { return data })
                .catch((err) => console.log(err))
    }

    useEffect(() => {
        getProductos()
            .then(data => {
                if(type) {
                    const filtrados = data.filter(producto => producto.type === type)
                    setProductos(filtrados)
                } else {
                    const filtrados = data.filter(producto => producto.id != -1)
                    setProductos(filtrados)                }
            })
            .catch(err => console.log(err))
    }, [type])

    return (
        <section className="base-productos">
            <h1>{titulo}</h1>
            <h2 className="slogan">{slogan}</h2>
            <ListProducts productos={productos} />
        </section>
    );
}

export default ItemListContainer