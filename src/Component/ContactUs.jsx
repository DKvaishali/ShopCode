import React, { useState } from 'react';
import Layout from './Layout';
import contact from '../assets/images/contact.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false); // State to track if message is sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log('Form submitted:', formData);
    
    // Simulate sending message
    setIsSent(true);

    // Reset the form after a delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSent(false); // Reset sent state after 3 seconds
    }, 3000);
  };

  return (
    <Layout>
      <div>
        <img src={contact} alt="contact" className='md:w-full object-cover md:h-60 bg-darkBlue' />
        <div className='md:min-h-screen flex items-center justify-center'>
          <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-md'>
            <h1 className='text-2xl font-bold text-darkBlue mb-6 text-center'>Contact Us</h1>
            
            {isSent && (
              <div className="mb-4 p-2 text-green-700 bg-green-200 rounded text-center">
                Message sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:outline-none p-2'
                  placeholder='Enter your name'
                />
              </div>
              <div>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:outline-none p-2'
                  placeholder='Enter your email'
                />
              </div>
              <div>
                <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:outline-none p-2'
                  placeholder='Enter your message'
                />
              </div>
              <button
                type="submit"
                className='w-full bg-customOrange text-white font-bold rounded-md py-2 hover:bg-darkBlue transition duration-300'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
