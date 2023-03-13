import Layout from "../components/Layout";
import { useContext, useEffect, useState, useParams } from "react"
import { CategoriesContext } from "../context/categories.context";
import ProductCard from "../components/ProductCard";
import { BagContext } from "../context/bag.context"
import { Link } from "react-router-dom";



const CategoryPreviewPage = () => {
  const { categoriesMap } = useContext(CategoriesContext);


  const { addItemsToBag } = useContext(BagContext);
  const addItemFromShopToBag = (product)=> {
    addItemsToBag(product)
  }




  return (
    <Layout title="Products">

      <div className="flex-auto flex-col items-center my-4  w-full">
        <div className="flex flex-col justify-center w-full">
          <>
          { Object.keys(categoriesMap).map((category) => {
            return (
              <>
                <div
                  // set key by a number to avoid error
                  className="flex  flex-col">
                  <h2
                      key={category.name}
                    className="text-2xl font-semibold mx-2 text-left bg-gray-400">
                    <span
                      className="mx-2 text-gray-800">
                    {category.toUpperCase()} 
                    </span>
                  </h2>
                  {/* add button to redirect to Shop page with props category name */}
                  <Link
                    to={`/shop/${category}`}
                    className="text-sm font-semibold ml-2 text-left flex">
                      <span className="text-pink-700 mr-4 mt-2">See all . . .</span>
                  </Link>
                </div>
                <div className="flex flex-wrap justify-center items-center mb-4">
                  {categoriesMap[category].filter((product, index) =>
                                    index < 3).map((product) =>
                    {
                    return(
                      <ProductCard product={product} addItemFromShopToBag={addItemFromShopToBag}/>
                    )
                  })}
                </div>
              </>
            )
          })}
          </>
        </div>
      </div>
    </Layout>
  );
}

export default CategoryPreviewPage;