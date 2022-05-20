import React from "react";
import Item from "../Item/Item";


const ItemList = (props) => {

    return(
        props.items.map((item,id) => (
            <Item imagen={item.imagen} descripcion = {item.descripcion} cargando={item.cargando}/>
        ))
    );


}
export default ItemList;