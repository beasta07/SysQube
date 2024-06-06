import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

const PaymentInformation = ({ onBack, onNext }) => {
  const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
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
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Payment Information</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center mb-4">
            <img src="/public/images/visa.png" alt="Visa" className="w-15 h-10 mx-2" />
            <img src="/public/images/mastercard.png" alt="MasterCard" className="w-15 h-10 mx-2" />
            <img src="/public/images/americanExpress.png" alt="American Express" className="w-15 h-10 mx-2" />
          </div>
          <div>
            <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700">Cardholder Name</label>
            <input
              type="text"
              name="cardholderName"
              id="cardholderName"
              value={formData.cardholderName}
              onChange={handleChange}
              placeholder="Cardholder Name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
            <input
              type="number"
              name="cardNumber"
              id="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="Card Number"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">Expiration Date (MM/YY)</label>
              <input
                type="text"
                name="expirationDate"
                id="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                placeholder="MM/YY"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="number"
                name="cvv"
                id="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="CVV"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={onBack}
              className="bg-gray-500 text-white px-6 py-2 rounded-md shadow-sm hover:bg-gray-600 transition duration-300"
            >
              Back to Shipping
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-sm hover:bg-blue-600 transition duration-300"
            >
              Review Order
            </button>
          </div>
        </form>
      </div>
    </Fade>
  );
};

export default PaymentInformation;
