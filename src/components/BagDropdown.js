const BagDropdown = ({ bag, removeItem }) => {
  return (
    <div className="absolute right-0 w-64 mt-2 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
      <div className="py-1">
        {products.map((item) => {
          return (
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 mr-4 rounded-full"
                  src={item.image}
                  alt=""
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">{item.price}</p>
                </div>
              </div>

            </div>
          );
        })}
      </div>
      <div className="px-4 py-3">
        <p className="text-sm text-gray-500">
          Subtotal <span className="font-medium">$0.00</span>
        </p>
        <a
          href="#"
          className="flex justify-center w-full px-4 py-2 mt-1 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
        >
          Checkout
        </a>
      </div>
    </div>
  )

}

export default BagDropdown