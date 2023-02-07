const BagDropdown = ({ bag, removeItem }) => {
  return (
    <div className="absolute right-0 w-64 mt-2 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
      <div className="px-1 py-1 ">
        <p className="text-sm text-gray-500">Your Bag</p>
      </div>
      <div className="py-1">
        {bag.map((item) => {})}
      </div>
    </div>
  )

}

export default BagDropdown