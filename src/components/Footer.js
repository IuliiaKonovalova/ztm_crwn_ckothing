const Footer = () => {
  return (
    <footer
      className="flex justify-center items-center h-16 bg-gray-900 text-white">
      <p>© {new Date().getFullYear()}, Built with ZTM</p>
    </footer>
  )
}

export default Footer;