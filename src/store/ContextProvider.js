import React, { useState } from "react";
import itemContext from "./item-context";

const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [medicineArray, setMedicineArray] = useState([
    {
      id: 1,
      name: "Aspirin",
      description: "Relieves pain and reduces inflammation.",
      price: 5.99,
    },
    {
      id: 2,
      name: "Paracetamol",
      description:
        "Effective for reducing fever and relieving mild to moderate pain.",
      price: 3.49,
    },
    {
      id: 3,
      name: "Ibuprofen",
      description: "Used for pain relief and reducing fever and inflammation.",
      price: 7.25,
    },
    {
      id: 4,
      name: "Cough Syrup",
      description: "Relieves cough symptoms and may soothe a sore throat.",
      price: 8.99,
    },
    {
      id: 5,
      name: "Antibiotic Ointment",
      description: "Topical treatment for minor skin infections.",
      price: 12.5,
    },
  ]);

  const addMedicine = (name, price, desc, e) => {
    e.preventDefault();

    const uniqueID = Math.random();

    const item = {
      key: uniqueID,
      id: uniqueID,
      name: name,
      price: price,
      description: desc,
    };
    setMedicineArray((prevItems) => [...prevItems, item]);
  };

  const addItemHandler = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (items) => items.id === item.id
      );

      if (existingItemIndex !== -1) {
        const newList = [...prevItems];
        let newListAmount = Number(newList[existingItemIndex].amount);
        const newAmount = newListAmount + Number(item.amount);
        newList[existingItemIndex].amount = newAmount;
        return newList;
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeOneItemHandler = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (items) => items.id === item.id
      );

      if (item.amount <= 1) {
        const newCart = prevItems.filter((items) => items.id !== item.id);
        return newCart;
      } else {
        const newList = [...prevItems];
        const newAmount = newList[existingItemIndex].amount - 1;
        newList[existingItemIndex].amount = newAmount;
        return newList;
      }
    });
  };

  const addOneItem = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (items) => items.id === item.id
      );

      if (item.amount >= 10) {
        return [...prevItems];
      } else {
        const newList = [...prevItems];
        const newAmount = newList[existingItemIndex].amount + 1;
        newList[existingItemIndex].amount = newAmount;
        return newList;
      }
    });
  };

  const removeItemHandler = (item) => {
    setCartItems((prevItems) => {
        const updatedCart = prevItems.filter((items) => items.id !== item.id)
        return updatedCart;
    });
  };
  
  const amountCalc = cartItems.reduce((acc, curr) => {
    acc = Number(acc) + Number(curr.amount);
    return acc;
  }, 0);

  const totalAmount = cartItems.reduce((acc, curr) => {
    acc = acc + Number(curr.amount) * Number(curr.price);
    return acc;
  }, 0);

  const contextItem = {
    medArr: medicineArray,
    addMed: addMedicine,
    cartList: cartItems,
    amount: amountCalc,
    totalAmount: totalAmount,
    addOne: addOneItem,
    addItem: addItemHandler,
    removeOne: removeOneItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <itemContext.Provider value={contextItem}>
      {props.children}
    </itemContext.Provider>
  );
};

export default ContextProvider;
