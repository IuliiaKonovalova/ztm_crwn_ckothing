const Navbar = () => {
  return(
    <nav className="flex items-center justify-between flex-wrap bg-violet-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <ul className="flex">
          <li className="mr-6">
            <a href="/">Home</a>
          </li>
          <li className="mr-6">
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar