import React from "react";
import { useParams } from "react-router-dom";

const Detalle = () =>{
    const { id } = useParams()
    console.log(id);
    return(
        <div>
            if({id} === '1'){
            <h1>SOY EL DETALLE 1</h1>
            }else if({id} === '2'){
            <h1>SOY EL DETALLE 2</h1>
            }else if({id} === '3'){
            <h1>SOY EL DETALLE 3</h1>
            }
        </div>
    )
}
    


export default Detalle;