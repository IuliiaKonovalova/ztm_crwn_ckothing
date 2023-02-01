import { Link } from "react-router-dom"

const Navbar = () => {
  return(
    <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <ul className="flex">
          <li className="mr-6">
            <Link className="text-white" to="/">Logo</Link>
          </li>
          <li className="mr-6">
            <a href="/shop">Shop</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar