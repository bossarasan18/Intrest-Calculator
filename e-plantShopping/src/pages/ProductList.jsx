import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/CartSlice";

const products = [
  { id: 1, name: "Rose Plant", price: 200, description: "Beautiful red rose plant", image: "/images/rose.jpg" },
  { id: 2, name: "Tulip Plant", price: 150, description: "Colorful tulip plant", image: "/images/tulip.jpg" },
  { id: 3, name: "Mango Tree", price: 500, description: "Healthy mango sapling", image: "/images/mango.jpg" },
  { id: 4, name: "Neem Tree", price: 300, description: "Medicinal neem tree sapling", image: "/images/neem.jpg" },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div className="product-list-container">
      <h1>Our Plants</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
