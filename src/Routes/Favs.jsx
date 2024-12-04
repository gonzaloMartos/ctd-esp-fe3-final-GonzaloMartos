import React from "react";
import Card from "../Components/Card";
import { useContext } from "react";
import { GlobalContext } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(GlobalContext);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favorites.map((fav) => (
        <Card key={fav.id} dentist={fav} />
      ))}
      </div>
    </>
  );
};

export default Favs;
