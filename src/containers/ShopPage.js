import Layout from "../components/Layout";

const ShopPage = () => {

  const productsCategories = [
    {
      id: 1,
      name: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      name: "Sneaker",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 3,
      name: 'Women',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 4,
      name: 'Men',
      imageUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
    },
    {
      id: 5,
      name: 'Kids',
      imageUrl: 'https://images.unsplash.com/photo-1620420522286-994c1e94d863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
  ];

  return (
    <Layout title="Products">
      <div className=" flex-auto flex-col items-center my-4 max-w-screen-xl">
        <h1 className="text-4xl font-semibold my-16 text-center">
          Shop 
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-600 px-4 relative inline-block mx-4">
            <span class="relative text-white">annoyed</span>
          </span>
          now!
        </h1>
        
        <div className="flex flex-wrap justify-center items-center">
          {productsCategories.map((category) => {
            return (
              <a
                key={category.id}
                className="bg-white p-4 m-1 md:m-2 lg:m-3 rounded-lg shadow-lg flex flex-col items-center justify-center w-96 h-96 border-2 border-gray-500 rounded-lg hover:p-1 cursor-pointer"
              >
                {/* add image as a background */}
                <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover rounded-lg" />
                <div className="absolute top-50 left-50 transform -translate-x-50 -translate-y-50 border-2 border-gray-500 rounded-lg p-4 flex flex-col items-center justify-center bg-gray-100">
                  <h2 className="text-lg font-semibold mb-4">{category.name}</h2>
                  <p className="text-gray-600 mb-2">Shop now!</p>
                </div>
            </a>
            )
          })}

        </div>
      </div>

    </Layout>
  )
}

export default ShopPage;