import Layout from "../components/Layout";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../utils/firebase/firebase.utils";

const SignInPage = () => {
  useEffect(() => {
    const logGoogleRedirectUser = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(userDocRef);
      }
    };
    logGoogleRedirectUser();
  }, []);

  const logGoogleRedirectUser = async() => {
    const {user} = await signInWithGoogleRedirect();
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(userDocRef);
  }

  return (
    <Layout title="Sign In">
      <h1>Sign In Page</h1>
      <button
        className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
        onClick={logGoogleRedirectUser}
      >
        Sign In with Google Redirect
      </button>
    </Layout>
  )
}

export default SignInPage;