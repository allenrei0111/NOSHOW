import React from "react";

const Notif = ({ showNotification, handleClose, cartItemCount, paymentNotification, notificationCount }) => {
  return (
    <div className={`notification ${showNotification ? "show" : ""}`}>
      <button onClick={handleClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"
          ></path>
        </svg>
      </button>
      <span className="cart-item-count">{cartItemCount}</span> {/* Display cart item count */}
      {paymentNotification && ( // Display payment notification if available
        <div className="payment-notification">
          Payment of ${paymentNotification.amount} successful!
        </div>
      )}
      {notificationCount > 0 && ( // Display general notification count if available
        <div className="general-notification">
          You have {notificationCount} new notifications
        </div>
      )}
    </div>
  );
};

export default Notif;
