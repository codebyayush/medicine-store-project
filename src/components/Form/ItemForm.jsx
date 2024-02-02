import React, { useContext, useState } from "react";
import itemContext from "../../store/item-context";

const ItemForm = () => {
  const ctx = useContext(itemContext);
  const [price, setPrice] = useState(1);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="card mx-auto w-50 mt-2">
      <form
        className="m-3"
        onSubmit={(e) => ctx.addMed(name, price, description, e)}
      >
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={nameChangeHandler}
            aria-describedby="ItemName"
            placeholder="Enter name of medicine"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            value={description}
            onChange={descriptionChangeHandler}
            id="description"
            className="form-control"
            placeholder="Enter Description"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="description">Price:</label>
          <input
            type="number"
            id="price"
            className="form-control"
            min={1}
            defaultValue={1}
            value={price}
            onChange={priceHandler}
            placeholder="Enter Price"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
