import React, { useState } from 'react';
import { GiAirplaneDeparture } from "react-icons/gi";
import Fade from 'react-reveal/Fade';

const ShippingInformation = ({ onBack, onNext }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and process form data
    onNext(formData);
  };

  return (
    <Fade right>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className='flex gap-8'>
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <GiAirplaneDeparture className='mt-2 text-[2rem]' />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required className="border-gray-300 border p-2 rounded-lg" />
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required className="border-gray-300 border p-2 rounded-lg" />
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required className="border-gray-300 border p-2 rounded-lg" />
            <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State/Province" required className="border-gray-300 border p-2 rounded-lg" />
            <input type="number" name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="Zip Code" required className="border-gray-300 border p-2 rounded-lg" />
            <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" required className="border-gray-300 border p-2 rounded-lg" />
            <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required className="border-gray-300 border p-2 rounded-lg" />
          </div>
          <div className="flex justify-between mt-8">
            <button onClick={onBack} className="bg-gray-200 text-gray-700 sm:px-6 px-2 py-3 rounded-lg hover:bg-gray-300 transition duration-300">Back to Cart</button>
            <button type="submit" className="bg-black text-white sm:px-6 px-2 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Proceed to Payment</button>
          </div>
        </form>
      </div>
    </Fade>
  );
};

export default ShippingInformation;
