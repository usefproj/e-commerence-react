import React from "react";
import Highlighter from "react-highlight-words";
import useStore from "../store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

const ProductList = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const {
    products,
    isLoading,
    error,
    cart,
    addToCart,
    removeFromCart,
    fetchProducts,
  } = useStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const isInCart = (productId) => cart.includes(productId);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-6">
        Welcome to Sell Hell!
      </h1>
      <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="w-full border-2 text-black border-gray-300 p-3 rounded-md focus:outline-none focus:border-slate-600 mb-4"
      />
      {filteredProducts.length === 0 && (
        <div className="text-3xl text-gray-500 text-center">
          No products found.
        </div>
      )}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          return (
            <li key={product.id} className="bg-slate-100 shadow-lg rounded-lg ">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-black ">
                  <Highlighter
                    highlightClassName="text-emerald-500 bg-slate-100"
                    searchWords={[search]}
                    textToHighlight={product.name}
                  />
                </h3>
                <p className="text-gray-700 mt-2">{product.description}</p>
                <div className="mt-4">
                  <span className="text-gray-900 font-bold">
                    ${product.price}
                  </span>
                </div>
                {isInCart(product.id) ? (
                  <div className="h-12 w-24 flex items-center justify-between">
                    <button
                      className="flex items-center justify-center p-1 text-white h-full w-2/3 rounded-l-lg bg-orange-700 hover:bg-orange-500 border-r"
                      onClick={() => navigate("/cart")}
                    >
                      Visit <FaShoppingCart className="inline ml-1" />
                    </button>
                    <button
                      className="flex items-center justify-center p-1 rounded-r-lg h-full w-1/3 text-red-500 bg-orange-700 hover:bg-red-500 hover:text-white"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                ) : (
                  <button
                    className="mt-4 text-white py-2 px-4 rounded bg-gray-400 hover:bg-orange-700"
                    onClick={() => addToCart(product.id)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      {error && <div className="text-red-500 text-center">{error}</div>}
      {isLoading && <div className="text-gray-500 text-center">Loading...</div>}
    </div>
  );
};

export default ProductList;
