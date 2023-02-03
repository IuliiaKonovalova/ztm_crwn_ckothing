import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

const SignInForm = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (data, form) => {
    console.log(data);
    console.log(formData);
    if (data.email === "" || data.password === "") {
      alert("Email and password are required");
      return;
    }
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        data.email,
        data.password
      );
      await createUserDocumentFromAuth(user);
    } catch (error) {
      console.log("User signin with email error: ", error);
    }
  };

  const onFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return(
    <div>
      <h2>Sign Up with your email and password</h2>
      <form
        className="w-full max-w-sm"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData);
        }}
        >
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          required
          onChange={onFieldChange}
          name="email"
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          required
          onChange={onFieldChange}
          name="password"
        />
        <button
          className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignInForm;