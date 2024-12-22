import React from 'react';

const PayUserAButton = () => {
  const redirectToUPI = () => {
    // Define UPI deep link parameters
    const upiID = "8708549745@airtel"; // User A's UPI ID
    const payeeName = "Sambhav"; // User A's name
    const amount = "1.00"; // Amount to be paid
    const transactionNote = "Payment for service"; // Optional note

    // Create UPI deep link
    const upiLink = `upi://pay?pa=${encodeURIComponent(upiID)}&pn=${encodeURIComponent(payeeName)}&am=${amount}&tn=${encodeURIComponent(transactionNote)}`;

    // Redirect to UPI deep link
    window.location.href = upiLink;
  };

  return (
    <button onClick={redirectToUPI}>
      Pay User A
    </button>
  );
};

export default PayUserAButton;
