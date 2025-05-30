import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer 
        titulo={'¡Bienvenido a la tienda Logitech!'}
        slogan={'Lo mejor para que tu experiencia tecnologica sea superior'} 
      />
    </>
  )
}

export default App
