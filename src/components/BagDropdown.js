import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BagContext } from "../context/bag.context";

const BagDropdown = ( bagProps ) => {
  const { bagShow } = bagProps; 
  const { removeItemsFromBag } = useContext(BagContext);

  const removeItemFromBagFromDropdown = (item) => {
    removeItemsFromBag(item);
  };

  return (
    <>
      <div id="bag-dropdown" className="
          opacity-100 absolute top-6 right-0 w-64 mt-2 origin-top-right 
          rounded-md shadow-lg bg-white ring-1 ring-gray-400  divide-y
          divide-gray-100 focus:outline-none z-50"
        >
        <div className="py-1">
          
          {bagShow.length ? (
            bagShow.map((item) => {
              return (
              <div
                className=" grid grid-cols-6 gap-3 py-4 px-3"
                key={item.id}
              >
                <div className="flex items-center col-span-4">
                  <img
                    className="w-8 h-8 mr-2 rounded-full"
                    src={item.imageUrl}
                    alt=" "
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center col-span-1">
                  <p className="font-medium text-gray-900 text-xs lowercase">
                    x <span className="font-medium">{item.quantity}</span>
                  </p>
                </div>
                <div className="flex items-center col-span-1">
                  <button
                    className="p-1 text-gray-400 rounded-full
                    hover:bg-gray-100 focus:outline-none focus:ring-2
                    focus:ring-inset focus:ring-indigo-500 cursor-pointer"
                    aria-label="Remove"
                    onClick={() => removeItemFromBagFromDropdown(item)}
                  >
                    <span className="sr-only">Remove</span>
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 011 1v1H3V5zm12 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2V7h10zm-4 0a1 1 0 00-1 1v5a1 1 0 002 0V8a1 1 0 00-1-1zm-4 0a1 1 0 00-1 1v5a1 1 0 002 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              )
            })
          ) : (
            <div className="flex justify-center py-4">
              <p className="text-sm text-gray-500">Your bag is empty</p>
            </div>
          )}
        </div>
        <div className="px-4 py-3">
          <p className="text-sm text-gray-500">
            Subtotal <span className="font-medium">$0.00</span>
          </p>
          <Link
            to="/bag"
            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md hover:bg-gray-700"
          >
            View Bag
          </Link>
          <Link
            to={"/checkout"}
            className="flex justify-center w-full px-4 py-2 mt-1 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
          >
            Checkout
          </Link>
        </div>
      </div>
    </>
  )

}

export default BagDropdown