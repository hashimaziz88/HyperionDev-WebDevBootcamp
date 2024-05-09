import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/cart/cartSlice";
import { FaTrash } from "react-icons/fa";
import TotalPrice from "./TotalPrice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateQuantity({ itemId, newQuantity }));
  };

  return (
    <div className="container">
      <h1 className="text-center">Cart Page</h1>
      <div className="row justify-content-center">
        <div className="row justify-content-center">
          <TotalPrice />
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img
                className="card-img-top"
                src={item.image}
                alt={item.name}
                style={{ height: "200px", objectFit: "contain" }} // Adjust the height and object-fit
              />
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{`$${item.price}`}</p>
                <p className="card-text">{item.color}</p>
                <div className="d-flex align-items-center justify-content-between">
                  {/* Quantity Adjustment */}
                  <div>
                    <button
                      className="btn btn-outline-primary btn-sm me-2"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-outline-primary btn-sm ms-2"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  {/* Delete Button */}
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
