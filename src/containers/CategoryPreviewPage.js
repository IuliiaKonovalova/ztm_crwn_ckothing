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

      <div className="flex-auto flex-col items-center my-4  w-full">
        <div className="flex flex-col justify-center w-full">
          <>
          { Object.keys(categoriesMap).map((category) => {
            return (
              <>
                <h2 className="text-2xl font-semibold my-2 ml-2 text-left">
                  {category.toUpperCase()} 
                </h2>
                <div className="flex flex-wrap justify-center items-center">
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