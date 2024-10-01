import React, { useState } from 'react';
import signup from '../assets/images/signup.png';
import { Link } from 'react-router-dom';
import firebaseAppConfig from '../util/firebase-config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth=getAuth(firebaseAppConfig)

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const Signup = async (e) => {
    try {
      e.preventDefault();
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log(userCredential.user); // Log the user details
    } 
    catch (error) { // Corrected error handling
      console.log(error.message); // Log the actual error message
    }
  };

 
  const [showPassword, setShowPassword] = useState('password');
  const handleOnChange = (e) => {
  const input = e.target
  const name = input.name
  const value = input.value
  setFormData({ ...formData, [name]: value })
};
  return (
    <div className='grid md:grid-cols-2 gap-0 min-h-screen'>
      {/* Left side with background image */}
      <div className="relative bg-[url('/src/assets/images/graph.png')] bg-cover bg-center md:h-screen hidden md:block">
        <img src={signup} alt="signup" className='absolute md:top-1/2 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:h-full' />
      </div>

      {/* Right side with form */}
      <div className='flex flex-col md:justify-start md:items-start justify-center items-center md:py-16 py-8 h-full w-full'>
        <div className="shadow-2xl shadow-slate-400 p-10 rounded-md w-full max-w-md">
          <h1 className='text-3xl mt-3 font-bold text-darkBlue text-center'>Register Now</h1>
          <p className='text-lg pt-3 text-gray-500 text-center'>Create a new Account</p>
          <form className='mt-8 space-y-6' onSubmit={Signup}>
            <div className='flex flex-col relative'>
              <input 
                onChange={handleOnChange}
                required
                name="fullname"
                type="text" 
                placeholder='Enter Your Name' 
                className='border mb-3 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 w-full' 
              />
              <input 
               onChange={handleOnChange}
                required
                name="email"
                type="text" 
                placeholder='Enter Your Email' 
                className='border mb-3 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 w-full'
              />
              
              <div className="relative">
                <input 
                 onChange={handleOnChange}
                  required
                  autoComplete='off'
                  name="password"
                  type={showPassword}
                  placeholder="Enter Your Password"
                  className="border mb-4 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 w-full"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(showPassword === 'password' ? 'text' : 'password')}
                  className="absolute top-3 right-3 font-bold text-darkBlue hover:text-customOrange"
                >
                  {showPassword === 'password' ? <i className="ri-eye-line"></i> : <i className="ri-eye-off-line"></i>}
                </button>
              </div>

              <button
                className='bg-customOrange text-darkBlue mx-auto text-lg font-bold rounded mt-4 h-12 w-full hover:bg-darkBlue hover:text-white px-3 py-2'
              >
                Register
              </button>
            </div>
          </form>

          {/* Already have an account link */}
          <div className='text-center mt-4'>
            <p className='text-gray-600'>
              Already have an account? 
              <Link to="/login" className='text-customOrange hover:underline'>
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
