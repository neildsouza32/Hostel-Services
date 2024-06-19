import React, { useState } from "react";
import "../styles/FeePayment.css";
import { Link } from "react-router-dom";
function FeePayment() {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [months, setMonths] = useState("");
  const [feeMonth, setFeeMonth] = useState("January"); // Default to January
  const [totalAmount, setTotalAmount] = useState("");

  const calculateTotal = () => {
    // Define fee rates per month for different months (adjust as needed)
    const feeRates = {
      January: 1000,
      February: 1000,
      March: 1000,
      April: 1000,
      May: 1000,
      June: 1000,
      July: 1000,
      August: 1000,
      September: 1000,
      October: 1000,
      November: 1000,
      December: 1000,
      // Add more months and rates as needed
    };

    const feePerMonth = feeRates[feeMonth];
    if (!feePerMonth) {
      console.error("Invalid month selected.");
      return;
    }

    const total = months * feePerMonth;
    setTotalAmount(total);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can perform actions like sending the form data to a server here
    // For demonstration purposes, we'll just log the data
    console.log("Submitted Data:");
    console.log("Name:", name);
    console.log("Roll No:", rollNo);
    console.log("Address:", address);
    console.log("Contact:", contact);
    console.log("Email:", email);
    console.log("Months Stay:", months);
    console.log("Fee Month:", feeMonth);
    console.log("Total Amount:", totalAmount);
  

    
  };

  return (
    <div className="fee-payment">
      <h1>Fee Payment</h1>
      <form id="fee-payment-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          placeholder="Enter full name..."
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="rollNo">Roll No:</label>
        <input
          name="rollNo"
          placeholder="Enter roll number..."
          type="text"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          name="address"
          placeholder="Enter address..."
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <label htmlFor="contact">Contact:</label>
        <input
          name="contact"
          placeholder="Enter contact number..."
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          name="email"
          placeholder="Enter email..."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="months">No. of Months Stay:</label>
        <input
          name="months"
          placeholder="Enter number of months..."
          type="number"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          required
        />

        <label htmlFor="feeMonth">Fee for Month:</label>
        <select
          name="feeMonth"
          value={feeMonth}
          onChange={(e) => setFeeMonth(e.target.value)}
          required
        >
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>

          {/* Add more months as needed */}
        </select>

        <button type="button" onClick={calculateTotal}>
          Calculate Total
        </button>

        <label htmlFor="totalAmount">Total Amount:</label>
        <input
          name="totalAmount"
          type="text"
          value={totalAmount}
          readOnly
        />
        <Link to="/payment">
        <button type="submit">Pay Now</button>
        </Link>
      </form>
    </div>
  );
}

export default FeePayment;
