
import React, { useState, useEffect } from "react";
function Item(props){
    return(
            <div className="divItem">
                <div className="item">
                <img src="{props.imagen}"></img>
                <p>{props.descripcion}</p>
                <button>Comprar</button>
                {console.log(props.imagen)}
                </div>
            </div>
        ) 
    }
    

export default Item;
