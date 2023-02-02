import Layout from "../components/Layout";
import { signInWithGooglePopup } from "../utils/firebase/firebase.utils";

const SignInPage = () => {

  const logGoogleUser = async() => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }
  return (
    <Layout title="Sign In">
      <h1>Sign In Page</h1>
      <button
        className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
        onClick={logGoogleUser}
      >
        Sign In with Google
      </button>
    </Layout>
  )
}

export default SignInPage;