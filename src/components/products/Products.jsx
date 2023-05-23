import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="products">
      {products.map((product) => (
        // byt ut till <Link to={`/productdetails/${product.id}`} key={product.id}> när färdigt för att länka till specifik produkt
        <Link to={`/productdetails/`} key={product.id}>   
          <div className="productCard">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img
              src={product.image}
              alt={product.title}
              style={{ display: "block", maxWidth: "100%" }}
            />
            <p className="price">Price: ${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
