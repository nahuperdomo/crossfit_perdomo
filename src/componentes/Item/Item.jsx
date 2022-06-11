
import React from "react";
import { Link } from "react-router-dom";

function Item(props){
    return(
        props.cargando ? 
        <div><h1>Cargando</h1></div> 
        : 
            <div className="divItem">
                <div className="item">
                    <img src={props.imagen}></img>
                    <p className="text-white mt-3">{props.descripcion}</p>
                    <Link to={"/detalle/"+props.id}>
                        <button className="btn btn-success mb-3">{props.tipo}</button>
                    </Link>
                </div>
                <hr className="text-white"/>
            </div>

        ) 
    }
    

export default Item;
