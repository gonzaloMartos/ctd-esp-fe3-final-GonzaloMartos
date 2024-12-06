import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../Components/utils/global.context";
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);
  useEffect(() => {
    const dentist = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log("Datos", data);
        dispatch({ type: "SET_DENTIST", payload: data });
      } catch (error) {
        console.error("No se pudieron obtener los datos", error);
      }
    };
    if (state.dentist.length === 0) {
      dentist();
    }
  }, [dispatch, state.dentist]);
  
  return (
    <main className={`home ${state.theme}`}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.dentist.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </main>
  );
};

export default Home