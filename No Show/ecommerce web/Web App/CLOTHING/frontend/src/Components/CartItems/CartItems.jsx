import React, { useContext, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import "./CartItems.css";
import { Link } from 'react-router-dom';
import { ShopContext } from "../../Context/ShopContext";
import 'animate.css';
import  Notif  from "../Notif/Notif";

const CartItems = () => {
  const { products, cartItems, removeFromCart, getTotalCartAmount, selectedSize } = useContext(ShopContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState(false);
  const [receiptOpen, setReceiptOpen] = useState(false); // State to manage receipt popup
  

  
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    email: ""
  });
  const [promoCode, setPromoCode] = useState("");
  const [promoCodeApplied, setPromoCodeApplied] = useState(false);
  const [totalSaved, setTotalSaved] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    setError(null);

    if (!stripe || !elements) {
      return;
    }

    try {
      const { error } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (error) {
        setError(error.message);
        setProcessing(false);
        setPaymentError(true);
        return;
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

  const handlePromoCodeSubmit = async () => {
    if (promoCode === "NOSHOW30") {
      setTotalSaved(getTotalCartAmount() * 0.3);
    } else if (promoCode === "LANDERSTYLEZ") {
      setTotalSaved(getTotalCartAmount() * 0.5);
    } else if (promoCode === "SAVE10") {
      setTotalSaved(getTotalCartAmount() * 0.1);
    } else {
      setError("Invalid promo code");
    }
    setPromoCodeApplied(true);
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleReceiptClose = () => {
    setReceiptOpen(false);
  };

  const handleReceiptOpen = () => {
    setReceiptOpen(true);
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
          <h1> Cart Totals </h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee </p>
              <p> "Free Shipping"</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount() - totalSaved}</h3>
              {promoCodeApplied && <p>Total saved: ${totalSaved.toFixed(2)}</p>}
            </div>
          </div>
        </div>
        <div className="cartitems-promocode">
          <p className="animate__animated animate__shakeY">ENTER PROMO CODE BELOW:</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Enter promo code" value={promoCode} onChange={handlePromoCodeChange} />
            <button onClick={handlePromoCodeSubmit}>Apply</button>
          </div>
          {promoCodeApplied && <p className="promo-applied-message">Promo code applied successfully!</p>}
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
            className="shipping-input"
          />
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            value={shippingInfo.lastName}
            onChange={handleShippingChange} 
            className="shipping-input"
          />
          <input 
            type="text" 
            name="country" 
            placeholder="Country" 
            value={shippingInfo.country}
            onChange={handleShippingChange} 
            className="shipping-input"
          />
          <input 
            type="text" 
            name="address" 
            placeholder="Address" 
            value={shippingInfo.address}
            onChange={handleShippingChange} 
            className="shipping-input"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={shippingInfo.email}
            onChange={handleShippingChange} 
            className="shipping-input"
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
      {paymentError && (
        <div className="payment-popup">
          <span className="payment-popup-close" onClick={() => setPaymentError(false)}>&times;</span>
          <div className="payment-error">{error}</div>
        </div>
      )}
      {paymentSuccess && (
        <div className="payment-popup">
          <span className="payment-popup-close" onClick={handleReceiptClose}>&times;</span>
          <div className="payment-success">Payment successful!</div>
          <div className="receipt-content">
            
            <button><Link to='/receipt' style={{ textDecoration: 'none' }}>Reciept</Link></button>

            
          </div>
        </div>
      )}
      <Notif showNotification={paymentSuccess} handleClose={handleReceiptClose} />
    </div>
  );
};

export default CartItems;
