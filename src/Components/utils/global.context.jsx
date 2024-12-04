import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
  theme: "light",
  dentists: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || []
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "ADD_FAVORITE":
      const updatedFavorites = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return { ...state, favorites: updatedFavorites };
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
