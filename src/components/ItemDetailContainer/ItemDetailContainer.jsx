import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProduct } from '../../firebase/db';

function ItemDetailContainer() {
    const {id} = useParams()
    const [Producto, setProducto] = useState(null)

    useEffect(() => {
        if(id) {
            getProduct(id)
                .then(res => setProducto(res))
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