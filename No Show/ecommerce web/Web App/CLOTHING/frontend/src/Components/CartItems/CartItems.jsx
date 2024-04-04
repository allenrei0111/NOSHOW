import React, { useContext, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";

//card example: Visa Debit Card	4701322211111234	12/2026	837 32075
const CartItems = () => {
  const { products, cartItems, removeFromCart, getTotalCartAmount, selectedSize } = useContext(ShopContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    country: "",
    address: "",

    email: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    setError(null);

    if (!stripe || !elements) {
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (error) {
        setError(error.message);
        setProcessing(false);
        setPaymentError(true);
        return;
      }

      const response = await fetch("/api/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          payment_method: paymentMethod.id,
          shippingInfo
        }),
      });

      if (!response.ok) {
        throw new Error("Payment Successful! Thank you!");
      }

      setPaymentSuccess(true);
    } catch (error) {
      setError(error.message);
      setProcessing(false);
      setPaymentError(true);
    }
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Sizes</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img className="cartitems-product-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <p>{selectedSize}</p> 
                <button className="cartitems-quatity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <button className="cartitems-remove" onClick={() => removeFromCart(e.id)}>X</button>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="cartitems-shipping-info">
        <h2>Shipping Address</h2>
        <div className="cartitems-input-container">
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            value={shippingInfo.firstName}
            onChange={handleShippingChange} 
          />
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            value={shippingInfo.lastName}
            onChange={handleShippingChange} 
          />
          <input 
            type="text" 
            name="country" 
            placeholder="Country" 
            value={shippingInfo.country}
            onChange={handleShippingChange} 
          />
          <input 
            type="text" 
            name="address" 
            placeholder="Address" 
            value={shippingInfo.address}
            onChange={handleShippingChange} 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={shippingInfo.email}
            onChange={handleShippingChange} 
          />
        </div>
      </div>
      <h2 className="payment-title">Payment</h2>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe || processing}>
          {processing ? "Processing..." : "Pay Now"}
        </button>
      </form>
      {error && <div>{error}</div>}
      
      {/* Payment Success Popup */}
      {paymentSuccess && (
        <div className="payment-popup">
          <span className="payment-popup-close" onClick={() => setPaymentSuccess(false)}>&times;</span>
          <div className="payment-success">Payment successful!</div>
        </div>
      )}

      {/* Payment Error Popup */}
      {paymentError && (
        <div className="payment-popup">
          <span className="payment-popup-close" onClick={() => setPaymentError(false)}>&times;</span>
          <div className="payment-error">{error}</div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
