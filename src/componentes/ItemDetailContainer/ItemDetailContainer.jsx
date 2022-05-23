import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import  { getFetch }  from "../getFetch/getFetch";
const ItemDetailConainer=(props)=>{

 const [productos, setProducto] = useState([]);
 const {id} = useParams();
 const {cargando, setCargando} = useState(true); 
 
    useEffect(() => {
        getFetch(id)
        .then(resp => setProducto(resp))
        .catch(error => console.log(error))
        .finally(() => setCargando(false));
    },[])

    return(
        
        <div>
            
            <ItemDetail producto={productos} cargando = {cargando}/>

        </div>
    )
}

export default ItemDetailConainer;