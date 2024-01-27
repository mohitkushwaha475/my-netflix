import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utilities/Validate";
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addUser} from'../utilities/userSlice'


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]=useState()
  const name=useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  const navigate=useNavigate();
  const dispatch= useDispatch()

  const handleButtonClick = () => {
    // validate email and passward
    // checkValidateData
    console.log(email.current.value);
    console.log(password.current.value);
  const messsage=  checkValidateData(email.current.value,password.current.value);
  setErrorMessage(messsage)

  if(messsage) return;

  if(!isSignInForm)
{
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/63853723?v=4"
    }).then(() => {
      const {uid,email,displayName,photoURL}=auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
      console.log(user)
      console.log("user is updated successfully")
    toast.success("user is signup suceessfully !!")
    navigate('/browse')
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+"-"+errorMessage)
    });
    
    // ...
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
    // ..
  });


}
  else{
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user +" user is sign in successfully")
      toast.success("user is sigin suceessfully !!");
      navigate('/browse')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage)
    });
  


  }

  };
  const ToggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
      </div>
      <form
      onSubmit={(e)=>e.preventDefault()}
        action=""
        className="p-12 bg-black absolute w-1/4 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70 "
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
        ref={email }
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
         ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2 ">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={ToggleSignInForm}>
          {isSignInForm
            ? "New to  Netflix ? Sign Up Now"
            : "Already Registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
