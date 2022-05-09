import React from "react";
function Imagen(props) {
    return (
        <div className="divImagen">
            <img src={props.ruta} alt={props.alt}/>
            <div className="textoEncima">
                <p>{props.descripcion}</p>
            </div>
        </div>
    );
  }

  export default Imagen;