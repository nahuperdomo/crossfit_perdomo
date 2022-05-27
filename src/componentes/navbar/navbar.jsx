import {Link} from 'react-router-dom';
import React from 'react';
function Navbar(props) {
    return (
      <div className="Navbar">
        <ul className="navbar">
            <Link to={"/:"+props.tipo}>
              <li><a href="#">Accesorios</a></li>
            </Link>
            <Link to='/:tipo'>
              <li><a href="#">Suplementacion</a></li>
            </Link>
            <Link to='/'>
              <li><a href="#">Tienda</a></li>
            </Link>
            <Link to='/carrito'>
              <li>Carrito</li>
            </Link>
        </ul>
      </div>
    );
  }

  export default Navbar;