import React from "react";

function PizzaForm({formData, setFormData, onUpdatePizza}) {
  const {id} = formData


  function handleEditChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleRadioChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value === "Vegetarian"})
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:3001/pizzas/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(pizzaObj => {
      onUpdatePizza(pizzaObj)
      setFormData({
        topping: "",
        size: "",
        vegetarian: false,
        id: ""
      })
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={formData.topping}
            onChange={handleEditChange}
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={formData.size} onChange={handleEditChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={formData.vegetarian}
              onChange={handleRadioChange}
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={!formData.vegetarian}
              onChange={handleRadioChange}
              value="Not Vegetarian"
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
