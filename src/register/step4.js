// Step4.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Step4 = ({ formData, setFormData, nextStep, prevStep }) => {
  const history = useHistory();

  const handlePrevious = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;  
    }

    try {
      const response = await fetch("http://localhost:5000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration is successful
        console.log("Registration successful.");
        alert("Registration successful. You can now login.");
        // Redirect to the login page
        history.push("/");
      } else {
        // Registration failed
        console.error("Registration failed.");
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred while registering:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="auth-form-container">
      <div>
        <h2>Step 4: Set Username & Password</h2>
        <label htmlFor="username">Username</label>
        <input
          value={formData.username}
          name="username"
          onChange={handleInputChange}
          type="text"
          id="username"
          placeholder="Username"
        />
        <label htmlFor="password">Password</label>
        <input
          value={formData.password}
          name="password"
          onChange={handleInputChange}
          type="password"
          id="password"
          placeholder="Password"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          value={formData.confirmPassword}
          name="confirmPassword"
          onChange={handleInputChange}
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
        />
        <div className="button-container">
          <button onClick={handlePrevious} className="previous-button">
            <FaArrowLeft /> Previous
          </button>
          <Link to="/regm">
          <button onClick={handleRegistration}>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step4;
