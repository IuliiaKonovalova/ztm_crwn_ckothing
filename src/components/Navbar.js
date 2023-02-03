import { Link } from "react-router-dom"

const Navbar = () => {
  return(
    <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-6">
        <ul className="flex uppercase w-full justify-between text-white font-bold">
          <li className="mr-6">
            <Link className="hover:text-pink-300" to="/">Logo</Link>
          </li>
          <li className="mr-6">
            <Link className=" hover:text-pink-300" to="/shop">Shop</Link>
          </li>
          <li className="mr-6">
            <Link className="hover:text-pink-300" to="/signin">Sign In</Link>
          </li>
          <li className="mr-6">
            <Link className="hover:text-pink-300" to="/signup">Sign Up</Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar