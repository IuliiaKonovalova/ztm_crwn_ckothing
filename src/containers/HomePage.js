import Layout from "../components/Layout";
import { useContext, useEffect, useState } from "react"
import { CategoriesContext } from "../context/categories.context";

const HomePage = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);

  return (
    <Layout title="Products">
              <div className=" flex-auto flex-col items-center my-4 max-w-screen-xl">
                {/* <h1>{key}</h1> */}
                <h1 className="text-4xl font-semibold my-16 text-center">
                  Shop 
                    <span class="relative text-pink-600 mx-2">crown</span>
                  now!
                </h1>
      {
          Object.keys(categoriesMap).map((key) => {
            return (
              // get the key of the object and use it as a title

              // show only keys : {hats: Array(9), jackets: Array(5), mens: Array(6), sneakers: Array(8), womens: Array(7)}
                
                <div className="flex flex-wrap justify-center items-center">
                  {/* {categoriesMap[key].map((category) => {
                    return ( */}
                      <a
                        key={key.id}
                        className="bg-white p-4 m-1 md:m-2 lg:m-3 rounded-lg shadow-lg flex flex-col items-center justify-center w-96 h-96 border-2 border-gray-500 rounded-lg hover:p-1 cursor-pointer"
                      >
                        {/* add image as a background */}
                        <img src={key.imageUrl} alt={key.name} className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute top-50 left-50 transform -translate-x-50 -translate-y-50 border-2 border-gray-500 rounded-lg p-4 flex flex-col items-center justify-center bg-gray-100">
                          <h2 className="text-lg font-semibold mb-4">{key}</h2>
                          <p className="text-gray-600 mb-2">Shop now!</p>
                        </div>
                    </a>
                    {/* )
                  })} */}
                </div>
            )
          })
        }
        <div className="flex flex-wrap justify-center items-center">
          {/* {Object.keys(categoriesMap).map((key) => {
            <>
            {console.log(categoriesMap[key])}
            return (
            {categoriesMap[key].map((category) => {
              return (
                <a
                key={category.id}
                className="bg-white p-4 m-1 md:m-2 lg:m-3 rounded-lg shadow-lg flex flex-col items-center justify-center w-96 h-96 border-2 border-gray-500 rounded-lg hover:p-1 cursor-pointer"
                >

                <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover rounded-lg" />
                <div className="absolute top-50 left-50 transform -translate-x-50 -translate-y-50 border-2 border-gray-500 rounded-lg p-4 flex flex-col items-center justify-center bg-gray-100">
                  <h2 className="text-lg font-semibold mb-4">{category.name}</h2>
                  <p className="text-gray-600 mb-2">Shop now!</p>
                </div>
            </a>
            )
          })}
            )
          </>
          })} */}

        </div>
      </div>

    </Layout>
  )
}

export default HomePage;