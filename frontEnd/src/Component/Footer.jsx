import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white sm:py-10 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pt-4">
        
        <div>
          <h3 className="text-lg font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2 ">
          <Link to="/FAQ"> <li className="hover:text-blue-400 cursor-pointer">Help & FAQs</li></Link> 
            <li className="hover:text-blue-400 cursor-pointer">Shipping & Delivery</li>
            <li className="hover:text-blue-400 cursor-pointer">Returns & Exchanges</li>
            <li className="hover:text-blue-400 cursor-pointer">Order Tracking</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">Shop All Products</li>
            <li className="hover:text-blue-400 cursor-pointer">Special Offers</li>
            <li className="hover:text-blue-400 cursor-pointer">Gift Cards</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
          <p className="mb-4">Sign up for our newsletter to receive updates on new products and exclusive offers:</p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Subscribe
            </button>
          </form>
          <div className="mt-6 flex space-x-4">
            <i className="fa-brands fa-facebook text-blue-600 hover:text-blue-400"></i>
            <i className="fa-brands fa-twitter text-blue-600 hover:text-blue-400"></i>
            <i className="fa-brands fa-instagram text-blue-600 hover:text-blue-400"></i>
            <i className="fa-brands fa-linkedin text-blue-600 hover:text-blue-400"></i>
            <i className="fa-brands fa-whatsapp text-blue-600 hover:text-blue-400"></i>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500">
        <p>© 2024 Your E-Commerce Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
