import './Item.css'
import { Link } from 'react-router-dom';

function Item( {producto} ) {
    return (
        <div key={producto.id} className="producto-individual">
            <Link to={`/products/${producto.id}`}>
                <img src={producto.img1} alt={producto.name} />
                <h1>{producto.name}</h1>
                <h2>U$S {producto.price}</h2>
            </Link>
        </div>
    )
}

export default Item