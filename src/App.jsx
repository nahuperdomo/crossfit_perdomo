import './App.css';
import ListContainer from './componentes/pages/listContainer';
import { BrowserRouter, Route, Routes }from 'react-router-dom'
import Navbar from './componentes/navbar/navbar';
import ItemDetailConainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Carrito from './componentes/Carrito/Carrito';
import { useParams } from 'react-router-dom';
import ItemListConainer from './componentes/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">  
        <BrowserRouter>        
            <Navbar/>
            <Routes>
              <Route exact path="/" element = { <ItemListConainer/> } />
              <Route exact path='/:tipo' element = { <ItemListConainer/> } />
              <Route exact path="/detalle/:id" element = { <ItemDetailConainer/> } />
              <Route exact path="/carrito" element={<Carrito/>}/>
              <Route exact path='/*' element = { <ItemListConainer/> } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
