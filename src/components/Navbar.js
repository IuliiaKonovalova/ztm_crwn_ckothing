import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/user.context"
import { signOutUser } from "../utils/firebase/firebase.utils"
import { useSelector } from "react-redux"

import BagDropdown from "./BagDropdown"
import { BagContext } from "../context/bag.context"
import BagIcon from "../assets/images/shopping-bag.svg"

const Navbar = () => {
  const [auth, setAuth] = useState(false)
  // Set the current user
  const currentUser = useSelector(state => state.user.currentUser)

  // Set the bag dropdown
  const {
    isBagDropdownOpen,
    setIsBagDropdownOpen,
    bagProducts,
    addItemsToBag,
    bagTotalItemsCount
  } = useContext(BagContext);

  // Toggle the bag dropdown
  const toggleBagDropdown = () => {
    setIsBagDropdownOpen(!isBagDropdownOpen);
  };
  const [bagShow, setBagShow] = useState(bagProducts)

  useEffect(() => {
    setBagShow(bagProducts)
  }, [bagProducts, isBagDropdownOpen, toggleBagDropdown])
  const bagProps = {
    bagShow: bagShow,
  }


  useEffect(() => {
    if (currentUser !== null && currentUser !== undefined) {
      setAuth(true)
    } else {
      setAuth(false)
    }
  }, [currentUser])

  return(
    <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-6">
        <ul className="flex uppercase w-full justify-between text-white font-bold">
          <li className="mr-6">
            <Link className="hover:text-pink-300" to="/">Logo</Link>
          </li>
          <li className="mr-6">
            <Link className=" hover:text-pink-300" to="/shop">Shop</Link>
          </li>
          {auth ? (
            <>
              <li className="mr-6">
                <button
                  className="hover:text-pink-300"
                  onClick={signOutUser}
                >
                  Sign Out
                  </button>
              </li>
            </>
          ) : (
            <>
            <li className="mr-6">
              <Link className="hover:text-pink-300" to="/signin">Sign In</Link>
            </li>
            <li className="mr-6">
              <Link className="hover:text-pink-300" to="/signup">Sign Up</Link>
            </li>
          </>
          )
          }
          <li className="mr-6 px-5 relative">
            <div className="hover:text-pink-300 absolute" to="/cart">
              {isBagDropdownOpen && <BagDropdown {...bagProps}/>}
              <button
                onClick={toggleBagDropdown}
                className="relative"
              >
                <img src={BagIcon} alt="cart icon" className="w-6 h-6" />
              </button>
            </div>
            <span className="absolute top-4 left-7 bg-pink-500 text-white
              rounded-full w-4 h-4 flex items-center justify-center p-3"
            >
              {bagTotalItemsCount}
            </span>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar