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
        <h1 className="text-4xl font-semibold mb-8 text-center">
          Shop now!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productsCategories.map((category) => {
            return (
              <div
                key={category.id}
                className="bg-white p-1 rounded-lg shadow-lg flex flex-col items-center justify-center w-64 h-64 border-2 border-gray-500 rounded-lg"
              >
                {/* add image as a background */}
                <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover rounded-lg" />
                <div className="absolute top-50 left-50 transform -translate-x-50 -translate-y-50 border-2 border-gray-500 rounded-lg p-4 flex flex-col items-center justify-center bg-violet-100">
                  <h2 className="text-lg font-semibold mb-4">{category.name}</h2>
                  <p className="text-gray-600 mb-2">Shop now!</p>
                </div>
            </div>
            )
          })}

        </div>
      </div>

    </Layout>
  )
}

export default ShopPage;