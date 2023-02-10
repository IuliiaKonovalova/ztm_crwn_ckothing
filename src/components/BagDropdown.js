const BagDropdown = ( bagProps ) => {
  const { bagShow } = bagProps;

  return (
    <>
      <div id="bag-dropdown" className="
          opacity-100 absolute top-6 right-0 w-64 mt-2 origin-top-right 
          rounded-md shadow-lg bg-white ring-1 ring-gray-400  divide-y
          divide-gray-100 focus:outline-none z-50"
        >
        <div className="py-1">
          
          {bagShow.map((item) => {
            return (
            <div
              className="flex items-center justify-between px-4 py-3"
              key={item.id}
            >
              <div className="flex items-center">
                <img
                  className="w-8 h-8 mr-4 rounded-full"
                  src={item.imageUrl}
                  alt=" "
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">{item.price}</p>
                </div>
                <div className="flex items-center">
                  <p className="font-medium text-gray-900 ml-4">
                    x <span className="font-medium">{item.quantity}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  className="p-1 text-gray-400 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-label="Remove"
                >
                  <span className="sr-only">Remove</span>
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path

                      d="M6 18a2 2 0 002 2h4a2 2 0 002-2V6H6v12zm2-9a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1H9a1 1 0 01-1-1V9z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            )
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
    </>
  )

}

export default BagDropdown