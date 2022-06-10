import {Link} from 'react-router-dom';
import React from 'react';
function Navbar(props) {
    return (
      <div className="Navbar">
        <ul className="navbar">
            <Link to='/accesorios'>
              <li>Accesorios</li>
            </Link>
            <Link to='/suplementos'>
              <li>Suplementacion</li>
            </Link>
            <Link to='/'>
              <li>Tienda</li>
            </Link>
            <Link to='/carrito'>
              <li>Carrito <img src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" className="carritoIcon" alt="carrito compras"/></li>
            </Link>
        </ul>
      </div>
    );
  }

  export default Navbar;