import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [formData, setFormData] = useState({
    topping: "",
    size: "",
    vegetarian: false,
    id: ""
  })

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(r => r.json())
    .then(setPizzas)
  }, [])

  function updatePizzas(updatedPizza) {
    const updatedPizzas = pizzas.map(pizza => pizza.id === updatedPizza.id ? updatedPizza : pizza)
    setPizzas(updatedPizzas)
  }

  return (
    <>
      <Header />
      <PizzaForm formData={formData} setFormData={setFormData} onUpdatePizza={updatePizzas}/>
      <PizzaList pizzas={pizzas} onPizzaEdit={setFormData}/>
    </>
  );
}

export default App;
