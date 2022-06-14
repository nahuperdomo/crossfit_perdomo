import React, { useContext, useState } from "react";

import {CartContext} from "../../context/CartContext";
import { getFirestore,collection, addDoc,} from 'firebase/firestore'
const Swal = require('sweetalert2')
function Carrito() {
  const [email, setemail] = useState('')
  const [nombre, setnombre] = useState('')
  const [apellido, setapellido] = useState('')
  const [telefono, settelefono] = useState('')
  const {cartItems, deleteItemFromCart, vaciarCarrito,totalPrecio} = useContext(CartContext)
  const [entraXCarrito, setEntraXCarrito] = useState(false);
  const [idOrden, setIdOrden] = useState();
  const [validacion, setValidacion] = useState(false);

  

  function generarOrden() {
    let orden = {}
    orden.buyer = {
      name: {nombre},
      lastName: {apellido},
      email: {email},
      phone: {telefono},
    }
    setEntraXCarrito(current => !current);
  orden.total = totalPrecio();
  orden.items = cartItems.map(item => {
      const nombre = item.nombre
      const precio = item.precio * item.cantidad
      const cantidad = item.cantidad
      return {nombre, precio, cantidad}
    
  },
  btnComprar()
  )
  //SE CREA SI NO ESTA LA TABLA COLLECCION collection.
  const db = getFirestore();
  const queryCollection = collection(db, "orders")
  //le genera el id automatico ya.
    addDoc(queryCollection, orden)
    .then(resp =>  setIdOrden(resp.id) )
    .catch(err => console.log(err))
    //porque ya se realizo la compra y se vacia el carrito con nuestra funcion
    .finally(()=> vaciarCarrito())
}


   function btnComprar(){
    validacion == true ?
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
          console.log(idOrden);
          Swal.fire(
            'Generado!',
            'Tu orden ha sido generada con el id: ' + {idOrden},
            'success',
            setTimeout(() => {
            window.location.href = '/'
            },5000)
          )
        }
      })
    :
    Swal.fire({
      title: 'ERROR',
      text: "Debes llenar el formulario para poder generar la orden",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33'
    }).then((result) => {
    if (result.value) {
      window.location.href = '/carrito'
    }})
  }

   return (
     <div className="container">
       {cartItems.length === 0 ?
          entraXCarrito ?
            console.log('entra por boton comprar')
          :
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
                <div className="d-flex justify-content-center flex-column">
                  <p className="text-white display-5">Antes de continuar, rellene los siguientes campos:</p>
                  <form className="submit d-flex justify-content-center" 
                    onSubmit={ev => {ev.preventDefault();
                      setnombre(ev.target.nombre.value);
                      nombre == '' ? setValidacion(false) : setValidacion(true);
                      setapellido(ev.target.apellido.value);
                      apellido == '' ? setValidacion(false) : setValidacion(true);
                      settelefono(ev.target.celular.value);
                      telefono == '' ? setValidacion(false) : setValidacion(true);
                      setemail(ev.target.email.value);
                      email == '' ? setValidacion(false) : setValidacion(true);
                      alert('Te registraste con exito, ahora puedes comprar')
                    }}
                  >

                    <div className="form-group d-flex flex-column w-50 justify-content-center">
                        <label className="text-white" >Nombre</label>
                        <input type="text" name="nombre" />
                        <label className="text-white" htmlFor="exampleInputEmail1">Apellido</label>
                        <input type="text" name="apellido" />
                        <label className="text-white" htmlFor="exampleInputEmail1">Celular</label>
                        <input type="text" name="celular" />
                        <label className="text-white" htmlFor="exampleInputEmail1">Email</label>
                        <input type="text" name="email" />
                        <button type="submit" className="btn btn-primary">Registrarme</button>
                    </div>
                  </form>
                </div>
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