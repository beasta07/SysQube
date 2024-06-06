import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import Fade from 'react-reveal/Fade';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CartOverview = ({ cartItems, subtotal, onRemove, onNext, isOpen }) => {
  return (
    <Fade right when={isOpen}>
      <div className="fixed inset-0 flex justify-center sm:px-0 px-5 items-center">
        <div className="bg-white p-8 sm:rounded-lg sm:shadow-md w-[90%] sm:w-full">
          <h2 className="text-4xl font-semibold mb-4">Cart Overview</h2>
          <div className='flex justify-between text-gray-400 text-[0.75rem] py-8 font-semibold'>
            <p>PRODUCT</p>
            <p className='sm:ml-[10rem]'>PRICE</p>
            <p>QUANTITY</p>
            <p className='sm:mr-[5rem]'>TOTAL</p>
          </div>
          <hr className='text-gray-400'/>
          <ul>
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b py-4">
                <li className="flex items-center justify-between sm:gap-[15rem] gap-20 mr-[5rem] flex-grow">
                  <div className='sm:flex items-center'>
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                    <h3 className="sm:text-lg text-sm sm:w-[8rem] w-[5rem]">{item.name}</h3>
                  </div>
                  <p className="text-gray-600 font-semibold">${item.price}</p>
                  <p className="text-gray-600 font-semibold">{item.quantity}</p>
                  <p className="text-gray-600 font-semibold">${item.price * item.quantity}</p>
                </li>
              </div>
            ))}
          </ul>
          <div className="flex justify-between mt-8">
            <div>
              <h3 className="text-lg font-semibold">Subtotal:</h3>
              <p className="text-gray-600 font-semibold">${subtotal}</p>
            </div>
            <button onClick={onNext} 
              className="bg-black text-white sm:px-6 px-2 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              Proceed to Shipping
            </button>
            <Link to='/'>
              <button  className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300">Back to Product</button>
            </Link>
          </div>
          <div className="mt-4">
            <button onClick={onNext} className="text-red-500 font-semibold flex items-center">
              <RiDeleteBin5Line className="mr-2" /> Delete Item
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default CartOverview;
