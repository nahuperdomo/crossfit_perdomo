import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
let objetos = [
  {
    tipo: "accesorios",
    id: '1',
    imagen: 'https://cdn.shopify.com/s/files/1/2137/4785/products/CallerasCarbono3agujerosRosadas2.jpg?v=1631892947&width=960',
    descripcion: 'Las mejores calleras para tus entrenamientos mas duros.',
  },
  {
    tipo: "accesorios",
    id: '2',
    imagen:
      'https://cdn.shopify.com/s/files/1/2137/4785/files/Botellas_PHone.jpg?v=1642995176&width=640',
    descripcion: 'Botella para motivarte a estar siempre hidratado',
  },
  {
    tipo: "accesorios",
    id: '3',
    imagen:
      'https://cdn.shopify.com/s/files/1/2137/4785/files/Straps.jpg?v=1638189332&width=640',
    descripcion: 'Straps para ayudar a tu agarre y que no te limite tu entrenamiento.',
  },
  {
    tipo: "suplementos",
    id: '4',
    imagen: 'https://cdn.shopify.com/s/files/1/2137/4785/products/star-nutrition-wheyprotein-1000grs-vainilla-copia-scaled.jpg?v=1638801752&width=960',
    descripcion: 'Star Nutrition Whey Protein 2,2lb',
  },
  {
    tipo: "suplementos",
    id: '5',
    imagen:
      'https://cdn.shopify.com/s/files/1/2137/4785/products/ENA_WHEY_PROTEIN.jpg?v=1559559448&width=420',
    descripcion: 'ENA WHEY PROTEIN TRUE MADE 1KG',
  },
  {
    tipo: "suplementos",
    id: '6',
    imagen:
      'https://cdn.shopify.com/s/files/1/2137/4785/products/optimum-nutrition-100-gold-standard-5lb-chocolate.jpg?v=1544340450&width=960',
    descripcion: 'Whey Protein 5lb / Optimum Nutrition.',
  },
];

    const getFetch = new Promise((resolve) => {
      setTimeout(() => {
        resolve(objetos);
      }, 3000);
    });
const ItemListConainer= () => {
    
    
    const[valor, setValor] = useState([]);
    const {tipo} = useParams();
    const[loading, setLoading] = useState(true)

    useEffect(() => {
      if(tipo) {
        getFetch.then(response => setValor(response.filter(item => item.tipo === tipo)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false)) 
      }else{
        getFetch.then(response => setValor(response))
        .catch(error => console.log(error))
        .finally(() => setLoading(false)) 
      }
      
    }, [tipo])
    
    return (
      <div className="ContainerProductos">
        <ItemList items={valor} cargando={loading}/>
      </div>
    
  );
}
export default ItemListConainer;
