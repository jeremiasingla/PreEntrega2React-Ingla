import React from "react";

const CartWidget = () => {
  return (
    <div>
      <i className="fas fa-shopping-cart "></i>
      <div className="shoppingNumberContainer">
        <span className="shoppingNumberCounter">0</span>
      </div>
    </div>
  );
};

export default CartWidget;
