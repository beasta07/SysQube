import React from 'react';
import Fade from 'react-reveal/Fade';

const OrderSummary = ({ cartItems, subtotal, shipping, taxes, total, shippingInfo, paymentInfo, onEdit, onPlaceOrder }) => {
  return (
    <Fade right>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-8 text-center">Order Summary</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Order Details</h3>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center mb-4">
              <img src={item.image} alt={item.name} className="h-16 w-16 mr-4 rounded-lg" />
              <div>
                <p className="text-gray-800">{item.name}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between text-gray-800">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-800">
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-800">
              <span>Taxes:</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-2">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div className="mb-8 flex justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
            <p className="text-gray-800">{shippingInfo.fullName}</p>
            <p className="text-gray-800">{shippingInfo.address}</p>
            <p className="text-gray-800">{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</p>
            <p className="text-gray-800">{shippingInfo.country}</p>
            <p className="text-gray-800">{shippingInfo.phoneNumber}</p>
            <button 
              onClick={() => onEdit('shipping')} 
              className="mt-4 text-blue-500 hover:underline"
            >
              Edit Shipping
            </button>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
            <div className="flex items-center mb-2">
              <img src="/public/images/visa.png" alt="Visa" className="h-6 w-auto mr-2" />
              <p className="text-gray-800 ml-2">Card ending in {paymentInfo.cardNumber.slice(-4)}</p>
            </div>
            <div className="flex items-center mb-2">
              <img src="/public/images/mastercard.png" alt="MasterCard" className="h-6 w-auto mr-2" />
              <p className="text-gray-800">Card ending in {paymentInfo.cardNumber.slice(-4)}</p>
            </div>
            <div className="flex items-center mb-2">
              <img src="/public/images/americanExpress.png" alt="American Express" className="h-6 w-auto mr-2" />
              <p className="text-gray-800">Card ending in {paymentInfo.cardNumber.slice(-4)}</p>
            </div>
            <button 
              onClick={() => onEdit('payment')} 
              className="mt-4 text-blue-500 hover:underline"
            >
              Edit Payment
            </button>
          </div>
        </div>
        
        <button 
          onClick={onPlaceOrder} 
          className="w-full bg-black text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Place Order
        </button>
      </div>
    </Fade>
  );
};

export default OrderSummary;
