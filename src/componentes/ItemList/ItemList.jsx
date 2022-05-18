import React from "react";
import Item from "./Item";
const ItemList = ({ items }) => {

    return(
        valor.map((item) => (
            <Item imagen={item.imagen} descripcion = {item.descripcion}/>
        ))
    );


}
export default ItemList;