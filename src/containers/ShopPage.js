import Layout from "../components/Layout";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../context/categories.context";
import { BagContext } from "../context/bag.context"


const ShopPage = () => {

  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);

  const { addItemsToBag } = useContext(BagContext);
  const addItemFromShopToBag = (product)=> {
    addItemsToBag(product)
  }

  return (

    <Layout title="Products">
      <div className=" flex-auto flex-col items-center my-4 max-w-screen-xl">
        <h1 className="text-2xl font-semibold my-6 text-center">
          Chose your favorite product
        </h1>
        
        <div className="flex flex-wrap justify-center items-center">
          {Object.keys(categoriesMap).map((key) => {
            console.log(categoriesMap[key])
              return (
                <>
                  {categoriesMap[key].map((product) => {
                    return(
                      <div class="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 p-4">
                        <a
                          key={product.id}
                          className="xl:w-52 c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
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
                            <h2 className="text-lg font-semibold mb-4">{product.name}</h2>
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
                      </div>
                    )
                  })}
                </>
              )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default ShopPage;