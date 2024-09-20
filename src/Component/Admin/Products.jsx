import React, { useState } from 'react';
import Layouts from '../Layouts';
import imageA from '../../assets/images/a.jpeg';
import imageE from '../../assets/images/e.jpeg';
import imageF from '../../assets/images/f.jpeg';
import imageG from '../../assets/images/g.jpeg';
import imageH from '../../assets/images/h.jpeg';
import imageI from '../../assets/images/i.jpeg';
import imageJ from '../../assets/images/j.jpeg';
import imageK from '../../assets/images/k.jpeg';
import imageV from '../../assets/images/v.jpeg';
import imageQ from '../../assets/images/q.jpeg';
import imageX from '../../assets/images/x.jpeg';
import imageY from '../../assets/images/y.jpeg';
import imageZ from '../../assets/images/z.jpeg';


const Products = () => {
    const [product, setProduct] = useState([
        {
            title: 'men`s Shirt Blue',
            price: 4200,
            discount: 20,
            description: 'this is the best shirt availabe online in market',
            image: imageA,
        },
      
        
        {
            title: 'men`s Shirt Blue',
            price: 4200,
            discount: 20,
            description: 'this is the best shirt availabe online in market',
            image: imageE,
        },
        {
            title: 'men`s Shirt Blue',
            price: 4200,
            discount: 20,
            description: 'this is the best shirt availabe online in market',
            image: imageF,
        },
        {
            title: 'men`s Shirt Blue',
            price: 4200,
            discount: 20,
            description: 'this is the best shirt availabe online in market',
            image: imageG,
        },
        {
            title: 'men`s Shirt Blue',
            price: 4200,
            discount: 20,
            description: 'this is the best shirt availabe online in market',
            image: imageH,
        },
        {
            title: 'men`s Shirt Blue',
            price: 4200,
            discount: 20,
            description: 'this is the best shirt availabe online in market',
            image: imageI,
        },
        {
            title: 'men`s Shirt Blue',
            price: 4200,
            discount: 20,
            description: 'this is the best shirt availabe online in market',
            image: imageJ,
        },
        {
            title: 'men`s Shirt Blue',
            price: 4200,
            discount: 20,
            description: 'this is the best shirt availabe online in market',
            image: imageK,
        },
        {
            title: 'men`s Shirt Blue',
            price: 4200,
            discount: 20,
            description: 'this is the best shirt availabe online in market',
            image: imageX,
        },

        {
            title: 'men`s Shirt Blue',
            price: 4200,
            discount: 20,
            description: 'this is the best shirt availabe online in market',
            image: imageY,
        },
        {
            title: 'men`s Shirt Blue',
            price: 4200,
            discount: 20,
            description: 'this is the best shirt availabe online in market',
            image: imageV,
        },
        {
            title: 'men`s Shirt Blue',
            price: 4200,
            discount: 20,
            description: 'this is the best shirt availabe online in market',
            image: imageZ,
        },
        {
            title: 'men`s Shirt Blue',
            price: 4200,
            discount: 20,
            description: 'this is the best shirt availabe online in market',
            image: imageQ,
        },




        // Add the rest of the products similarly
    ]);
    
    return (
        <Layouts>
            <div>
                <h1 className='text-xl font-semibold mb-4'>Products</h1>
                <div className='grid grid-cols-4 gap-8 '>
                    {
                        product.map((item,index)=>(
                            <div key={index} className='bg-white shadow-lg rounded-md'>
                                <img
                                src={item.image}
                                className='w-full h-48 object-cover rounded-t-md'
                                /> 
                                <div className='p-4'>
                                    <h1 className='text-md  capitalize font-semibold'>{item.title}</h1>
                                    <p className='text-gray-500'>{item.description.slice(0,39)}</p>
                                    <div className='flex gap-3 mt-1'>
                                        <p>₹{item.price-(item.price*item.discount)/100}</p>
                                        <del>₹{item.price}</del>
                                        <label className='text-gray-500'>({item.discount} % off)</label>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </Layouts>

    )
}

export default Products