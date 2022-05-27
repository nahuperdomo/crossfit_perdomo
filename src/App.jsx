import './App.css';
import ListContainer from './componentes/pages/listContainer';
import { BrowserRouter, Route, Routes }from 'react-router-dom'
import Navbar from './componentes/navbar/navbar';
import ItemDetailConainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import Carrito from './componentes/Carrito/Carrito';
function App() {
  
  console.log(CartContextProvider);
  return (
    <div className="App">
      
      <BrowserRouter>
        <CartContextProvider>

          <Navbar/>
          <Routes>
            <Route path="/" element = { <ListContainer/> } />
            <Route path="/carrito" element={<Carrito/>}/>
            <Route path="/detalle:id" element = { <ItemDetailConainer/> } />
            <Route path='/*' element = { <ListContainer/> } />
          </Routes>

        </CartContextProvider>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
