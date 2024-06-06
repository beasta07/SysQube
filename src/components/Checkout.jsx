import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CartOverview from './CartOverview';
import ShippingInformation from './ShippingInformation';
import PaymentInformation from './PaymentInformation';
import OrderSummary from './OrderSummary';
import ProgressBar from './ProgressBar';

const Checkout = () => {
  const location = useLocation();
  const selectedProduct = location.state.selectedProduct;

  const [step, setStep] = useState(1);
  const [cartItems, setCartItems] = useState([selectedProduct]);
  const [shippingInfo, setShippingInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 10; // example shipping cost
  const taxes = subtotal * 0.1; // example tax rate of 10%
  const total = subtotal + shipping + taxes;

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  const handleNext = (data) => {
    if (step === 2) {
      setShippingInfo(data);
    } else if (step === 3) {
      setPaymentInfo(data);
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleEdit = (section) => {
    if (section === 'cart') setStep(1);
    else if (section === 'shipping') setStep(2);
    else if (section === 'payment') setStep(3);
  };

  const handlePlaceOrder = () => {
    // Handle order placement
    alert('Order placed successfully!');
  };

  return (
    <div className="container mx-auto p-4">
      <ProgressBar step={step} />
      {step === 1 && (
        <CartOverview
          cartItems={cartItems}
          subtotal={subtotal}
          onRemove={handleRemove}
          onNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <ShippingInformation
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {step === 3 && (
        <PaymentInformation
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {step === 4 && (
        <OrderSummary
          cartItems={cartItems}
          subtotal={subtotal}
          shipping={shipping}
          taxes={taxes}
          total={total}
          shippingInfo={shippingInfo}
          paymentInfo={paymentInfo}
          onEdit={handleEdit}
          onPlaceOrder={handlePlaceOrder}
        />
      )}
    </div>
  );
};

export default Checkout;
