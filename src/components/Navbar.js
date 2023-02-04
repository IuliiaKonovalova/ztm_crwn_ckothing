import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/user.context"
import { signOutUser } from "../utils/firebase/firebase.utils"

const Navbar = () => {
  const [auth, setAuth] = useState(false)
  // Set the current user
  const { currentUser, setCurrentUser } = useContext(UserContext)
  console.log(currentUser)
  // console.log(currentUser.email)
  useEffect(() => {
    if (currentUser !== null && currentUser !== undefined) {
      setAuth(true)
      console.log("auth is true")
    } else {
      setAuth(false)
      console.log("auth is false")
    }
  }, [currentUser])

  const signOutHandler = async() => {
    console.log("sign out handler")
    try {
      await signOutUser()
      setCurrentUser(null)
      setAuth(false)
    } catch (error) {
      console.log(error)
    } 
  }


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
                  onClick={signOutHandler}
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
        </ul>
    </nav>
  )
}

export default Navbar