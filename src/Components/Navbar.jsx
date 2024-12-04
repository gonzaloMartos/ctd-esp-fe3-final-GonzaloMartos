import { useContext } from "react";
import { GlobalContext } from "./utils/global.context";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);
  return (
    <nav className={`navbar ${state.theme}`}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/favs">Destacados</Link>
      {state.theme === "light" ? "Dark Mode" : "Light Mode"}
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>Change theme</button>
    </nav>
  )
}

export default Navbar