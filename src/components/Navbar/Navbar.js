import React, { Fragment, useContext, useState } from "react";
import Button from "../UI/Button";
import itemContext from "../../store/item-context";

const Navbar = (props) => {
  const ctx = useContext(itemContext)

  return (
    <Fragment>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand mx-5">Medi Store</a>
        <form className="form-inline">
          <Button
            className="btn btn-outline-success my-2 my-sm-0 mx-5"
            type="button"
            onClick = {() => props.toggler(false)}
          >
            cart {ctx.amount}
          </Button>
        </form>
      </nav>
    </Fragment>
  );
};

export default Navbar;
