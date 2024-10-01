// import React ,{useState} from 'react'
// import login from '../assets/images/login.png';

// const Login = () => {
//   const [showPassword, setShowPassword] = useState('password');
//   return (
  
         
//       <div className='grid md:grid-cols-2 gap-0'>
//         {/* Left side with background image */}
//       <div className="relative bg-[url('/src/assets/images/graph.png')] bg-cover bg-right md:h-screen hidden md:block">
//            {/* Align login image on the background */}
//         <img src={login} alt="login" className='absolute md:top-1/2 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:h-40' />
//         </div>
//         <div className='flex flex-col md:justify-items-start md:py-16 py-8 '>
//           <div className="shadow-2xl shadow-slate-400 p-10 rounded-md w-7/12 md:h-full h-4/5">
//             <h1 className='text-3xl md:mt-3 font-bold text-darkBlue'>Login</h1>
//             <p className='text-lg md:pt-4 text-gray-500'>Login to your Account</p>
//             <form className='md:mt-8 pt-2 space-y-10  '>
//               <div className='flex flex-col relative'>
//                 <input 
//                 required
//                 type="text" 
//                 placeholder='Enter Your Name' 
//                 className='border mb-3 p-2  rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600' 
//                 />
//                 <input 
//                 required
//                 type="text" 
//                 placeholder='Enter Your Email' 
//                 className='border  mb-3 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
//                  />
                
                 
//                     <input 
//                     required
//                     autoSave='false'
//                       type={showPassword}
//                       placeholder="Enter Your Password"
//                       className="border mb-4 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
//                     />
//                     <button 
//                     onClick={() => setShowPassword(showPassword === 'password' ? 'text' : 'password')}
//                     className="absolute top-28 right-3 font-bold text-darkBlue hover:text-customOrange">
//                       {
//                         showPassword === 'password' ?
//                         <i className="ri-eye-line"></i> :
//                         <i className="ri-eye-off-line"></i>
//                       }
                      
//                     </button>
//                   <button
//                     className='bg-customOrange text-darkBlue mx-auto text-lg font-bold rounded md:mt-4 mt-1 md:h-14 md:w-7/12 hover:bg-darkBlue hover:text-white px-3 py-2'>
//                     Register</button>
//                 </div>

//             </form>
             
//           </div>
//         </div>
//       </div>
    
    
//   )
// }

// export default Login
import React, { useState } from 'react';
import login from '../assets/images/login.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState('password');
  return (
    <div className='grid md:grid-cols-2 gap-0 min-h-screen'>
      {/* Left side with background image */}
      <div className="relative bg-[url('/src/assets/images/graph.png')] bg-cover bg-right md:h-screen hidden md:block">
        {/* Align login image on the background */}
        <img src={login} alt="login" className='absolute md:top-1/2 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:h-auto' />
      </div>

      {/* Right side with form */}
      <div className='flex flex-col md:justify-start md:items-start justify-center items-center md:py-16 py-8 h-full w-full'>
        <div className="shadow-2xl shadow-slate-400 p-10 rounded-md w-full max-w-md">
          <h1 className='text-3xl md:mt-3 font-bold text-darkBlue text-center'>Login</h1>
          <p className='text-lg md:pt-4 pt-2 text-gray-500 text-center'>Login to your Account</p>
          
          <form className='md:mt-8 pt-2 space-y-6'>
            <div className='flex flex-col relative'>
              <input 
                required
                type="text" 
                placeholder='Enter Your Name' 
                className='border mb-3 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 w-full' 
              />
              <input 
                required
                type="text" 
                placeholder='Enter Your Email' 
                className='border mb-3 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 w-full'
              />

              <div className="relative">
                <input
                  required
                  type={showPassword}
                  placeholder="Enter Your Password"
                  className="border mb-4 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 w-full"
                />
                {/* Toggle show/hide password button */}
                <button 
                  type="button"
                  onClick={() => setShowPassword(showPassword === 'password' ? 'text' : 'password')}
                  className="absolute top-3 right-3 font-bold text-darkBlue hover:text-customOrange"
                >
                  {showPassword === 'password' ? (
                    <i className="ri-eye-line"></i>
                  ) : (
                    <i className="ri-eye-off-line"></i>
                  )}
                </button>
              </div>

              <button
                className='bg-customOrange text-darkBlue mx-auto text-lg font-bold rounded mt-3 h-12 w-full hover:bg-darkBlue hover:text-white px-3 py-2'
              >
                Login
              </button>
            </div>
          </form>
          
          {/* Already have an account link */}
          <div className='text-center mt-4'>
            <p className='text-gray-600'>
              Don't have an account? 
              <a href="/register" className='text-customOrange hover:underline'> Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
