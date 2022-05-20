import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailConainer=()=>{

 const [productos, setProducto] = useState([]);

    useEffect(()=>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=calleras')
        .then(res => res.json())
        .then(resp => setProducto(resp.results))
        .catch(error => console.log(error))
        console.log(productos)
    },[])

    return(
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