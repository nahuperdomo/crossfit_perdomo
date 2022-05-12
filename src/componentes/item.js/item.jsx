import React from "react";
import ItemList from "../item-list/item-list";
let objetos = [
    {id:'1', imagen: 'https://cdn.shopify.com/s/files/1/2137/4785/products/CallerasCarbono3agujerosRosadas2.jpg?v=1631892947&width=960', descripcion:'Esta es una descripcion'},
    {id:'2', imagen: 'https://cdn.shopify.com/s/files/1/2137/4785/products/CallerasCarbono3agujerosRosadas2.jpg?v=1631892947&width=960', descripcion:'Prueba 123'},
    {id:'3', imagen: 'https://cdn.shopify.com/s/files/1/2137/4785/products/CallerasCarbono3agujerosRosadas2.jpg?v=1631892947&width=960', descripcion:'Prueba 1234'},  
]

function Item(){
    return(
        <div className="divItem">
            { objetos.map((item, i) => <div className="item" key={objetos.i}>
                                    <img src="{item.imagen}"></img>
                                    <p>{item.descripcion}</p>
                                    <button>Comprar</button>
                                    {console.log(item.imagen)}
                                </div> ) }
        </div>
    );
}
export default Item;
