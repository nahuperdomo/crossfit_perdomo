import React from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";


const ItemList = (props) => {

    
    return(
        props.items.map((item,id) => (
            <Item imagen={item.imagen} descripcion = {item.descripcion} cargando={item.cargando} id={item.id}/>
        ))
    );


}
export default ItemList;