import React from "react"
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3"
import { useNavigate } from "react-router"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function Checkout(props) {
  const settings = {
    key: "pk_test_c7671e45e609036509ddac69778a6a518efdedd9", // Replace with your public key
    email: "user@example.com",
    currency: "NGN",
    payment_options: "card",
    onClose: function () {},
    callback: function (response) {
      let message = "Payment complete! Reference: " + response.reference
      clearCart()
      navigate("/")
    },
  }

  Object.assign(settings, { amount: props.total * 740 })

  function payWithPaystack() {
    let handler = PaystackPop.setup(settings)

    handler.openIframe()
  }
  const { clearCart } = useContext(CartContext)
  const navigate = useNavigate()

  const config = {
    public_key: "FLWPUBK_TEST-04ceb3077f13c087c497b3380a9494e1-X",
    tx_ref: Date.now(),
    amount: props.total,
    currency: "$",
    payment_options: "card",
    customer: {
      email: "user@gmail.com",
      phone_number: "070******",
      name: "john doe",
    },
    customizations: {
      title: "my Payment Title",
      description: `Payment for cart items on ${window.location.hostname}`,
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  }

  const handleFlutterPayment = useFlutterwave(config)

  return (
    <div className="App">
       <button
        onClick={() => payWithPaystack()}
        className={`text-gray-900 border-2 p-4 button-gradient rounded-md bg-gradient-to-r from-zinc-400 to-blue-400 font-bold
         ${props.total === 0 ? "cursor-not-allowed" : ""}`}
        disabled={props.total === 0}
      >
        Pay with PayStack
      </button>
      <br />
      <br />
    
      <button
        className={`text-emerald-500 border-2 p-4 button-gradient rounded-md bg-gradient-to-r from-yellow-400 to-zinc-800 font-black ${
          props.total === 0 ? "cursor-not-allowed" : ""
        }`}
        disabled={props.total === 0}
        onClick={() => {
          handleFlutterPayment({
            callback: response => {
              console.log(response)
              closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {
              navigate("/")
              clearCart()
            },
          })
          navigate("/")
          clearCart()
        }}
      >
        Pay with flutterwave
      </button>
      <div className="mt-7">
        <h1 className="text-xl font-semibold capitalize">
          Use these for payment:{" "}
        </h1>
        <br />
        <p>
          Card Number:{" "}
          <span className="text-emerald-600 font-bold">5531886652142950</span>{" "}
        </p>
        <p>
          CVV: <span className="text-emerald-600 font-bold">564</span>{" "}
        </p>
        <p>
          {" "}
          Expiry Date: <span className="text-emerald-600 font-bold">
            09/32
          </span>{" "}
        </p>
        <p>
          OTP: <span className="text-emerald-600 font-bold">123456</span>{" "}
        </p>
      </div>
    </div>
  )
}
