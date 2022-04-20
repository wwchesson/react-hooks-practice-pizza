import React from "react";

function Pizza({pizza, onPizzaEdit}) {
  const {topping, size, vegetarian, id} = pizza

  function handleEditClick() {
    onPizzaEdit({
      topping: topping,
      size: size,
      vegetarian: vegetarian,
      id: id
    })
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleEditClick}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
