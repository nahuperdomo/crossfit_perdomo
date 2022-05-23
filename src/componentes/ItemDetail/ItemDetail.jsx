import React, { useState, useEffect } from "react";
import Item from "../Item/Item";

const ItemDetail = (props)=>{

    return(    
        
        console.log(props.producto.id),
        <Item imagen={props.producto.imagen} descripcion = {props.producto.descripcion} tipo={'Comprar'} cargando = {props.producto.cargando} />
    )
    
}


export default ItemDetail;