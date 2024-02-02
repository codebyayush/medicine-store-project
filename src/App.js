import React, { useContext, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import AvailableItems from "./components/Items/AvailableItems";
import ContextProvider from "./store/ContextProvider";
import Cart from "./components/Cart/Cart.js";
import itemContext from "./store/item-context.js";
import ItemForm from "./components/Form/ItemForm.jsx";

function App() {
  const ctx = useContext(itemContext)
  const [toggler, setToggler] = useState(false)

  const toggleHandler = (bool) => {
    if(bool === false){
        setToggler(true)
    }
    else{
        setToggler(false)
    }
}

  return (
    <ContextProvider>
      <Navbar toggler = {toggleHandler}/>
      <ItemForm/>
      <AvailableItems />
      {toggler && <Cart toggler = {toggleHandler}/>}
    </ContextProvider>
  );
}

export default App;