import React, { useState } from 'react';
import "./AddItem.css"
import SnackOrBoozeApi from "./Api"
import { useHistory } from "react-router-dom";


const AddItemForm = ({ addItem }) => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    recipe: '',
    serve: '',
    type: 'snack', // Default type is snack
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    let endpoint = await SnackOrBoozeApi.addItem(formData);
    console.log(endpoint)

    history.push(endpoint)
   
//     setFormData({
//       name: '',
//       description: '',
//       recipe: '',
//       serve: '',
//       type: 'snack',
//     });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="text"
        name="recipe"
        value={formData.recipe}
        onChange={handleChange}
        placeholder="Recipe"
        required
      />
      <input
        type="text"
        name="serve"
        value={formData.serve}
        onChange={handleChange}
        placeholder="Serve"
        required
      />
      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="snack">Snack</option>
        <option value="drink">Drink</option>
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;