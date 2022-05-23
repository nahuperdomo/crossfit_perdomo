import './App.css';

import ListContainer from './componentes/pages/listContainer';
import { BrowserRouter, Route, Routes }from 'react-router-dom'
import Navbar from './componentes/navbar/navbar';
import ItemDetailConainer from './componentes/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element = { <ListContainer/> } />
        <Route path="/detalle:id" element = { <ItemDetailConainer/> } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
