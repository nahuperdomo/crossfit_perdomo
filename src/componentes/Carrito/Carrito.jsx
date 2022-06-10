import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../../context/CartContext";
import { getFirestore, doc, getDoc, getDocs, collection, where, addDoc, query} from 'firebase/firestore'
const Swal = require('sweetalert2')
function Carrito() {
  const {cartItems, deleteItemFromCart, vaciarCarrito,totalPrecio} = useContext(CartContext)


  function generarOrden() {
    let orden = {}
    orden.buyer = {
      name: "Nahuel",
      lastName: "Perdomo",
      email: "nahuperdomo123@gmail.com",
      phone: "099015742",
    }
  orden.total = totalPrecio();
  orden.items = cartItems.map(item => {
      const id = item.id;  
      const nombre = item.nombre
      const precio = item.precio * item.cantidad
      const cantidad = item.cantidad

      return {nombre, precio, cantidad}
  })
  //SE CREA SI NO ESTA LA TABLA COLLECCION collection.
  const db = getFirestore();
  const queryCollection = collection(db, "orders")
  //le genera el id automatico ya.
    addDoc(queryCollection, orden)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    //porque ya se realizo la compra y se vacia el carrito con nuestra funcion
    .finally(()=> vaciarCarrito())
}


  function btnComprar(){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "No podras revertir esta accion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, generar orden'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Generado!',
          'Tu orden ha sido generada',
          'success'
        )
      }
    })
  }
   return (
     <div className="container">
       {cartItems.length === 0 ? 
                Swal.fire({
                  title: 'Ops!',
                  text: 'Tu carrito esta vacio, ve a la tienda y agrega nuvos productos',
                  imageUrl: 'https://pedidos.mostazagreenburger.com/static/images/cart/empty_cart.png',
                  imageWidth: 400,
                  imageHeight: 200,
                  imageAlt: 'Custom image',
                  confirmButtonText: 'Ir a la tienda',
                  confirmButtonColor: '#00a8ff',
                }).then((result) => {
                  if (result.value) {
                    window.location.href = '/';
                  }
                })
                
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
                <button className="btn btn-success ms-5 mb-4" onClick={generarOrden}>Comprar</button>
                </div>
              </div>
            </>
        }
     </div>
  );
};

export default Carrito;