import React, { useState } from 'react'
import Layout from './Layout';
import Assure from '../assets/images/assure.webp';
import imageA from '../assets/images/a.jpeg';
import imageE from '../assets/images/e.jpeg';
import imageF from '../assets/images/f.jpeg';
import imageG from '../assets/images/g.jpeg';
import imageH from '../assets/images/h.jpeg';
import imageI from '../assets/images/i.jpeg';
import imageJ from '../assets/images/j.jpeg';
import imageK from '../assets/images/k.jpeg';
import imageV from '../assets/images/v.jpeg';
import imageQ from '../assets/images/q.jpeg';
import imageX from '../assets/images/x.jpeg';
import imageY from '../assets/images/y.jpeg';
import imageZ from '../assets/images/z.jpeg';

const Products = () => {
  const [products, setproducts] = useState([
    {
      title: 'Men`s New Shirt Blue',
      price: 4200,
      discount: 20,
      description: 'Men Regular Fit Solid Spread Collar Formal Shirt',
      image: imageA,
    },
    {
      title: 'Men`s New Shirt Blue',
      price: 4200,
      discount: 20,
      description: 'Men Regular Fit Solid Spread Collar Formal Shirt',
      image: imageE,
    },
    {
      title: 'Men`s New Shirt Blue',
      price: 4200,
      discount: 20,
      description: 'Men Regular Fit Solid Spread Collar Formal Shirt',
      image: imageF,
    },
    {
      title: 'Men`s New Shirt Blue',
      price: 4200,
      discount: 20,
      description: 'Men Regular Fit Solid Spread Collar Formal Shirt',
      image: imageG,
    },
    {
      title: 'Jump Cuts',
      price: 4200,
      discount: 20,
      description: 'Men Regular Fit Solid Spread Collar Formal Shirt',
      image: imageH,
    },
    {
      title: 'Voroxy',
      price: 4200,
      discount: 20,
      description: 'Men Regular Fit Solid Spread Collar Formal Shirt',
      image: imageI,
    },
    {
      title: 'Bullmer',
      price: 4200,
      discount: 20,
      description: 'men regular fit solid spread collar formal shirt',
      image: imageJ,
    },
    {
      title: 'TRIPR',
      price: 4200,
      discount: 20,
      description: 'men regular fit solid spread collar formal shirt',
      image: imageK,
    },
    {
      title: 'N AND J',
      price: 4200,
      discount: 20,
      description: 'men regular fit solid spread collar formal shirt',
      image: imageV,
    },
    {
      title: 'METRONAUT',
      price: 4200,
      discount: 20,
      description: 'men regular fit solid spread collar formal shirt',
      image: imageQ,
    },
    {
      title: 'BLUE MARTIN',
      price: 4200,
      discount: 20,
      description: 'men regular fit solid spread collar formal shirt',
      image: imageX,
    },
    {
      title: 'ZALAF',
      price: 4200,
      discount: 20,
      description: 'men regular fit solid spread collar formal shirt',
      image: imageY,
    },
    {
      title: 'Men`s New Shirt Blue',
      price: 4200,
      discount: 20,
      description: 'Men Regular Fit Solid Spread Collar Formal Shirt',
      image: imageZ,
    },

  ])
  return (
    <div>
      <Layout>
<div className='md:p-16 p-8'>
          <h1 className='text-xl text-center font-bold'>Latest Products</h1>
          <p className='text-center text-gray-500 mx-auto md:w-7/12 mt-2 mb-16'>"Discover top-quality products at unbeatable prices. Shop the latest trends and essentials for a seamless and enjoyable shopping experience!"</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

            {products.map((product, index) => (
              <div key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={product.image}
                  alt={product.title}
 className="w-full h-48 object-cover transform transition duration-300 hover:scale-105"
                  // className="w-full h-48 object-cover" 
                  />
                <div className="p-4">
                  <h2 className="text-lg text-gray-500 font-semibold">{product.title}</h2>
                  <div className=' flex justify-between  items-center'>
                    <p className="text-gray-500 capitalize ">
                      {product.description.length > 20
                        ? `${product.description.slice(0, 20)}...`
                        : product.description}
                    </p>
                  <img src={Assure} alt="Assurelogo" className='w-24 h-15' />
                </div>
                <div className="flex space-x-2 items-center">
                  <label className="text-gray-800 text-lg font-bold">₹{product.price - (product.price * product.discount) / 100}</label>
                  <del className="text-gray-700 ">₹{product.price}</del>
                  <label className='text-green-600 font-semibold'>{product.discount}% off</label>

                </div>
                <button className="bg-customOrange text-white px-4 py-2 rounded-lg w-full mt-4  font-semiboldhover:text-white-500 hover:bg-darkBlue border">Add to cart</button>

              </div>
              </div>
            ))}


        </div>
    </div>






      </Layout ></div >
  )
}

export default Products