import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import { getFirestore, doc, getDoc, getDocs, collection, where, query} from 'firebase/firestore'

const ItemListConainer= () => {
        
    const[valor, setValor] = useState([]);
    const {tipo} = useParams();
    const[loading, setLoading] = useState(true)

    useEffect(() => {
      const db = getFirestore()
      const queryCollection = collection(db, 'items')
      if(tipo){
        const queryCollectionFilter = query(queryCollection,where('tipo', '==', tipo))
        getDocs(queryCollectionFilter)
        .then(resp=> setValor( resp.docs.map(item=> ({ id: item.id, ...item.data() } ) ) )  )
        .catch(err=> console.log(err))
        .finally(()=> setLoading(false))
      }else{
        getDocs(queryCollection)
        .then(resp=> setValor( resp.docs.map(item=> ({ id: item.id, ...item.data() } ) ) )  )
        .catch(err=> console.log(err))
        .finally(()=> setLoading(false))
      }
    }, [tipo])
    return (
      <div className="ContainerProductos">
        <ItemList items={valor} cargando={loading}/>
      </div>
    
  );
}
export default ItemListConainer;
