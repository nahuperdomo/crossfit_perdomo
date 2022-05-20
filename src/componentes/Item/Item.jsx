
import React, { useState, useEffect } from "react";
function Item(props){
    return(
        props.cargando ?
         <h2>Cargando...</h2>:
            <div className="divItem">
                <div className="item">
                <img src={props.imagen}></img>
                <p className="descpricionApi">{props.descripcion}</p>
                <button className="AgregarCarrito">Comprar</button>
                </div>
            </div>
        ) 
    }
    

export default Item;
