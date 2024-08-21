import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productos";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const foundProducto = productos.find(
      (prod) => prod.id === parseInt(itemId)
    );
    setProducto(foundProducto);
  }, [itemId]);

  return (
    <main className="ItemDetailMain">
      <div className="ItemDetailContainerMain">
        <div className="ItemDetailContainer">
          {producto ? (
            <>
              <div className="productFlex">
                <div className="Producto">
                  <h2 className="productoTitle">{producto.nombre}</h2>
                  <p className="productoColor">{producto.color}</p>
                  <div className="productoImagen">
                    <img src={producto.imagen} alt={producto.nombre} />
                  </div>
                </div>
                <div className="productBuyNow">
                  <h2>This product is out of stock.</h2>
                </div>
              </div>
              <div className="productDetailsContainer">
                <div className="productDetails">
                  <h2 className="productDetailsTitle">Product Details</h2>
                  <div className="productDetailsInfoContainer">
                    <div className="productDetailsInfo">
                      <p>Category</p>
                      <span>{producto.categoria}</span>
                    </div>
                    <div className="productDetailsInfo">
                      <p>Color</p>
                      <span>{producto.color}</span>
                    </div>
                    <div className="productDetailsInfo">
                      <p>Price</p>
                      <span>${producto.precio}</span>
                    </div>
                  </div>
                </div>
                <div className="productDetailsDescriptionContainer">
                  <h2 className="productDetailsDescriptionTitle">
                    Product Description
                  </h2>
                  <p className="productDetailsDescriptionDesc">
                    {producto.descripcion}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <p>Product not found</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default ItemDetailContainer;
