import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/user.context"
import { signOutUser } from "../utils/firebase/firebase.utils"

import BagDropdown from "./BagDropdown"
import { BagContext } from "../context/bag.context"
import BagIcon from "../assets/images/shopping-bag.svg"

const Navbar = () => {
  const [auth, setAuth] = useState(false)
  // Set the current user
  const { currentUser } = useContext(UserContext)

  // Set the bag dropdown
  const { isBagDropdownOpen, setIsBagDropdownOpen } = useContext(BagContext);
  // Toggle the bag dropdown
  const toggleBagDropdown = () => {
    setIsBagDropdownOpen(!isBagDropdownOpen);
  };

  console.log(currentUser)

  useEffect(() => {
    if (currentUser !== null && currentUser !== undefined) {
      setAuth(true)
      console.log("auth is true")
    } else {
      setAuth(false)
      console.log("auth is false")
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
          <li className="mr-6">
            <div className="hover:text-pink-300 absolute" to="/cart">
              {isBagDropdownOpen && <BagDropdown />}
              <button onClick={toggleBagDropdown}>
                <img src={BagIcon} alt="cart icon" className="w-6 h-6" />
              </button>
            </div>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar