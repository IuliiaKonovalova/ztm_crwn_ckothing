import Layout from "../components/Layout";

import { Link } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import GoogleAuthenticationBlock from "../components/GoogleAuthentication";

const SignInPage = () => {


  return (
    <Layout title="Sign In">
      <h1
        className="text-2xl my-6 font-bold text-center"
      >Get started</h1>
      <GoogleAuthenticationBlock />

      <div className="flex justify-center items-center">
        <div>
          Already have an account?
        </div>
        <Link
          className="ml-2 text-blue-500 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded"
          to="/signup"
        >
          Sign Up
        </Link>
      </div>
      <div>
        <SignInForm />
      </div>
    </Layout>
  )
}

export default SignInPage;