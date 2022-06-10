import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../../context/CartContext";

function Carrito() {
  const {cartItems, deleteItemFromCart, vaciarCarrito,totalPrecio} = useContext(CartContext)

   return (
     <div className="container">
       {cartItems.length === 0 ? 
                <div className="container mt-5 w-100 h-100">
                    <div className="bg-secondary w-100 h-100  rounded"><p className=" text-white display-5 p-3">No tienes productos en el carrito aun</p> </div>
                    <hr />
                    <Link to='/'>
                        <button className='btn btn-outline-secondary text-white'>Ir a la tienda a seleccionar productos</button>
                    </Link>
                </div>
            :
            <>
            
              <div>
                {cartItems.map(item => 
                <div key={item.id} >
                  <div className="card-item-carrito">
                      <div className="carrito">
                        <div className="card-item-carrito">
                          <img className="img-carrito me-5 mb-2" src={item.imagen}/>
                          <p className="text-white">{item.nombre}</p>

                        </div>
                        <div className="cantidad d-flex align-items-center justify-content-center">
                              <p className="text-white me-5">Cantidad</p>
                              <p className="text-white display-5">{item.cantidad}</p>
                              <button className="btn btn-danger ms-4" onClick={()=> deleteItemFromCart(item)}>-</button>
                            </div>
                      </div>
                      
                      
                    <div className="descripcion-carrito">
                      <div className="d-flex justify-content-center">
                      </div>
                    </div>

                  </div>
                  <hr className="text-white" />
                </div>
                )}
                <div className="d-flex">
                <p className="text-white me-5 display-5">Precio Total</p>
                <p className="text-white me-5 display-5">{totalPrecio()}</p>
                <button className="btn btn-danger mb-4" onClick={vaciarCarrito}>Vaciar carrito</button>
                <button className="btn btn-success ms-5 mb-4">Comprar</button>
                </div>
              </div>
            </>
        }
     </div>
  );
};

export default Carrito;