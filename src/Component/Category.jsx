import React from 'react';
import fashion from '../assets/images/fashion.png';

const categories = [
  {
    id: 1,
    name: "Men's Fashion",
    imageSrc: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Women's Fashion",
    imageSrc: fashion,
  },
  {
    id: 3,
    name: "Electronics",
    imageSrc: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    name: "Home & Kitchen",
    imageSrc: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    name: "Beauty & Personal Care",
    imageSrc: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    name: "Sports & Fitness",
    imageSrc: "https://via.placeholder.com/300x200",
  },
];

const Category = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Shop by Category</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
            >
              <img
                src={category.imageSrc}
                alt={category.name}
                className="w-full h-52 object-cover overflow-hidden transform transition duration-300 group-hover:scale-105"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold text-gray-800">
                  {category.name}
                </h2>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
