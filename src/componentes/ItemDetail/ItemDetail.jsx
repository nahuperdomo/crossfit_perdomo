import React, { useState, useEffect } from "react";
import Item from "../Item/Item";

const ItemDetail = (props)=>{

    return(    
        <Item imagen={props.productos.thumbnail} descripcion = {props.productos.title}/>
    )
    
}


export default ItemDetail;