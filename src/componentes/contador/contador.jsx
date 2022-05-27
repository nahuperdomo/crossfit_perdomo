import React, { useState } from "react"
import { Link } from "react-router-dom";
const Swal = require('sweetalert2')

function Contador(props){
    const [count, setCount] = useState(1);
    const [clickeado, setClickeado] = useState(false);

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

    const onAdd = () => {
        setClickeado(true);
        alert(count);
    }
    ///////////////////////////////////////////
    return(
        
        <div className="contadorgral">
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
            <div className="containerBtn">

            {
                clickeado ?
                <>
                <Link to={'/carrito'}>
                    <button className="btn-addcarrito">Ir al Carrito</button>
                </Link>

                <Link to={'/cart'}>
                    <button className="btn-addcarrito">Seguir comprando</button>
                </Link>
                </>
                :
                <button className="btn-addcarrito" onClick={onAdd}>Agregar al Carrito</button>
            }

            </div>
        </div>
    );
}

export default Contador;
