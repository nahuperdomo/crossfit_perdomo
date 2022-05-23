
import React from "react";
import { Link } from "react-router-dom";
function Item(props){
    return(
        props.cargando ?
         <h2>Cargando...</h2>
         :
            <div className="divItem">
                <div className="item">
                <img src={props.imagen}></img>
                <p className="descpricionApi">{props.descripcion}</p>
                <Link to={"/detalle:"+props.id}>
                    <button className="AgregarCarrito">Detalle</button>
                </Link>
                </div>
            </div>
        ) 
    }
    

export default Item;
