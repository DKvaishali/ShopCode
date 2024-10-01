import React from 'react';
import logo from '../assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import { Children } from 'react';
import { useState } from 'react';

const Layout = ({children}) => {
  const [open,setOpen]=useState(false)
    const menu=[
        {
            label:'Home',
            link:'/',
        },
        {
            label:'Products',
            link:'/products',
        },
        {
            label:'Category',
            link:'/category',
        },
        {
            label:'Contact Us',
            link:'/contactus',
        },


    ]
  return (
    <div>
        <nav className='shadow-lg sticky'>
            <div className='w-10/12 mx-auto flex items-center justify-between'>
                <img src={logo} alt="logo"  className='w-36 md:py-4 py-2'/>
            <div>
            <button className='md:hidden'
            onClick={()=>setOpen(!open)}>
            <i className="ri-menu-search-fill text-darkBlue font-bold text-3xl hover:text-customOrange"></i>
            </button>
               <ul className='md:flex  hidden gap-4 items-center'>
                {
                    menu.map((item,index)=>(
                        <li key={index}>
                            <Link to={item.link}
                            className='p-3 block text-center text-[#003B56] font-semibold border-b-4 border-transparent hover:border-customOrange'
                            >{item.label}</Link>
                            
                        </li>
                    ))
                }
                <Link
                to='/login'
                className='p-3 block text-center text-[#003B56] font-semibold border-b-4 border-transparent hover:border-customOrange'>
                    Login</Link>
                    <Link
                to='/Register'
                className='px-5 py-2 block text-center text-md  text-white  rounded hover:bg-[#003B56] font-semibold border-b-4 border-transparent bg-customOrange'>
                    Register</Link>
               </ul>
               </div>
            </div>
        </nav>
       <div>
        {children}
       </div>
        <footer className="bg-gray-900 text-gray-200 py-8 ">
      <div className="container mx-auto grid grid-cols-1  mt-3 md:grid-cols-4 gap-8 px-4 md:px-8">
        {/* Company Info */}
        <div>
      
        <img src={logo} alt="logo"  className='w-20'/>
      
          <h3 className="text-lg font-semibold mt-2 mb-6">About Us</h3>
          <p className="text-md ">
            We are a leading online store providing quality products at
            competitive prices. Shop with us for the best deals and customer
            service.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-4">
            <li><Link to="#" className="hover:text-customOrange">Help & FAQ</Link></li>
            <li><Link to="#" className="hover:text-gray-400">Shipping & Returns</Link></li>
            <li><Link to="#" className="hover:text-gray-400">Order Tracking</Link></li>
            <li><Link to="#" className="hover:text-gray-400">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-4">
            <li><Link to="#" className="hover:text-gray-400">My Account</Link></li>
            <li><Link to="#" className="hover:text-gray-400">Wishlist</Link></li>
            <li><Link to="#" className="hover:text-gray-400">Gift Cards</Link></li>
            <li><Link to="#" className="hover:text-gray-400">Affiliate Program</Link></li>
          </ul>
        </div>

        {/* Social Media */}
       <div>
       <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
       <form className='space-y-2'>
        <input
        type='text'
        placeholder='Name'
        required
        className='bg-white w-full rounded p-2'
        />
         <input
        type='text'
        placeholder='Email'
        required
        className='bg-white w-full rounded p-2'
        />
         <textarea
        type='text'
        placeholder='Message'
        rows={2}
        required
        className='bg-white w-full rounded p-2'
        />
        <button className='bg-customOrange hover:bg-[#003B56] rounded px-4 py-1 font-semibold'>
        Submit
        </button>
       </form>
       </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2024 ShopName. All rights reserved.</p>
        <div>
          <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
          <ul className="flex space-x-4 justify-center">
            <li>
              <Link to="#" className="hover:text-gray-400">
              <i class="ri-facebook-box-fill  text-[40px] hover:text-customOrange"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
              <i class="ri-twitter-fill  text-[40px] hover:text-customOrange"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
              <i class="ri-instagram-fill text-[40px] hover:text-customOrange"></i> 
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
              <i class="ri-linkedin-box-fill text-[40px] hover:text-customOrange"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    </footer>
    
    {/* {
      open && 
      <aside className='md:hidden bg-slate-900 shadow-lg  fixed top-0 left-0 z-10 w-[200px] h-[500px]'>
          
    </aside>
} */}
  {open && (
  <aside className='md:hidden bg-darkBlue shadow-lg fixed top-0 right-0 z-10 w-[200px] h-[330px]'>
    <div className="p-4 text-white">
      {/* Close Button */}
      <button onClick={() => setOpen(false)} className="text-right w-full">
        <i className="ri-close-fill text-white text-2xl"></i>
      </button>

      {/* Menu Items */}
      <ul className="mt-6 space-y-4">
        {menu.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              onClick={() => setOpen(false)}  // Close menu on click
              className="block text-white font-semibold text-lg hover:text-customOrange hover:text-xl">
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to='/login'
            onClick={() => setOpen(false)}  // Close menu on click
            className="block text-white font-semibold text-lg hover:text-customOrange hover:text-xl">
            Login
          </Link>
        </li>
        <li>
          <Link
            to='/register'
            onClick={() => setOpen(false)}  // Close menu on click
            className="block text-white  text-lg font-semibold hover:text-customOrange hover:text-xl">
            Register
          </Link>
        </li>
      </ul>
    </div>
  </aside>
)}
    </div>
  )
}

export default Layout