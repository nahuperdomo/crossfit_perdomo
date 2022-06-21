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
  const [validacion, setValidacion] = useState(true);

   function btnComprar(id){
    validacion === true ?
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
            'Tu orden ha sido generada con el id: ' + id,
            'success',
            setTimeout(() => {
            window.location.href = '/'
            },3000)
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
  )
  //SE CREA SI NO ESTA LA TABLA COLLECCION collection.
  const db = getFirestore();
  const queryCollection = collection(db, "orders")
  //le genera el id automatico ya.
    addDoc(queryCollection, orden)
    .then((resp)=>btnComprar(resp.id))
    .catch(err => console.log(err))
    //porque ya se realizo la compra y se vacia el carrito con nuestra funcion
    .finally(()=> vaciarCarrito())
}
   return (
     <div className="container">
       {cartItems.length === 0 ?
          entraXCarrito ?
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
                        <div className="cantidad d-flex align-items-center justify-content-center flex-direction-row">
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
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <p className="text-white display-5">Antes de continuar, rellene los siguientes campos:</p>
                  <form className="submit d-flex justify-content-center" 
                  //validar formulario 
                  onSubmit={(e)=>{
                    e.preventDefault();
                    //acceder a valores del formulario
                    const email = e.target.email.value;
                    const nombre = e.target.nombre.value;
                    const apellido = e.target.apellido.value;
                    const celular = e.target.celular.value;
                    if(nombre === '' || apellido === '' || email === '' || celular === ''){
                      Swal.fire(
                        'Disculpe',
                        'Para poder generar la orden, debes llenar todos los campos',
                        'warning'
                      )
                    }
                    else{
                      setValidacion(true);
                      setnombre(e.target.nombre.value);
                      setapellido(e.target.apellido.value);
                      settelefono(e.target.celular.value);
                      setemail(e.target.email.value);
                      generarOrden();
                    }
                  }
                  }>
                    <div className="form-group d-flex flex-column w-50 justify-content-center align-items-center">
                        <label className="text-white" >Nombre</label>
                        <input type="text" name="nombre" />
                        <label className="text-white" htmlFor="exampleInputEmail1">Apellido</label>
                        <input type="text" name="apellido" />
                        <label className="text-white" htmlFor="exampleInputEmail1">Celular</label>
                        <input type="text" name="celular" />
                        <label className="text-white" htmlFor="exampleInputEmail1">Email</label>
                        <input type="text" name="email" />
                        <div className="d-flex justify-content-center align-items-center">
                        <p className="text-white me-5 display-5">Precio Total</p>
                        <p className="text-white me-5 display-5">{totalPrecio()}$</p>
                        <button className="btn btn-danger me-2 h-50" onClick={vaciarCarrito}>Vaciar carrito</button>
                              <button type="submit" className="btn btn-success h-50">Comprar</button>
                        </div>
                    </div>
                  </form>
                </div>
              </div>
            </>
        }
     </div>
  );
};

export default Carrito;