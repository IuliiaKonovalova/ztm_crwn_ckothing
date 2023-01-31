import Layout from "../components/Layout";

const ShopPage = () => {
  return (
    <Layout title="Products">
      <div className=" flex-auto flex-col items-center my-4 max-w-screen-xl">
        <h1 className="text-4xl font-semibold mb-8 text-center">
          Shop now!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Product 1</h2>
            <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
            <p className="text-gray-700 font-semibold mb-2">$9.99</p>
            <button className="bg-violet-500 text-white rounded-lg px-4 py-2 hover:bg-violet-600">Add to cart</button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Product 1</h2>
            <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
            <p className="text-gray-700 font-semibold mb-2">$9.99</p>
            <button className="bg-violet-500 text-white rounded-lg px-4 py-2 hover:bg-violet-600">Add to cart</button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Product 1</h2>
            <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
            <p className="text-gray-700 font-semibold mb-2">$9.99</p>
            <button className="bg-violet-500 text-white rounded-lg px-4 py-2 hover:bg-violet-600">Add to cart</button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Product 1</h2>
            <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
            <p className="text-gray-700 font-semibold mb-2">$9.99</p>
            <button className="bg-violet-500 text-white rounded-lg px-4 py-2 hover:bg-violet-600">Add to cart</button>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default ShopPage;