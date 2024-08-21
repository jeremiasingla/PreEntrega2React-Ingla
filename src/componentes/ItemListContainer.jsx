import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="ItemListContainer">
      <h2>{greeting || "✷ Welcome to Hell ✷"}</h2>
    </div>
  );
};

export default ItemListContainer;
