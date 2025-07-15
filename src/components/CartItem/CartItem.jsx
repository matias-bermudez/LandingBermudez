function CartItem ( {producto} ) {
    return (
        <section key={producto.id}>
            <img src={producto.thumbnail} alt={producto.nick} />
            
        </section>
    )
}

export default CartItem