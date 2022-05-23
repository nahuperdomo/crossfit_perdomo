import React from "react";
import Item from "../Item/Item";


const ItemList = (props) => {

    
    return(
        props.cargando ? 
        <div>
            <div class="spinner-border text-primary" role="status">
            <span class="sr-only"></span>
            </div>
               <h2>Estamos cargando los productos para ti!!</h2>
        </div>
            :
        props.items.map((item,id) => (
            <Item imagen={item.imagen} descripcion = {item.descripcion}id={item.id} tipo = {'Descrpcion'}/>
        ))
    );


}
export default ItemList;