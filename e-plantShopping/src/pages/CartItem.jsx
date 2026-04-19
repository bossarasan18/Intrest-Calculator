import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/CartSlice";
import { useNavigate } from "react-router-dom";

function CartItem() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncrement = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const handleDecrement = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Checkout Coming Soon!");
  };

  const handleContinueShopping = () => {
    navigate("/products");
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <h2>{item.name}</h2>
              <p>Unit Price: ₹{item.price}</p>
              <p>Total: ₹{item.price * item.quantity}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(item.id, item.quantity)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item.id, item.quantity)}>+</button>
              </div>
              <button onClick={() => handleRemove(item.id)}>Delete</button>
            </div>
          ))}
          <h2>Total Cart Amount: ₹{totalPrice}</h2>
          <button onClick={handleCheckout}>Checkout</button>
          <button onClick={handleContinueShopping}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
}

export default CartItem;
