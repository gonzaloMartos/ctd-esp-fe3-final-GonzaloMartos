import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
  theme: "light",
  dentist: [],
  favorites: JSON.parse(localStorage.getItem("favoritos")) || [],
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_DENTIST":  
      return { ...state, dentist: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "ADD_FAVORITE":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };
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
