// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Function to close the menu when a link is clicked
//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <div className="min-h-20 bg-gradient-to-r from-blue-50 to-gray-100 p-6">
//       <nav className="flex justify-between items-center py-4">
//         <div className="flex items-center">
//           <h1 className="text-2xl font-bold text-blue-800">Grapeslab</h1>
//         </div>
//         <div className="hidden sm:flex space-x-6 text-blue-800 font-semibold">
//           <ul className="flex space-x-6">
//             <Link to="/" onClick={closeMenu}>
//               <li className="hover:underline cursor-pointer">Home</li>
//             </Link>
//             <Link to="/shopAll" onClick={closeMenu}>
//               <li className="hover:underline cursor-pointer">Products</li>
//             </Link>
//             <Link to="/OrderTracking" onClick={closeMenu}>
//               <li className="hover:underline cursor-pointer">Order Tracking</li>
//             </Link>
//             <Link to="/FAQ" onClick={closeMenu}>
//               <li className="hover:underline cursor-pointer">Help & FAQs</li>
//             </Link>
//           </ul>
//         </div>
//         <i className="fa-solid fa-bars text-blue-800 sm:hidden cursor-pointer" onClick={toggleMenu}></i>
//         <div className="flex items-center space-x-4 mt-4 sm:mt-0">
//           <i className="fa-solid fa-cart-shopping text-xl text-blue-600"></i>
//           <Link to="/SignIn">
//             <button className="border-lime-400 border-2 rounded-lg px-6 py-2">Sign in</button>
//           </Link>
//           <Link to="/LogIn">
//             <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Log In</button>
//           </Link>
//         </div>
//       </nav>

//       {/* Responsive Menu */}
//       {isMenuOpen && (
//         <div className="sm:hidden bg-white shadow-lg rounded-lg">
//           <ul className="flex flex-col space-y-2 p-4">
//             <Link to="/" onClick={closeMenu}>
//               <li className="hover:underline cursor-pointer">Home</li>
//             </Link>
//             <Link to="/shopAll" onClick={closeMenu}>
//               <li className="hover:underline cursor-pointer">Products</li>
//             </Link>
//             <Link to="/OrderTracking" onClick={closeMenu}>
//               <li className="hover:underline cursor-pointer">Order Tracking</li>
//             </Link>
//             <Link to="/FAQ" onClick={closeMenu}>
//               <li className="hover:underline cursor-pointer">Help & FAQs</li>
//             </Link>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-20 bg-gradient-to-r from-blue-50 to-gray-100 p-6">
      <nav className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold text-blue-800">Grapeslab</h1>
          </Link>
        </div>

        {/* Responsive Menu */}
        <ul
          className={`md:flex md:items-center gap-8 absolute md:static md:opacity-100 text-blue-800  transition-all duration-300 ${
            isMenuOpen ? "opacity-100 top-16" : "opacity-0 top-[-400px]"
          } left-0 w-full md:w-auto`}
        >
          <Link to="/" onClick={closeMenu}>
            <li className="py-2 md:py-0 md:px-0 px-6 hover:underline   cursor-pointer">Home</li>
          </Link>
          <Link to="/shopAll" onClick={closeMenu}>
            <li className="py-2 md:py-0 md:px-0 px-6 hover:underline cursor-pointer">Products</li>
          </Link>
          <Link to="/OrderTracking" onClick={closeMenu}>
            <li className="py-2 md:py-0 md:px-0 px-6 hover:underline cursor-pointer">Order Tracking</li>
          </Link>
          <Link to="/FAQ" onClick={closeMenu}>
            <li className="py-2 md:py-0 md:px-0 px-6 hover:underline cursor-pointer">Help & FAQs</li>
          </Link>
        </ul>

        {/* Hamburger Icon */}
        <i className="fa-solid fa-bars text-3xl cursor-pointer mx-2 md:hidden" onClick={toggleMenu}></i>

        {/* Buttons */}
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <i className="fa-solid fa-cart-shopping text-xl text-blue-600"></i>
          <Link to="/SignIn">
            <button className="border-lime-400 border-2 rounded-lg px-6 py-2">Sign in</button>
          </Link>
          <Link to="/LogIn">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Log In</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
