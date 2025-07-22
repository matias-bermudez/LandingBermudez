import { serverTimestamp } from "firebase/firestore"
import { CartContext } from "../../context/CartContext"
import "./CartForm.css"
import { useContext, useState } from 'react'
import { createOrder } from "../../firebase/db"
import { useNavigate } from "react-router-dom"

function CartForm () {
    const [envio, setEnvio] = useState(false)
    const { cart, eraseCart } = useContext(CartContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        let order = {}
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const pay = form.menu.value
        const phone = form.number.value
        if(envio) {
            const dir = form.direction.value
            order = {
                user: {email, name, phone, dir},
                items: cart,
                time: serverTimestamp(),
                pay
            }
        } else {
            order = {
                user: {email, name, phone, dir: ""},
                items: cart,
                time: serverTimestamp(),
                pay
            }
        }
        createOrder(order).then(() => {
            eraseCart()
            navigate("/")
        })
    }
    
    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Ingrese Nombre y Apellido aqui..."/>
            <input type="email" id="email" placeholder="Ingrese email aqui..." required/>
            <input type="number" id="number" placeholder="Ingrese su numero aqui..." required/>
            <div>
                <label htmlFor="menu">Selecciona metodo de pago: </label>
                <select name="menu" id="menu" required>
                    <option value="Efectivo">Efectivo</option>
                    <option value="Transferencia">Transferencia</option>
                    <option value="Credito">Credito</option>
                    <option value="Debito">Debito</option>
                    <option value="Mercado Pago">Mercado Pago</option>
    \            </select>
            </div>
            <div>
                <label htmlFor="boton-envio">
                    <input type="radio" name="retiro" id="boton-envio" onChange={() => setEnvio(true)} required/>
                    Con envio
                </label>
                <label htmlFor="boton-sin-envio">
                    <input type="radio" name="retiro" id="boton-sin-envio" onChange={() => setEnvio(false)} required/>
                    Retiro en la empresa
                </label>
            </div>
            {
                envio && (
                    <input type="text" id="direction" placeholder="Direccion de Envio" required/>
                )
            }
            <button type="submit">Confirmar Compra</button>
        </form>
    )
}

export default CartForm