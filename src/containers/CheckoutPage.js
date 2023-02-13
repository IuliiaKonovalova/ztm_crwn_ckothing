import Layout from "../components/Layout";
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { BagContext } from "../context/bag.context";

const CheckoutPage = () => {

  const {
    isBagDropdownOpen,
    setIsBagDropdownOpen,
    bagProducts,
    addItemsToBag,
    bagTotalItemsCount,
    removeItemsFromBag
  } = useContext(BagContext);

  const removeItemFromBagFromBagPage = (item) => {
    removeItemsFromBag(item);
  };

  return (
    <Layout title="Products">
      <div className=" flex-auto flex-col items-center my-4 max-w-screen-xl">
        <h1 className="text-4xl font-semibold my-16 text-center">
          Checkout
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
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      <span class="sr-only">Image</span>
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                      Product
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                      Qty
                    </th>
                    <th scope="col" class="px-1 py-3 text-s">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
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
                      <>
                      </>
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

export default CheckoutPage;