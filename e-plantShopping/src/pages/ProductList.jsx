import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/CartSlice";
import Navbar from "../components/Navbar";

const categories = {
  Flowers: [
    { id: 1, name: "Rose", price: 200, image: "/images/rose.jpg" },
    { id: 2, name: "Tulip", price: 150, image: "/images/tulip.jpg" },
    { id: 3, name: "Lily", price: 180, image: "/images/lily.jpg" },
    { id: 4, name: "Jasmine", price: 120, image: "/images/jasmine.jpg" },
    { id: 5, name: "Sunflower", price: 100, image: "/images/sunflower.jpg" },
    { id: 6, name: "Marigold", price: 90, image: "/images/marigold.jpg" },
  ],
  FruitTrees: [
    { id: 7, name: "Mango Tree", price: 500, image: "/images/mango.jpg" },
    { id: 8, name: "Guava Tree", price: 400, image: "/images/guava.jpg" },
    { id: 9, name: "Banana Plant", price: 250, image: "/images/banana.jpg" },
    { id: 10, name: "Papaya Plant", price: 300, image: "/images/papaya.jpg" },
    { id: 11, name: "Apple Tree", price: 600, image: "/images/apple.jpg" },
    { id: 12, name: "Orange Tree", price: 550, image: "/images/orange.jpg" },
  ],
  MedicinalPlants: [
    { id: 13, name: "Neem Tree", price: 300, image: "/images/neem.jpg" },
    { id: 14, name: "Tulsi Plant", price: 100, image: "/images/tulsi.jpg" },
    { id: 15, name: "Aloe Vera", price: 150, image: "/images/aloe.jpg" },
    { id: 16, name: "Ashwagandha", price: 200, image: "/images/ashwagandha.jpg" },
    { id: 17, name: "Mint Plant", price: 80, image: "/images/mint.jpg" },
    { id: 18, name: "Ginger Plant", price: 220, image: "/images/ginger.jpg" },
  ],
};

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
    setAddedToCart((prev) => ({ ...prev, [product.name]: true }));
  };

  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="product-list-container">
      <Navbar cartQuantity={cartQuantity} />
      <h1>Our Plants</h1>
      {Object.keys(categories).map((category) => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="product-grid">
            {categories[category].map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>Price: ₹{product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={addedToCart[product.name]}
                >
                  {addedToCart[product.name] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
