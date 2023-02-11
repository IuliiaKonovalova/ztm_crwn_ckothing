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
    bagTotalItemsCount
  } = useContext(BagContext);



  return (
    <Layout title="Products">
      <div className=" flex-auto flex-col items-center my-4 max-w-screen-xl">
        <h1 className="text-4xl font-semibold my-16 text-center">
          Bag
        </h1>
        {bagProducts.length > 0 ? (
          <div className="flex flex-col items-center">
            {bagProducts.map((product) => {
              return (
                <div className="flex flex-col items-center">
                <h1>{product.name}</h1>
                <h1>{product.price}</h1>
                <h1>{product.quantity}</h1>
              </div>
              )
            }
            )}
          </div>
          ) : (
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
          )
        }

      </div>

    </Layout>
  )
}

export default BagPage;