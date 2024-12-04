import React from 'react'
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(GlobalContext);

  const dentist = state.dentists.find((d) => d.id === parseInt(id));
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      {dentist && (
        <>
          <h1>{dentist.name}</h1>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Sitio Web: {dentist.website}</p>
        </>
      )}
    </>
  )
}

export default Detail