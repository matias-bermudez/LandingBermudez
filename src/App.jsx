import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartForm from './components/CartForm/CartForm'
import Cart from './components/Cart/Cart'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <ItemListContainer
              titulo={'¡Bienvenido a la tienda Logitech!'}
              slogan={'Lo mejor para que tu experiencia tecnológica sea superior'}
            />
          } />
          <Route path="/category/:type" element={
            <ItemListContainer
              titulo={'Productos por categoría'}
              slogan={'Encontrá lo mejor de cada tipo'}
            />
          } />
          <Route path="/products/:id" element={
            <ItemDetailContainer />
          }
          />
          <Route path="/cart" element={
            <Cart />
          } />
          <Route path="/cart/form" element={
            <CartForm /> 
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
