import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Layout({ title, content, children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-violet-200">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Helmet>
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )

}

export default Layout;