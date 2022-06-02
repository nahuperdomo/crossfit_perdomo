import React from "react";
import Contador from "../contador/contador";
import Item from "../Item/Item";
import Contadorestilos from '../contador/contador.css'

const ItemDetail = (props)=>{

    return(    
        <>
        <div className="contenidoDetail">
            <div className="divItem">
            <img src={props.producto.imagen} alt="productoFitness" />
            </div>
            <div className="descripcionItem">
                <h2>{props.producto.nombre}</h2>
                <p>{props.producto.descripcionLarga}</p>
                {console.log(props.producto.minimo)}
                <Contador product={props.producto} stock={props.producto.stock} minimo={props.producto.minimo}></Contador>
            </div>
        </div>
        
        </>
    )
    
}


export default ItemDetail;