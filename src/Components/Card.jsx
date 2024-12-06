import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(GlobalContext); 

  const addFav = () => {
    const esFavorito = state.favorites.some((fav) => fav.id === id);

    if (!esFavorito) {
      const favoritoNuevo = { id, name, username };
      const favActualizado = [...state.favorites, favoritoNuevo];
      localStorage.setItem("favoritos", JSON.stringify(favActualizado));
      dispatch({ type: "ADD_FAVORITE", payload: favoritoNuevo });
    } else {
      const favActualizado = state.favorites.filter((fav) => fav.id !== id);
      localStorage.setItem("favoritos", JSON.stringify(favActualizado));
      dispatch({ type: "REMOVE_FAVORITE", payload: id });
    }
  };

  return (
    <div className={`card ${state.theme}`}>
      <Link to={`/dentist/${id}`}>
        <h3>{name}</h3>
        <p>{username}</p>
        <p>ID: {id}</p>
      </Link>
      <button onClick={addFav} className="favButton">
        {state.favorites.some((fav) => fav.id === id)
          ? "Eliminar de Favoritos"
          : "Agregar a Favoritos"}
      </button>
    </div>
  );
};

export default Card;


