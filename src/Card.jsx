//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import React from "react";

function Card({ name, description }) {
  return (
    <div>
      <h3>Informacion Ingresada</h3>
      <p>
        <strong>Nombre:</strong> {name}
      </p>
      <p>
        <strong>Descripcion</strong> {description}
      </p>
    </div>
  );
}

export default Card;
