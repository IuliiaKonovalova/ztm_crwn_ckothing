import { useEffect, useState } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../utils/firebase/firebase.utils";


const GoogleAuthenticationBlock = () => {

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
    await signInWithGoogleRedirect();


  }

  return (
    <button
      className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
      onClick={logGoogleRedirectUser}
    >
      Continue with Google
    </button>
  )
}

export default GoogleAuthenticationBlock;