import Layout from "../components/Layout";
import { useContext, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { CategoriesContext } from "../context/categories.context";
import { BagContext } from "../context/bag.context"
import CategoryPreviewPage from "./CategoryPreviewPage";
import ProductCard from "../components/ProductCard";


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

                        <ProductCard product={product} addItemFromShopToBag={addItemFromShopToBag}/>
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