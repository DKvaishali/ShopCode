import React, { useState } from 'react'
import Layouts from './Layouts'

const Orders = () => {
    const [order, setorder] = useState([
        {
            orderid: '#111',
            customername: 'Vaishali',
            email: 'vaishali@gmail.com',
            mobile: '+91 9542683857',
            product: 'laptop',
            Amount: '50234',
            Date: '12 jan 2023',
            status: 'pending'
        },
        {
            orderid: '#111',
            customername: 'Vaishali',
            email: 'vaishali@gmail.com',
            mobile: '+91 9542683857',
            product: 'laptop',
            Amount: '50234',
            Date: '12 jan 2023',
            status: 'pending'
        },
        {
            orderid: '#111',
            customername: 'Vaishali',
            email: 'vaishali@gmail.com',
            mobile: '+91 9542683857',
            product: 'laptop',
            Amount: '50234',
            Date: '12 jan 2023',
            status: 'pending'
        },
        {
            orderid: '#111',
            customername: 'Vaishali',
            email: 'vaishali@gmail.com',
            mobile: '+91 9542683857',
            product: 'laptop',
            Amount: '50234',
            Date: '12 jan 2023',
            status: 'pending'
        },
        {
            orderid: '#111',
            customername: 'Vaishali',
            email: 'vaishali@gmail.com',
            mobile: '+91 9542683857',
            product: 'laptop',
            Amount: '50234',
            Date: '12 jan 2023',
            status: 'pending'
        },
        {
            orderid: '#111',
            customername: 'Vaishali',
            email: 'vaishali@gmail.com',
            mobile: '+91 9542683857',
            product: 'laptop',
            Amount: '50234',
            Date: '12 jan 2023',
            status: 'pending'
        },
        {
            orderid: '#111',
            customername: 'Vaishali',
            email: 'vaishali@gmail.com',
            mobile: '+91 9542683857',
            product: 'laptop',
            Amount: '50234',
            Date: '12 jan 2023',
            status: 'pending'
        },
        {
            orderid: '#111',
            customername: 'Vaishali',
            email: 'vaishali@gmail.com',
            mobile: '+91 9542683857',
            product: 'laptop',
            Amount: '50234',
            Date: '12 jan 2023',
            status: 'pending'
        },
        {
            orderid: '#111',
            customername: 'Vaishali',
            email: 'vaishali@gmail.com',
            mobile: '+91 9542683857',
            product: 'laptop',
            Amount: '50234',
            Date: '12 jan 2023',
            status: 'pending'
        },
        {
            orderid: '#111',
            customername: 'Vaishali',
            email: 'vaishali@gmail.com',
            mobile: '+91 9542683857',
            product: 'laptop',
            Amount: '50234',
            Date: '12 jan 2023',
            status: 'pending'
        },
        {
            orderid: '#111',
            customername: 'Vaishali',
            email: 'vaishali@gmail.com',
            mobile: '+91 9542683857',
            product: 'laptop',
            Amount: '50234',
            Date: '12 jan 2023',
            status: 'pending'
        },

        {
            orderid: '#111',
            customername: 'Vaishali',
            email: 'vaishali@gmail.com',
            mobile: '+91 9542683857',
            product: 'laptop',
            Amount: '50234',
            Date: '12 jan 2023',
            status: 'pending'
        },
    ])
    return (
        <Layouts>
            <div>
                <h1 className='text-xl font-semibold'>Orders</h1>
            </div>
            <div className='mt-6 '>
                <table className=' w-full'>
                    <thead>
                        <tr className=' bg-rose-600 text-white'>
                            <th className='py-4'>Order Id</th>
                            <th>Customer's Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Product</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            order.map((item, index) => (
                                < tr className='text-center' key={index}
                                    style={{
                                        background: (index + 1) % 2 === 0 ? '#f1f5f9' : 'white'
                                    }

                                    }>
                                    <td className='py-4'>{item.orderid}</td>
                                    <td className='captilize'>{item.customername}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td className='captilize'>{item.product}</td>
                                    <td>₹{item.Amount.toLocaleString()}</td>
                                    <td>{item.Date}</td>
                                    <td className='captilize'>
                                        <select className='border p-2 border-gray-200'>
                                            <option value='Pending'>Pending</option>
                                            <option value='Processing'>Processing</option>
                                            <option value='Dispatched'>Dispatched</option>
                                            <option value='Returned'>Returned</option>
                                        </select></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Layouts >
    )
}

export default Orders