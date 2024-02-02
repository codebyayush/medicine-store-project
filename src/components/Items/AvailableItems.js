import React, { useContext, useState } from "react";
import ItemBody from "./ItemBody";
import itemContext from "../../store/item-context";

const AvailableItems = () => {
  const ctx = useContext(itemContext);

  return (
    <div className="card mx-auto w-50 mt-2">
      {ctx.medArr.map((item) => {
        return (
          <>
            <ItemBody
              key={item.id}
              id={item.id}
              name={item.name}
              desc={item.description}
              price={item.price}
              meds={item}
            />
          </>
        );
      })}
    </div>
  );
};

export default AvailableItems;
