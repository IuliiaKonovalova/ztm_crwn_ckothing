import Layout from "../components/Layout";
import SHOP_DATA from "../data/shop-data";

const ShopPage = () => {

  const productsAll = SHOP_DATA;

  return (
    <Layout title="Products">
      <div className=" flex-auto flex-col items-center my-4 max-w-screen-xl">
        <h1 className="text-2xl font-semibold my-6 text-center">
          Chose your favorite product
        </h1>
        
        <div className="flex flex-wrap justify-center items-center">
          {productsAll.map((product) => {
            return (
              <div class="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 p-4">
                <a
                  key={product.id}
                  className="xl:w-52 c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                >
                  {/* add image as a background */}
                  <div className="relative pb-48 overflow-hidden">
                    <img
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-cover" 
                      src={product.imageUrl}
                      alt={product.name}
                      />
                  </div>
                  <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    <h2 className="text-lg font-semibold mb-4">{product.name}</h2>
                  </div>
              </a>
            </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default ShopPage;