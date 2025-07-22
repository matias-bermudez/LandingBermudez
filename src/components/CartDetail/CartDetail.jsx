import { useContext } from 'react'
import './CartDetail.css'
import { CartContext } from '../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"


function CartDetail () {
    const { eraseCart, getPrice, getCompleteleyQuantity } = useContext(CartContext)
    let cantidad = getCompleteleyQuantity()
    let precio = getPrice()
    const navigate = useNavigate()

    const handleErase = () => {
        const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Desea vaciar su carrito?",
            text: "El carrito se eliminara de forma permanente.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, quiero vaciarlo",
            cancelButtonText: "No, cancelar!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                title: "Confirmado!",
                text: "Tu carrito fue vaciado.",
                icon: "success"
                });
                eraseCart()
                navigate("/cart")
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelado.",
                    text: "El carrito no se vació",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className="datos-facturacion">
            <h2> Cantidad de productos: {cantidad}</h2>
            <h2>|</h2>
            <h2> Precio final: U$D {precio}</h2>
            <h2>|</h2>
            <button onClick={handleErase}>Vaciar</button>
            <h2>|</h2>
            <Link to="/cart/form">
                <button>Continuar</button>
            </Link>
        </div>
    )
}

export default CartDetail