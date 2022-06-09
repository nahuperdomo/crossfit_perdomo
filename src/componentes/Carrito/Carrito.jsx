import React, { useContext } from "react";
import {CartContext} from "../../context/CartContext";

function Carrito() {
  const {cartItems} = useContext(CartContext)

  const { deleteItemFromCart } = useContext(CartContext);
/*   const total = cartItems.reduce((valor, item) => valor + item.precio * item.cantidad, 0);
 */  return (
    <div>
      {cartItems?.map(item => 
        <div className="card-item-carrito">
            <div className="carrito">
              <div className="card-item-carrito">
                <img className="img-carrito me-5 mb-2" src={item.imagen}/>
                  <div className="cantidad d-flex align-items-center">
                    <p className="text-white me-5">Cantidad</p>
                    <p className="text-white display-5">{item.cantidad}</p>
                  </div>
              </div>
              <button className="btn btn-danger mb-4"/*  onClick={deleteItemFromCart(item)} */>Eliminar del carrito</button>
            </div>
          
          <div className="descripcion-carrito">
            <div className="d-flex justify-content-center">
              <p className="text-white me-5">Precio</p>
            {/*   <p className="text-white me-5">{total}</p> */}
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Carrito;