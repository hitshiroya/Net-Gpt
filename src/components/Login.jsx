import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_medium.jpg"
          alt=""
        />
      </div>

      <form className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
        <h1 className="font-bold text-3xl py-4">Sign in</h1>
        <input
          type="email"
          placeholder="Email or Phone number"
          className="p-2 my-4 w-full bg-gray-500 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-500 rounded-lg"
        />
        <button className="my-6 p-4 bg-red-700 w-full rounded-lg">
          Sign In
        </button>
        <p>New to Netflix?<a href="">Sign up now.</a></p>
      </form>
    </>
  );
};

export default Login;
