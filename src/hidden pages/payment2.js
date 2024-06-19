// PaymentConfirmation.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../assets/qr.jpg";
import "../styles/payment2.css"

function PaymentConfirmation() {
  const [transactionId, setTransactionId] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Process the transaction ID (you can send it to the server if needed)

    // For demonstration purposes, navigate back to the payment page after 3 seconds
    setTimeout(() => {
      history.push("/");
    }, 3000);
  };

  return (
    <div>
      <h1>Payment Confirmation</h1>
      <img src="qr.jpg" alt="Payment Confirmation" />

      <form onSubmit={handleSubmit}>
        <label htmlFor="transactionId">Transaction ID:</label>
        <input
          type="text"
          name="transactionId"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PaymentConfirmation;
