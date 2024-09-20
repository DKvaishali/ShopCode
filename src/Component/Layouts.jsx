import { useState } from 'react';
import profile from '../assets/images/profile.jpg';
import { Link, useLocation } from 'react-router-dom';

const Layouts = ({ children }) => {
    const [size, setsize] = useState(280)
    const [Mobilesize, setMobilesize] = useState(0)
    const [AccountMenu, setAccountMenu] = useState(false)
    const location = useLocation()
    const menus = [
        {
            label: 'Dashboard',
            icon: <i className='ri-dashboard-3-line mr-2'></i>,
            link: '/admin/dashboard',
        },
        {
            label: 'Customers',
            icon: <i className='ri-user-line mr-2'></i>,
            link: '/admin/customers',
        },
        {
            label: 'Products',
            icon: <i className='ri-shopping-cart-line mr-2'></i>,
            link: '/admin/products',
        },
        {
            label: 'Orders',
            icon: <i className='ri-shape-line mr-2'></i>,
            link: '/admin/Orders',
        },
        {
            label: 'Payment',
            icon: <i className='ri-money-dollar-circle-line mr-2'></i>,
            link: '/admin/payment',
        },
        {
            label: 'Setting',
            icon: <i className='ri-settings-3-line mr-2'></i>,
            link: '/admin/setting',
        },
    ]

    return (
        <>
            {/**Desktop view */}
            <div className="md:block hidden">
                <aside className=' bg-indigo-500 fixed top-0 left-0 h-full overflow-hidden'
                    style={{
                        width: size,
                        transition: '0.3s'
                    }}>
                    <div className='flex flex-col'>
                        {
                            menus.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.link}
                                    className='px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white'
                                    style={{
                                        background: (location.pathname === item.link) ? '#E11D48' : 'transparent'
                                    }}
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            ))
                        }

                    </div>



                </aside>
                <section className='bg-gray-200 h-screen'
                    style={{
                        marginLeft: size,
                        transition: '0.3s'
                    }}>
                    <nav className='bg-white p-4 shadow flex justify-between items-center sticky top-0 left-0'>
                        <div className='flex gap-4 items-center'>
                            <button
                                className='bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8'
                                onClick={() => setsize(size === 280 ? 0 : 280)}
                            >
                                <i className='ri-menu-2-line text-xl'></i>
                            </button>
                            <h1 className='text-md font-semibold'>ShopCode</h1>
                        </div>
                        <div>
                            <button className='relative'>
                                <img src={profile}
                                    alt='profile'
                                    className='w-10 h-10 rounded-full'
                                    onClick={() => setAccountMenu(!AccountMenu)} />

                                {AccountMenu &&
                                    < div className='absolute top-[66px] right-0 bg-white w-[200px] p-6 shadow-lg'>
                                        <div>
                                            <h1 className='text-lg font-semibold'>Er Vaishali K.</h1>
                                            <p className='text-gray-500'>vaishali@gmail.com</p>
                                            <div className='h-px bg-gray-200 my-4' />
                                            <button>
                                                <i className='ri-logout-circle-r-line mr-2'></i>
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                }
                            </button>
                        </div>
                    </nav >
                    <div className='p-3'>
                        {children}
                    </div>
                </section >
            </div >
            {/**Mobile view */}
            <div className='md:hidden'>
                <aside className=' bg-indigo-500 fixed top-0 left-0 h-full z-50 overflow-hidden'
                    style={{
                        width: Mobilesize,
                        transition: '0.3s'
                    }}>
                    <div className='flex flex-col'>
                        <button className='text-white text-right px-4 py-3'
                            onClick={() => setMobilesize(Mobilesize === 0 ? 280 : 0)}>
                            <i className='ri-close-line text-xl' ></i>
                        </button>
                        {
                            menus.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.link}
                                    className='px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white'
                                    style={{
                                        background: (location.pathname === item.link) ? '#E11D48' : 'transparent'
                                    }}
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            ))
                        }

                    </div>



                </aside>
                <section className='bg-gray-200 h-screen'
                >
                    <nav className='bg-white p-4 shadow flex justify-between items-center sticky top-0 left-0'>
                        <div className='flex gap-4 items-center'>
                            <button
                                className='bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8'
                                onClick={() => setMobilesize(Mobilesize === 0 ? 280 : 0)}
                            >
                                <i className='ri-menu-2-line text-xl'></i>
                            </button>
                            <h1 className='text-md font-semibold'>ShopCode</h1>
                        </div>
                        <div>
                            <button className='relative'>
                                <img src={profile}
                                    alt='profile'
                                    className='w-10 h-10 rounded-full'
                                    onClick={() => setAccountMenu(!AccountMenu)} />

                                {AccountMenu &&
                                    < div className='absolute top-[66px] right-0 bg-white w-[200px] p-6 shadow-lg'>
                                        <div>
                                            <h1 className='text-lg font-semibold'>Er Vaishali K.</h1>
                                            <p className='text-gray-500'>vaishali@gmail.com</p>
                                            <div className='h-px bg-gray-200 my-4' />
                                            <button>
                                                <i className='ri-logout-circle-r-line mr-2'></i>
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                }
                            </button>
                        </div>
                    </nav >
                    <div className='p-3'>
                        {children}
                    </div>
                </section >
            </div >
        </>
    )
}

export default Layouts