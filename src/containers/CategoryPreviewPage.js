import Layout from "../components/Layout";
import { useContext, useEffect, useState } from "react"
import { CategoriesContext } from "../context/categories.context";
import ProductCard from "../components/ProductCard";
import { BagContext } from "../context/bag.context"



const CategoryPreviewPage = ({title, products}) => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);

  const { addItemsToBag } = useContext(BagContext);
  const addItemFromShopToBag = (product)=> {
    addItemsToBag(product)
  }


  return (
    <Layout title="Products">

      <div className="flex-auto flex-col items-center my-4  w-full bg-green-700">
        <h1 className="text-4xl font-semibold my-16 text-center">
          Category: {title}
        </h1>
        <div className="flex flex-col justify-center items-center  w-full bg-pink-900">
          <>
          { Object.keys(categoriesMap).map((category) => {
            return (
<>

            <h2 className="text-2xl font-semibold my-6 text-start">
              {category}
            </h2>
            <div className="flex w-full flex-wrap justify-center items-center bg-purple-500">
              {categoriesMap[category].filter((product, index) =>
                                index < 4).map((product) =>
                {
                return(
                  <div class="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 p-4">
                    <ProductCard product={product} addItemFromShopToBag={addItemFromShopToBag}/>
                  </div>
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