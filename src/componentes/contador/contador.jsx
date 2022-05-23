import React, { useState } from "react"
const Swal = require('sweetalert2')

function Contador(props){
    const [count, setCount] = useState(1);
 
    
    //FUNCIONES PARA AGREGAR Y QUITAR ELEMENTOS
 
    function contadorMas(){
        if(props.stock <= count){
            Swal.fire(
                'Error!!',
                'No nos queda mas stock, el maximo es: ' + props.stock ,
                'error'
              )
        }else{
            setCount( count + 1 );
        }
    }

    function contadorMenos(){
        if(props.minimo >= count){
            Swal.fire(
                'Error!!',
                'El valor minimo es ' + props.minimo ,
                'error'
              )
        }else{
            setCount( count - 1 );
        }
    }
    ///////////////////////////////////////////
    return(
        <div className="contador">
        <button onClick={contadorMenos} className="menos">
            -
        </button>
        <div className="cero">
                {count}
        </div>
        <button onClick={contadorMas} className="mas">
            +
        </button>
        </div>
    );
}

export default Contador;

