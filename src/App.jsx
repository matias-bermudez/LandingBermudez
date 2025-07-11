import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetail from './components/ItemDetail'
import ItemDetailContainer from './components/ItemDetailContainer'

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
