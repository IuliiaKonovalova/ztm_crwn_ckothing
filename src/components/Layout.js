import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Layout({ title, content, children }) {
  return (
    <div className="flex flex-col align-center justify-between min-h-screen bg-violet-200">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Helmet>
      <Navbar />
      <div className="flex-auto flex-col items-center p-4 max-w-screen-xl mx-auto ">
        {children}
      </div>
      <Footer />
    </div>
  )

}

export default Layout;