import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

let objetos = [
  {
    id: '1',
    imagen:
      'https://cdn.shopify.com/s/files/1/2137/4785/products/CallerasCarbono3agujerosRosadas2.jpg?v=1631892947&width=960',
    descripcion: 'Esta es una descripcion',
  },
  {
    id: '2',
    imagen:
      'https://cdn.shopify.com/s/files/1/2137/4785/products/CallerasCarbono3agujerosRosadas2.jpg?v=1631892947&width=960',
    descripcion: 'Prueba 123',
  },
  {
    id: '3',
    imagen:
      'https://cdn.shopify.com/s/files/1/2137/4785/products/CallerasCarbono3agujerosRosadas2.jpg?v=1631892947&width=960',
    descripcion: 'Prueba 1234',
  },
];

    const getFetch = new Promise((resolve) => {
      setTimeout(() => {
        resolve(objetos);
      }, 3000);
    });
    





const ItemListConainer= () => {
    const[valor, setValor] = useState([]);
    const[loading, setLoading] = useState(true) //todavia no lo implemente


    useEffect(() => {
        getFetch.then(response => setValor(response))
        .catch(error => console.log(error))
        .finally(() => setLoading(false)) //todavia no lo implemente
    },[])
    
    return (
    
        <ItemList items={valor} />
    
  );
}
export default ItemListConainer;
