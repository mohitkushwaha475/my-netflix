import React from 'react'
import { LOGO, USER_AVATAR } from '../utilities/constants';
import { signOut} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../utilities/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate= useNavigate()
  const user=useSelector(store=>store.user);
 const handleSignOut=()=>{
  signOut(auth).then(() => {
    toast.success(" user signout successfully")
     navigate("/")
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    navigate("/")
  });
}
  return (
    
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44'
        // src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
         src={LOGO}
         alt="logo" />
       {user &&  <div className='flex p-2 '>
          <img className='w-12 h-12 rounded-3xl'
        // src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
           src={user?.photoURL}
        //  src={USER_AVATAR}
         alt="usericon" />
         <button onClick={handleSignOut} className='font-bold text-white mx-2'>(signout)</button>
         </div>}
    </div>
  )
}

export default Header;