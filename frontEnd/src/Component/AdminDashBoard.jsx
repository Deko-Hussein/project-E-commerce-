import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen bg-blue-900 text-white w-64 p-4">
   <Link to="/"> <h2 className="text-2xl font-semibold mb-8">Admin Dashboard</h2></Link>  
      <ul className="space-y-4">
        <li className="hover:bg-blue-700 p-2 rounded">Dashboard</li>
        <li className="hover:bg-blue-700 p-2 rounded">Products</li>
        <li className="hover:bg-blue-700 p-2 rounded">Orders</li>
        <li className="hover:bg-blue-700 p-2 rounded">Customers</li>
        <li className="hover:bg-blue-700 p-2 rounded">Reports</li>
      </ul>
    </div>
  );
};

const TopBar = () => {
  return (
    <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-lg font-bold text-gray-800">Dashboard</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-200 rounded-lg p-2 focus:outline-none"
        />
        <button className="bg-blue-500 text-white py-2 px-4 ml-4 rounded-lg hover:bg-blue-700">
          Log Out
        </button>
      </div>
    </div>
  );
};

const DashboardContent = () => {
  return (
    <div className="p-6 bg-gray-100 flex-1">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Total Sales</h3>
          <p className="text-3xl font-bold text-blue-500">$25,300</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
          <p className="text-3xl font-bold text-blue-500">120</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Customers</h3>
          <p className="text-3xl font-bold text-blue-500">1,530</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
          <p className="text-3xl font-bold text-blue-500">$78,200</p>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">

      <Sidebar />

 
 
      <div className="flex-1 flex flex-col">
      
        <TopBar />

        
        <DashboardContent />
      </div>
    </div>
  );
};

export default AdminDashboard;
