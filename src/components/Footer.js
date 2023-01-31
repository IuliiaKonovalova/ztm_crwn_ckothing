const Footer = () => {
  return (
    <footer
      className="flex justify-center items-center h-16 bg-violet-700 text-white">
      <p>© {new Date().getFullYear()}, Built with ZTM</p>
    </footer>
  )
}

export default Footer;