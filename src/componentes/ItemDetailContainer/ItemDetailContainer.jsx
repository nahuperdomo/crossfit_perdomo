import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailConainer=(props)=>{

 const [productos, setProducto] = useState([]);
 const {id} = useParams();
    useEffect(()=>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=calleras')
        .then(res => res.json())
        .then(resp => setProducto(resp.results))
        .catch(error => console.log(error))
        console.log(productos)
    },[])

    return(
        
        props.id ===':1' ? alert('el id es '+ props.id)
        :
        <div>
            
            <h3>Traida con api de ML</h3>
            {
                productos.slice(0,1).map((item,id)=>(
                    <ItemDetail key={id} productos = {item}/>
                ))
            }

        </div>
    )
}

export default ItemDetailConainer;