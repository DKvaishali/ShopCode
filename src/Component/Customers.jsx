import React, { useState } from 'react'
import Layouts from './Layouts';
import profile from '../assets/images/profile.jpg'

const Customers = () => {
    const [customers, setcustomers] = useState([
        {
            
            customername: 'Vaishali',
            email: 'vaishali@gmail.com',
            mobile: '+91 9542683857',
            Date: '12 jan 2023',
            
        },
       
    ])
    return (
        <Layouts>
            <div>
                <h1 className='text-xl font-semibold'>Customers</h1>
            </div>
            <div className='mt-6 '>
                <table className=' w-full'>
                    <thead>
                        <tr className=' bg-rose-600 text-white text-left'>
                            <th className='p-4'>Customer Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            customers.map((item, index) => (
                                < tr className='text-left' key={index}
                                    style={{
                                        background: (index + 1) % 2 === 0 ? '#f1f5f9' : 'white'
                                    }

                                    }>
                                        <td className='capitalize px-4 py-2'>
                                            <div className="flex gap-3 item-center">
                                            <img src={profile} alt='profile' className='w-10 h-10 rounded-full'/>
                                            <div className="flex flex-col justify-center">
                                                <span className='font-semibold'>{item.customername}</span>
                                                <small className='text-gray-500'>{item.Date}</small>
                                            </div>
                                            </div>
                                        </td>
                                    
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.Date}</td>
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Layouts>

    )
}

export default Customers