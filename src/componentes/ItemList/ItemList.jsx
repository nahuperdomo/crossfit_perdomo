import React from "react";
import Item from "../Item/Item";


const ItemList = (props) => {

    return(
        props.items.map((item) => (
            <Item imagen={item.imagen} descripcion = {item.descripcion}/>
        ))
    );


}
export default ItemList;