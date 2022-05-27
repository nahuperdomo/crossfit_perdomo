
import React from "react";
import { Link } from "react-router-dom";
import {Contador} from "../contador/contador"
function Item(props){
    return(
        props.cargando ? 
        <div><h1>Cargando</h1></div> 
        : 
       console.log(props),
            <div className="divItem">
                <div className="item">
                    <img src={props.imagen}></img>
                    <p className="descpricionApi">{props.descripcion}</p>
                    <Link to={"/detalle:"+props.id}>
                        <button className="AgregarCarrito">{props.tipo}</button>
                    </Link>
                </div>
            </div>
        ) 
    }
    

export default Item;
