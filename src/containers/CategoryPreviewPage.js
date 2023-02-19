import Layout from "../components/Layout";
import { useContext, useEffect, useState } from "react"
import { CategoriesContext } from "../context/categories.context";

const CategoryPreviewPage = ({title, products}) => {


  return (
    <Layout title="Products">

      <div className=" flex-auto flex-col items-center my-4 max-w-screen-xl">
        <h1 className="text-4xl font-semibold my-16 text-center">
          Category: {title.toUpperCase()}
        </h1>
        <div className="grid items-center">
          {products.filter((product, index) => index < 4).map((product) => (
            <div key={product.id}>
              <div className="flex flex-col items-center justify-center">
                {product.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default CategoryPreviewPage;