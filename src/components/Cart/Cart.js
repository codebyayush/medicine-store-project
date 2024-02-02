import React, { useContext } from "react";
import itemContext from "../../store/item-context";
import Button from "../UI/Button";
import "./Cart.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const ctx = useContext(itemContext);

  return (
    <Modal onClose={props.toggler}>
      <div className="card">
        <div className="card-body">
          {ctx.cartList.map((item) => (
            <div>
              <div className="items-block">
                <div className="item">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <p>{item.amount}</p>
                </div>
                <div className="buttons">
                  <button onClick={() => ctx.addOne(item)}>+</button>
                  <button onClick={() => ctx.removeOne(item)}>-</button>
                </div>
              </div>
              <Button className="btn btn-outline-danger" onClick={() => ctx.removeItem(item)}>
                Remove
              </Button>
              <hr />
            </div>
          ))}
          <div className="price-block">
            <div className="total-price">
              <h4>Total Price</h4>
              <h4>${ctx.totalAmount}</h4>
            </div>
            <div className="buttons">
              <Button
                className="btn btn-outline-secondary"
                onClick={() => props.toggler(true)}
              >
                CLOSE
              </Button>
              <Button className="btn btn-outline-success">ORDER</Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
