import React, { useState, useEffect, createContext } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import  { getFetch }  from "../getFetch/getFetch";


export const  contextApp = createContext();


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
        cargando ? <h1>Cargando...</h1>
        :
        <div>
            
            <ItemDetail producto={productos}/>
            

        </div>
    )
}

export default ItemDetailConainer;