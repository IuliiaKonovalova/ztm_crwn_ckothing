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
        

      </div>

    </Layout>
  )
}

export default BagPage;