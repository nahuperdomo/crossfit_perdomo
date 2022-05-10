import React from "react";
const Swal = require('sweetalert2')
function AgregarCarrito(){
    function alertaAgregado(){
        Swal.fire(
            'Genial',
            'Tus productos han sido agregados al carrito!',
            'success'
          )
    }
    return(
        <div className="AgregarCarrito">
            <button onClick={alertaAgregado} className="AgregarCarrito">Agregar al carrito</button>
        </div>
    );
}

export default AgregarCarrito;