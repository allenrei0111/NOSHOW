import React from "react";

const Notif = ({ showNotification, handleClose, cartItemCount, paymentNotification, notificationCount }) => {
  return (
    <div className={`notification ${showNotification ? "show" : ""}`}>
      <button onClick={handleClose}>
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
          ></path>
        </svg>
      </button>
      <span className="cart-item-count">{cartItemCount}</span> 
      {paymentNotification && (
        <div className="payment-notification">
          Payment of ${paymentNotification.amount} successful!
        </div>
      )}
      {notificationCount > 0 && ( 
        <div className="general-notification">
          You have {notificationCount} new notifications
        </div>
      )}
    </div>
  );
};

export default Notif;
