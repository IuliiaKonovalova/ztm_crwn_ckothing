import { useState, useContext } from "react";
import { BagContext } from "../context/bag.context"

const ProductCard = ({ key, product }) => {
  const { addItemsToBag } = useContext(BagContext);
  const addItemFromShopToBag = (product)=> {
    addItemsToBag(product)
  }
  return (
    <a
      key={key}
      className="w-48 m-2 c-card block bg-white shadow-md hover:shadow-xl rounded-md overflow-hidden"
    >
      <div className="relative pb-48 overflow-hidden">
        <img
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover" 
          src={product.imageUrl}
          alt={product.name}
          />
      </div>
      <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        <h2 className="text-lg font-semibold mb-4">
          {/* Reduce products name to 10 characters */}
          {product.name.length > 10 ? product.name.substring(0, 10) + "..." : product.name}
        </h2>
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <div className="flex items-center">
            <button
              onClick={() => addItemFromShopToBag(product)}
              className="p-1 text-gray-400 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-label="Add to bag"
            >
              <span
                className="hover:text-gray-500"
              >
                Add to bag
              </span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm3 0a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H6z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M8 6a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </a>
  );

};

export default ProductCard;