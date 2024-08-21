import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productos from "../data/productos";

const Catalogo = ({ greeting }) => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      setFilteredProducts(
        productos.filter(
          (producto) =>
            producto.categoria.toLowerCase() === categoryId.toLowerCase()
        )
      );
    } else {
      setFilteredProducts(productos);
    }
  }, [categoryId]);

  return (
    <main className="CatalogoMain">
      <div className="CatalogoContainerMain">
        <div className="CatalogoContainer">
          <h2>{greeting || "✷ Welcome to Hell ✷"}</h2>
          <ul className="CatalogoMainUl">
            {filteredProducts.map((producto) => (
              <li key={producto.id} style={{ marginBottom: "20px" }}>
                <Link
                  to={`/item/${producto.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div className="productoImagen">
                      <img src={producto.imagen} alt={producto.nombre} />
                    </div>
                    <div>
                      <h3 className="productoTitle">{producto.nombre}</h3>
                      <p className="productoPrecio">${producto.precio}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Catalogo;
