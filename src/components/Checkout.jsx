import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Checkout(props) {
  const { clearCart } = useContext(CartContext)
  const navigate = useNavigate()

  const config = {
    public_key: 'FLWPUBK_TEST-04ceb3077f13c087c497b3380a9494e1-X',
    tx_ref: Date.now(),
    amount: props.total * 745,
    currency: 'NGN',
    payment_options: 'card',
    customer: {
      email: 'user@gmail.com',
      phone_number: '070******',
      name: 'john doe',
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <button
        className={`text-emerald-500 border-2 p-4 button-gradient rounded-md bg-gradient-to-r from-yellow-400 to-green-400 font-black ${props.total === 0 ? 'cursor-not-allowed' : ''}`}
        disabled={props.total === 0}
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal() // this will close the modal programmatically

            },
            onClose: () => {
              navigate('/')
              clearCart()
            },
          });
          navigate('/')
          clearCart()
        }}
      >
        Pay with flutterwave
      </button>
      <div className='mt-7'>
        <h1 className='text-xl font-semibold capitalize'>Use these for payment: </h1><br />
        <p>Card Number: <span className='text-emerald-600 font-bold'>5531886652142950</span> </p>
        <p>CVV: <span className='text-emerald-600 font-bold'>564</span> </p>
        <p> Expiry Date: <span className='text-emerald-600 font-bold'>09/32</span> </p>
        <p>OTP: <span className='text-emerald-600 font-bold'>123456</span> </p>
      </div>
    </div>
  );
}