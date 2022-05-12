import React, { useState, useEffect } from "react";
import Item from "../item.js/item";
let objetos = [
    {id:'1', imagen: 'https://cdn.shopify.com/s/files/1/2137/4785/products/CallerasCarbono3agujerosRosadas2.jpg?v=1631892947&width=960', descripcion:'Esta es una descripcion'},
    {id:'2', imagen: 'https://cdn.shopify.com/s/files/1/2137/4785/products/CallerasCarbono3agujerosRosadas2.jpg?v=1631892947&width=960', descripcion:'Prueba 123'},
    {id:'3', imagen: 'https://cdn.shopify.com/s/files/1/2137/4785/products/CallerasCarbono3agujerosRosadas2.jpg?v=1631892947&width=960', descripcion:'Prueba 1234'},  
]

const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve( objetos )
    },5000)
})


function ItemList(){
    useEffect(() => {
      getFetch 
        .then(respuesta => console.log(respuesta))
        .catch((err) => alert('Ocurrio un error'))
    }, [])
    
    return(
        <div>
           
            <Item/>
            
        </div>
    );
}
export default ItemList;
