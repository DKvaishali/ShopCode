import React from 'react';
import admin from '../assets/images/admin.png';

const Admin = () => {
  return (
    <div className='bg-gray-100 h-screen flex justify-center items-center'>
        <div className='flex  gap-3 justify-center items-center'>
        <img src={admin} alt="Admin"  className='w-96 h-96 rounded'/>
        <div>
            <h1 className='text-3xl font-semibold'>Admin Console</h1>
            <form>
                <input type='text' placeholder='admin name' className='border border-gray-300 w-full p-2 rounded-md my-4'/>
                <button className='bg-blue-800 text-white rounded px-3 py-2'>Submit</button>
            </form>
        </div>
        </div>
 
       
    </div>
  )
}

export default Admin