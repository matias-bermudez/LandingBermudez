import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './ProductDetail.css'
function ProductDetail () {
    const {id} = useParams()
    const [Producto, setProducto] = useState(null)

    const getProductos = () => {
        return fetch('/db/productos.json')
                .then((response) => response.json())
                .then(data => { return data })
                .catch((err) => console.log(err))
    }

    useEffect(() => {
        getProductos()
            .then(data => {
                if(id != -1 && id == "") {
                    const encontrado = data.find(producto => producto.id == id)
                    setProducto(encontrado)
                } else {
                    const encontrado = data.find(producto => producto.id == -1)
                    setProducto(encontrado)
                }
            })
            .catch((err) => console.log(err))
    }, [id])

    if(!Producto) {
        return <p>Cargando ...</p>
    }

    return (
        <section key={Producto.id} className="detalle-producto">
            <div className="fotos-info">
                <img src={Producto.img} alt={Producto.nick} />
                <img src={Producto.img2} alt={Producto.nick} />
                <div className="texto-producto">
                    <h2>{Producto.nick}</h2>
                    <div>
                        <h2>U$S {Producto.precio}</h2>
                        <p> | </p>
                        <h2>Hasta 10 cuotas sin recargo</h2>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
            <h3>Descripción</h3>
            <p>{Producto.description}</p>
            <table></table>
        </section>
    )
}

export default ProductDetail