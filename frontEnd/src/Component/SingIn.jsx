import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of Navigate
import Footer from './Footer';

function SingUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const navigate = useNavigate(); // Get the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Data:', formData);
    alert('Your message has been sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    navigate("/"); // Redirect to the home page
  };

  return (
    <>
      <section className="">
        <div className=" grid grid-cols-2 gap-16 p-16  bg-gradient-to-r from-blue-50 to-gray-100 m-auto">
        
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 mr-16 p-10 shadow-lg rounded-lg bg-blue-500 my-10 shadow-black bottom-40" id="form">
            <div className="form-control relative mb-2 pb-1">
              <label htmlFor="username" className="mb-1">Username</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="username w-full p-3 rounded-full border border-gray-200 focus:outline-none focus:border-gray-800" placeholder="name" id="username" required />
            </div>

            <div className="form-control relative mb-2 pb-1">
              <label htmlFor="email" className="mb-1">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="email w-full p-3 rounded-full border border-gray-200 focus:outline-none focus:border-gray-800" placeholder="email" id="email" required />
            </div>

            <div className="form-control relative mb-2 pb-1">
              <label htmlFor="message" className="mb-1">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} className="password w-full p-3 rounded-full border border-gray-200 focus:outline-none focus:border-gray-800" placeholder="Your message" id="message" required />
            </div>

            <button type="submit" className="btn w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-500">Send</button>
          </form>
        </div>   \
         <Footer/>

      </section>
    </>
  );
}

export default SingUp;
