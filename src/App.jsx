import './App.css';
import { BrowserRouter, Route, Routes }from 'react-router-dom'
import Navbar from './componentes/navbar/navbar';
import Carrito from './componentes/Carrito/Carrito';
import { CartContextProvider } from './context/CartContext';
import ItemListConainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailConainer from './componentes/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className="App">
       <CartContextProvider> 
          <BrowserRouter>        
              <Navbar/>
              <Routes>
                <Route  path="/" element = { <ItemListConainer/> } />
                <Route  path='/:tipo' element = { <ItemListConainer/> } />
                <Route  path="/detalle/:id" element = { <ItemDetailConainer/> } />
                <Route  path="/carrito" element={<Carrito/>}/>
                <Route  path='/*' element = { <ItemListConainer/> } />
              </Routes>
          </BrowserRouter>
        </CartContextProvider>   
    </div>
  );
}

export default App;
