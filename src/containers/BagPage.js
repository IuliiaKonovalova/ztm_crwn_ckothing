import Layout from "../components/Layout";
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { BagContext } from "../context/bag.context";

const BagPage = () => {

  const {
    isBagDropdownOpen,
    setIsBagDropdownOpen,
    bagProducts,
    addItemsToBag,
    bagTotalItemsCount,
    removeItemsFromBag,
    decreaseItemsFromBag,
  } = useContext(BagContext);

  const removeItemFromBagFromBagPage = (item) => {
    removeItemsFromBag(item);
  };

  const decreaseItemsFromBagInTable = (item) => {
    decreaseItemsFromBag(item);
  };

  return (
    <Layout title="Products">
      <div className=" flex-auto flex-col items-center my-4 max-w-screen-xl">
        <h1 className="text-4xl font-semibold my-16 text-center">
          Bag
        </h1>
        {bagProducts.length === 0 ? (
          <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold my-6 text-center">
            Your bag is empty
          </h1>
          <Link to="/shop">
            <button className="bg-black text-white px-4 py-2 rounded-lg">
              Shop
            </button>
          </Link>
        </div>
        ) : (
          <div className="grid items-center">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Image</span>
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Qty
                    </th>
                    <th scope="col" className="px-1 py-3 text-s">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
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
                    </th>
                  </tr>
                </thead>
                <tbody
                  className=""
                >
                  {bagProducts.map((product) => {
                    return (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        key={product.id}
                      >
                        <td className="flex items-center py-2 ml-2 sm:w-20">
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              />
                        </td>
                        <td className="pl-2 py-2  lg:p-6 font-semibold text-gray-900 dark:text-white mr-4">
                            {product.name}
                        </td>
                        <td className=" py-2 lg:p-6">
                          <div className="flex items-center space-x-3">
                            <button
                              className="inline-flex items-center p-1 text-sm font-medium
                              text-gray-500 bg-white border border-gray-300
                              rounded-full focus:outline-none hover:bg-gray-100 
                              ocus:ring-4 focus:ring-gray-200 dark:bg-gray-800
                              dark:text-gray-400 dark:border-gray-600
                              dark:hover:bg-gray-700 dark:hover:border-gray-600
                              dark:focus:ring-gray-700"
                              type="button"
                              onClick={() => decreaseItemsFromBagInTable(product)}
                            >
                              <span className="sr-only">Quantity button</span>
                              <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    fill-rule="evenodd"
                                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"
                                  >
                                  </path>
                                </svg>
                            </button>
                            <div>
                            {product.quantity}
                            </div>
                            <button
                              className="inline-flex items-center p-1 text-sm font-medium
                              text-gray-500 bg-white border border-gray-300
                              rounded-full focus:outline-none hover:bg-gray-100
                              focus:ring-4 focus:ring-gray-200 dark:bg-gray-800
                              dark:text-gray-400 dark:border-gray-600
                              dark:hover:bg-gray-700 dark:hover:border-gray-600
                              dark:focus:ring-gray-700"
                              type="button"
                            >
                              <span
                                className="sr-only"
                              >
                                Quantity button
                              </span>
                              <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                  clip-rule="evenodd"
                                >
                                </path>
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="py-2 font-semibold text-gray-900 dark:text-white text-center">
                            ${product.price}
                        </td>
                        <td className="py-2 text-center">
                          <button
                            className="p-1 text-gray-400 rounded-full
                            hover:bg-gray-100 focus:outline-none focus:ring-2
                            focus:ring-inset focus:ring-indigo-500 cursor-pointer"
                            aria-label="Remove"
                            onClick={() => {removeItemFromBagFromBagPage(product)}}
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
                        </td>
                      </tr>
                    )
                  })}
                </tbody>

              </table>
            </div>

          </div>
        )}
      </div>
    </Layout>
  )
}

export default BagPage;