import React, { useState ,useRef } from "react";
import Header from "./Header";
import { validateFormData } from "../utils/validateForm";

const Login = () => {
  const [isLoginPage,setisLoginPage] = useState(true);
  const [username,setUsername] = useState("");
  const [formErrorMessage,setFormErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);


  const handleToggle = (e) => {
    setisLoginPage(!isLoginPage);
    e.preventDefault();
  }

  const handleFormSubmit = (e) => {
    let error_message = validateFormData(email,password,confirmPassword);
    setFormErrorMessage(error_message);
    console.log(error_message)
    e.preventDefault();
  }
  

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
        <h1 className="font-bold text-3xl py-4">{isLoginPage ? "Sign in" : "Sign Up" }</h1>
        {
          !isLoginPage &&
          <input
          type="text"
          placeholder="Username"
          value={username}
          className="p-2 my-4 w-full bg-gray-500 rounded-lg"
          onChange={(e)=> {
            setUsername(e.target.value);
            console.log(username)
          }}
        />
        }
        <input
          type="email"
          placeholder="Email or Phone number"
          className="p-2 my-4 w-full bg-gray-500 rounded-lg"
          ref={email}
          
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-500 rounded-lg"
          ref={password}
          
        />
        {
          !isLoginPage &&
          <input
          type="password"
          placeholder="Confirm Password"
          className="p-2 my-4 w-full bg-gray-500 rounded-lg"
          ref={confirmPassword}
          
        />
        }
        <p>{formErrorMessage}</p>
        <button className="my-6 p-4 bg-red-700 w-full rounded-lg"
        onClick={handleFormSubmit}
        >
        {isLoginPage ? "Sign in" : "Sign Up" }
        </button>
        {isLoginPage ? <p>New to Netflix?<a href="" onClick={handleToggle}>Sign up now.</a></p> : <p>Welcome to Netflix.<a href="" onClick={handleToggle}>Sign in now.</a></p>}
      </form>
    </>
  );
};

export default Login;
