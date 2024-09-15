import React from "react";
import useApiFetch from "../Hooks/useApiFetch";
import Highlighter from "react-highlight-words";

const ProductList = () => {
  const [search, setSearch] = React.useState("");
  const {
    data: products,
    isLoading,
    error,
  } = useApiFetch("http://localhost:3500/items");

  if (isLoading)
    return (
      <div className="text-3xl text-orange-500 text-center">Loading...</div>
    );
  if (error)
    return (
      <div className="text-3xl text-red-500 text-center">Error: {error}</div>
    );

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

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
        {filteredProducts.map((product) => (
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
              <button className="mt-4 bg-slate-600 text-white py-2 px-4 rounded hover:bg-orange-700">
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
