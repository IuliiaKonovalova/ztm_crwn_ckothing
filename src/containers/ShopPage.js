import Layout from "../components/Layout";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../context/categories.context";
import { BagContext } from "../context/bag.context"
import ProductCard from "../components/ProductCard";


const ShopPage = () => {

  const { categoriesMap } = useContext(CategoriesContext);

  const [productsToShow, setProductsToShow] = useState(categoriesMap);
  const [selectedCategory, setSelectedCategory] = useState(false);

  const { addItemsToBag } = useContext(BagContext);
  const addItemFromShopToBag = (product)=> {
    addItemsToBag(product)
  }

  const category = Object.values(useParams());
  // check category length to avoid error when category is empty
  if (category[0].length === 0) {
    console.log("category is empty")
  }

  useEffect(() => {
    if (category[0].length !== 0) {
      const categorySelectedProducts = categoriesMap[category];
      setProductsToShow(categorySelectedProducts);
      setSelectedCategory(true);
    } else {
      setProductsToShow(categoriesMap);
      setSelectedCategory(false);
    }
  }, [category]);

  return (
    <Layout title="Products">
      <div className=" flex-auto flex-col items-center my-4 max-w-screen-xl">
        <h1 className="text-2xl font-semibold my-6 text-center">
          Chose your favorite product
        </h1>
        <div className="flex flex-wrap justify-center items-center">
          {selectedCategory ? (
            productsToShow?.map((product) => {
              return(
                <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 p-4">
                  <ProductCard product={product} addItemFromShopToBag={addItemFromShopToBag}/>
                </div>
              )
              
            })
          ) : (
            <div className="flex flex-wrap justify-center items-center">
              {Object.keys(categoriesMap).map((key) => {
                  return (
                    <>
                      {categoriesMap[key].map((product) => {
                        return(
                          <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 p-4">
                            <ProductCard product={product} addItemFromShopToBag={addItemFromShopToBag}/>
                          </div>
                        )
                      })}
                    </>
                  )
              })}
            </div>
          )}
          </div>
      </div>
    </Layout>
  )
}

export default ShopPage;