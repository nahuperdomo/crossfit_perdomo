
import React, { useState, useEffect } from "react";
function Item(props){
    return(
            <div className="divItem">
                <div className="item">
                <img src={props.imagen}></img>
                <p className="descpricionApi">{props.descripcion}</p>
                <button className="AgregarCarrito">Comprar</button>
                {console.log(props.imagen)}
                </div>
            </div>
        ) 
    }
    

export default Item;
