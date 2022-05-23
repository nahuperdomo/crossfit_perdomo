import React, { useState, useEffect } from "react";
import Item from "../Item/Item";

const ItemDetail = (props)=>{

    return(    
        props.id ? console.log('hay id') 
        :
        <Item imagen={props.productos.thumbnail} descripcion = {props.productos.title}/>
    )
    
}


export default ItemDetail;