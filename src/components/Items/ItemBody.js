import React, { useContext, useState } from "react";
import Button from "../UI/Button.js";
import itemContext from "../../store/item-context.js";
import "./ItemBody.css";

const ItemBody = (props) => {
  const ctx = useContext(itemContext);

  const [count, setCount] = useState(1);
  const countOnChangeHandler = (e) => {
    setCount(e.target.value);
  };

  return (
    <div className="parent-div">
      <div className="items">
        <div className="item-info">
          <h3>{props.name}</h3>
          <p>{props.desc}</p>
          <p>${props.price}</p>
        </div>
        <div className="item-amount">
          <input
            className="amount-input"
            max={10}
            min={1}
            value={count}
            onChange={countOnChangeHandler}
            type="number"
          />
          <Button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => ctx.addItem({ ...props.meds, amount: count })}
          >
            Add Item
          </Button>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default ItemBody;
