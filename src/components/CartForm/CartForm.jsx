import "./CartForm.css"
import { useState } from 'react'

function CartForm () {
    const [envio, setEnvio] = useState(false)
    return (
        <form className="formulario" action="">
            <input type="text" placeholder="Ingrese Nombre y Apellido aqui..."/>
            <input type="email" placeholder="Ingrese email aqui..." required/>
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
                    <input type="text" placeholder="Direccion de Envio" required/>
                )
            }
            <button type="submit">Confirmar Compra</button>
        </form>
    )
}

export default CartForm