import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const OrderTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);
  const [error, setError] = useState('');

  const handleTrackOrder = async () => {
    if (!trackingNumber) {
      setError('Please enter a valid tracking number.');
      return;
    }
    
    // Example: Fetch order tracking info from an API
    try {
      const response = await fetch(`/api/track-order/${trackingNumber}`);
      if (!response.ok) {
        throw new Error('Tracking information not found.');
      }
      const data = await response.json();
      setOrderStatus(data);
      setError(''); // Clear any previous errors
    } catch (error) {
      setError('There was an error tracking your order. Please try again.');
      setOrderStatus(null);
    }
  };

  return (
    <>
    <Header/>
    <div className="p-6 bg-blue-600 shadow-md rounded-md my-20 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Track Your Order</h2>
      
      {/* Input Field for Tracking Number */}
      <div className="mb-4">
        <label className="block text-gray-700">Tracking Number</label>
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Enter tracking number"
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>

      {/* Track Order Button */}
      <button
        onClick={handleTrackOrder}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Track Order
      </button>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Display Order Status */}
      {orderStatus && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-bold">Order Status</h3>
          <p>Status: {orderStatus.status}</p>
          <p>Location: {orderStatus.location}</p>
          <p>Estimated Delivery: {orderStatus.estimatedDelivery}</p>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default OrderTracking;
