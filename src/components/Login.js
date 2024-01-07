import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div >
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
        alt="" />
      </div>
      <form action="" className='p-12 bg-black absolute w-1/4 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70 '>
        <h1 className='font-bold text-3xl py-4'>Sign In</h1>
        <input type="text" placeholder='Email Address'  className='p-4 my-4 w-full bg-gray-700'/>
        <input type="password" placeholder='password' className='p-4 my-4 w-full bg-gray-700' />
        <button className='p-4 my-6 bg-red-700 w-full '>Sign In</button>
        <p className='text-white'>New to  Netflix ? Sign Up Now</p>
      </form>
    </div>
  )
}

export default Login