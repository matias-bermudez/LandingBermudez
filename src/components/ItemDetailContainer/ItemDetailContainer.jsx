import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProducts } from '../../firebase/db';

function ItemDetailContainer() {
    const {id} = useParams()
    const [Producto, setProducto] = useState(null)

    useEffect(() => {
        if(id) {
            getProducts()
                .then(res => res.filter(prod => prod.id == id))
                .then(res => setProducto(res[0]))
                .catch(err => console.log(err))
        }
    }, [id])

    if(!Producto) {
        return <p>Cargando ...</p>
    }
    
    return (
        <ItemDetail producto={Producto} />
    )
}

export default ItemDetailContainer