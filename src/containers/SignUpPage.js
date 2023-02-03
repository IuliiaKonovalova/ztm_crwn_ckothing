import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import GoogleAuthenticationBlock from "../components/GoogleAuthentication";

const SignUpPage = () => {


  return (
    <Layout title="Sign Up">
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
          to="/signin">
          Sign In
        </Link>
      </div>
      <div>
        <SignUpForm />
      </div>
    </Layout>
  )
}

export default SignUpPage;