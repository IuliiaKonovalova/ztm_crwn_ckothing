import Layout from "../components/Layout";
import { useContext, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { CategoriesContext } from "../context/categories.context";
import { BagContext } from "../context/bag.context"
import CategoryPreviewPage from "./CategoryPreviewPage";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";


const ShopPage = () => {

  const { categoriesMap } = useContext(CategoriesContext);

  const [productsToShow, setProductsToShow] = useState(categoriesMap);

  const { addItemsToBag } = useContext(BagContext);
  const addItemFromShopToBag = (product)=> {
    addItemsToBag(product)
  }

    // get category name from url to={`/shop/${category}`}
    // const { category } = useParams();
    // console.log(useParams());
    // get value from {*: 'hats'} useParams
    const category = Object.values(useParams());
    console.log(category);

    // console log url params
    useEffect(() => {
      if (category) {
        // get values from categoriesMap by the key category
        const categorySelectedProducts = categoriesMap[category];
        console.log(categorySelectedProducts);
        // set productsToShow to the value of categorySelectedProducts
        setProductsToShow(categorySelectedProducts);
      }
      console.log('productsToShow' + productsToShow);
      console.log(productsToShow)
    }, [category]);

  return (

    <Layout title="Products">
      <div className=" flex-auto flex-col items-center my-4 max-w-screen-xl">
        <h1 className="text-2xl font-semibold my-6 text-center">
          Chose your favorite product
        </h1>
        
        <div className="flex flex-wrap justify-center items-center">
                  {productsToShow.map((product) => {
                    return(
                      <div class="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 p-4">

                        <ProductCard product={product} addItemFromShopToBag={addItemFromShopToBag}/>
                      </div>
                    )
                    
                  })}

        </div>
      </div>
    </Layout>
  )
}

export default ShopPage;