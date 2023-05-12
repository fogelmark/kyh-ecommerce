import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      console.log(data);
    };
    getProducts();
  }, []);

  return (
    <div className="products">
      {products.map((product) => (
        <div className="productCard" key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} style={{ display: "block", maxWidth: "100%" }}/>
          <p className="price">Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
