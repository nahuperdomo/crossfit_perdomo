import React, { useContext, useState } from "react"
import { Link } from "react-router-dom";
const Swal = require('sweetalert2')

function Contador({ stock, minimo, onAdd }) {
    const [count, setCount] = useState(1);
    const [clickeado, setClickeado] = useState(false);


    function contadorMas() {
        if (stock <= count) {
            Swal.fire(
                'Error!!',
                'No nos queda mas stock, el maximo es: ' + stock,
                'error'
            )
        } else {
            setCount(count + 1);
        }
    }

    function contadorMenos() {
        if (minimo >= count) {
            Swal.fire(
                'Error!!',
                'El valor minimo es ' + minimo,
                'error'
            )
        } else {
            setCount(count - 1);
        }
    }


    return (

        <div className="d-flex flex-direction-column">
            <div className="contador">
                <button onClick={contadorMenos} className="btn btn-danger">
                    -
                </button>
                <div className="cero">
                    {count}
                </div>
                <button onClick={contadorMas} className="btn btn-success">
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

                            <Link to={'/'}>
                                <button className="btn-addcarrito">Seguir comprando</button>
                            </Link>
                        </>
                        :
                        <button className="btn-addcarrito" onClick={() => { onAdd(count); setClickeado(true) }}>Agregar al Carrito</button>
                }

            </div>
        </div>
    );
}

export default Contador;
