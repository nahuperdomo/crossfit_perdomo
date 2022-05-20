import {Link} from 'react-router-dom';
import React from 'react';
function Navbar() {
    return (
      <div className="Navbar">
        <ul className="navbar">
            <Link to='/'>
              <li><a href="#">Inicio</a></li>
            </Link>
            <Link to='/productos'>
              <li><a href="#">Productos</a></li>
            </Link>
            <Link to='/tienda'>
              <li><a href="#">Tienda</a></li>
            </Link>
        </ul>
      </div>
    );
  }

  export default Navbar;