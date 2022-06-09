import React, { useContext } from "react";
import Contador from "../contador/contador";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ producto }) => {

    const { addItemToCart } = useContext(CartContext);

    const onAdd = (count) => {
        addItemToCart({ ...producto, cantidad: count })
    }
    return (
        <>
            <div className="contenidoDetail">
                <div className="divItem">
                    <img src={producto.imagen} alt="productoFitness" />
                </div>
                <div className="descripcionItem">
                    <h2>{producto.nombre}</h2>
                    <p>{producto.descripcionLarga}</p>
                    <Contador product={producto} stock={producto.stock} minimo={producto.minimo} onAdd={onAdd} />
                </div>
            </div>

        </>
    )

}


export default ItemDetail;