import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './ProductDetail.css'
function ProductDetail () {
    const {id} = useParams()
    const [Producto, setProducto] = useState(null)
    const [imagenes, setImagenes] = useState(false)



    useEffect(() => {
        if(id) {
            fetch(`https://dummyjson.com/products/${id}`)
                .then((response) => response.json())
                .then(res => {
                    if(res.images.length > 1) {
                        setImagenes(true)
                    }
                    setProducto(res)
                })
                .then(console.log);
        } else {
            //algo
        }
    }, [id])

    if(!Producto) {
        return <p>Cargando ...</p>
    }
    if(!imagenes) {
        return (
            <section key={Producto.id} className="detalle-producto">
                <div className="fotos-info">
                    <img src={Producto.thumbnail} alt={Producto.nick} />
                    <div className="texto-producto">
                        <h2>{Producto.title}</h2>
                        <div>
                            <h2>U$S {Producto.price}</h2>
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
    } else {
        return (
            <section key={Producto.id} className="detalle-producto">
                <div className="fotos-info">
                    <img src={Producto.thumbnail} alt={Producto.nick} />
                    <img src={Producto.images[1]} alt={Producto.nick} />
                    <div className="texto-producto">
                        <h2>{Producto.title}</h2>
                        <div>
                            <h2>U$S {Producto.price}</h2>
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
}

export default ProductDetail