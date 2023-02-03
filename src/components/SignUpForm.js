import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

const SignUpForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (data, form) => {
    console.log(data);
    console.log(formData);
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    } else if (data.email === "" || data.password === "") {
      alert("Email and password are required");
      return;
    } else if (data.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      alert("Please enter a valid email address");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        data.email,
        data.password
      );
      await createUserDocumentFromAuth(user, { name: data.name });
    } catch (error) {
      console.log("User creation error: ", error);
      if(error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log("User creation error: ", error);
      }
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
          type="text"
          htmlFor="Name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          required
          onChange={onFieldChange}
          name="name"
        />
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
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="confirmPassword"
        >
          Confirm Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
          onChange={onFieldChange}
          name="confirmPassword"
        />
        <button
          className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  )


}

export default SignUpForm;