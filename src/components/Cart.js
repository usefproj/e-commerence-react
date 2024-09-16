import React from "react";
import useStore from "../store";
import { useNavigate } from "react-router";
import { FaUpLong } from "react-icons/fa6";

const Cart = () => {
  const { cart, products, clearCart } = useStore();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, productId) => {
    const product = products.find((product) => product.id === productId);
    return acc + (product?.price || 0);
  }, 0);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-xl text-gray-500">
          <p>Your cart is empty.</p>
          <button
            onClick={() => navigate("/")}
            className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-md mt-2"
          >
            Let's add something <FaUpLong className="inline ml-1" />
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((productId) => {
            const product = products.find(
              (product) => product.id === productId
            );
            return (
              <div
                key={productId}
                className="flex justify-between items-center bg-slate-100 p-4 rounded-lg shadow-lg"
              >
                <span className="text-xl font-semibold text-gray-800">
                  {product?.name}
                </span>
                <span className="text-lg font-bold text-gray-900">
                  ${product?.price}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {cart.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold text-right mt-6">
            Total: <span className="text-gray-900">${totalPrice}</span>
          </h2>
          <div className="flex justify-end space-x-4 mt-6">
            <button className="bg-emerald-600 text-white py-2 px-6 rounded hover:bg-emerald-700">
              Checkout
            </button>
            <button
              className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700"
              onClick={() => clearCart()}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
