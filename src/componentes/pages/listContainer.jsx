import { React, useContext, contexApp } from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Titulo from "../titulo/Titulo";
import '../../index.css';
const ListContainer = () => {


    return (
        <div>
          <Titulo titulo="Bienvenido a perdomo crossfit!!"/>
            <ItemListContainer/>
        </div>
        )
 
}
export default ListContainer;