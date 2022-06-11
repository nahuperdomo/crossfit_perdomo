import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc} from 'firebase/firestore'

const ItemDetailConainer = () => {

    const [productos, setProducto] = useState([]);
    const { id } = useParams();
   /*  const [cargando, setCargando] = useState(true); */


    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, 'items' , id)
        getDoc(dbQuery)
        .then(resp=> setProducto({id: resp.id, ...resp.data()}))
        .catch(err=> console.log(err))
        /* .finally(()=> setCargando(false)) */
      }, [])

    return (

        <div>
            <ItemDetail producto={productos} />

        </div>
    )
}

export default ItemDetailConainer;