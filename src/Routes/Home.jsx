import { useEffect, useContext } from "react";
import { GlobalContext } from "../Components/utils/global.context";
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_DENTISTS", payload: data }));
  }, [dispatch]);
  return (
    <main className={`grid ${state.theme}`} >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.dentists.map((dentist) => (
        <Card key={dentist.id} dentist={dentist} />
      ))}
      </div>
    </main>
  )
}

export default Home