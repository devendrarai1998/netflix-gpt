import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img 
          src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg"
          alt="Logo"
        />
      </div>
      
      <form className="w-4/12 absolute p-12  my-36 mx-auto right-0 left-0 text-white bg-black rounded-lg bg-opacity-90">
        <h1 className="font-bold text-4xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && ( 
          <input 
            type="text" 
            placeholder="Full Name" 
            className="p-4 my-4 w-full bg-gray-700" 
          /> 
        )}
        <input 
          type="text" 
          placeholder="Email or Mobile Number" 
          className="p-4 my-4 w-full bg-gray-700" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-6 my-6 bg-red-700 w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          { isSignInForm ? 
          "New to Netflix? Sign Up Now" 
          : "Already Registered ? Sign In Now" }
        </p>
      </form>
    </div>
  )
}

export default Login;