import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInform, setissignInForm] = useState(true);

  const toggleSignInForm = () => {
    setissignInForm(!isSignInform);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_medium.jpg"
          alt="background"
        />
      </div>
      <form className="absolute p-10 bg-black/60 w-3/12 my-35 mx-auto right-0 left-0 text-white px-5 rounded-lg">
        <h1 className="font-bold text-2xl py-6">
          {isSignInform ? "Sign In" : "SignUp"}
        </h1>
        {!isSignInform && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 mx-2 my-4 w-full bg-gray-800 text-white "
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-2 mx-2 my-4 w-full bg-gray-800 text-white "
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 m-2 w-full text-white bg-gray-800"
        />
        <button className="p-2 mx-2 my-6 bg-red-700 w-full rounded-lg cursor-pointer">
          {isSignInform ? "Sign In" : "SignUp"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInform
            ? "New user? SignUp Now"
            : "Already have an account? SignIn"}
        </p>
      </form>
    </div>
  );
};

export default Login;
