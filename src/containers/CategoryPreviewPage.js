import Layout from "../components/Layout";
import { useContext, useEffect, useState } from "react"
import { CategoriesContext } from "../context/categories.context";

const CategoryPreviewPage = () => {


  return (
    <Layout title="Products">

      <div className=" flex-auto flex-col items-center my-4 max-w-screen-xl">
        <h1 className="text-4xl font-semibold my-16 text-center">
          Category Preview
        </h1>
      </div>
    </Layout>
  );
}

export default CategoryPreviewPage;