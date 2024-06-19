import React, { useState } from "react";
import "../styles/DayLeaveForm.css";
import { useHistory } from "react-router-dom";
function VacationLeave() {
  const initialFormData = {
    leaveDate: "",
    returnDate: "",
    purpose: "",
  }; 

  const [formData, setFormData] = useState({ ...initialFormData });
  const [status, setStatus] = useState(""); // To display "Not Approved" or "Approved"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const history = useHistory();
  const handleNext = (e) => {
    e.preventDefault();
    // Perform any form validation here if needed

    // Show an alert
    window.alert("Registration successful!");

    // Redirect to another page
    history.push("/menu"); // Replace with the actual URL you want to redirect to
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data to the backend for approval (you will implement this part)

    // For demo purposes, assume it's approved after 3 seconds (simulating backend approval)
    setTimeout(() => {
      setStatus("Approved");
    }, 3000);
  };

  return (
    <div className="vaca-leave-form">
      <div className="form-section">
        <h1>Vacation Leave Application</h1>
        <form onSubmit={handleSubmit}>
         
          <div className="form-input">
            <label>Date of Leaving:</label>
            <input
              type="date"
              name="leaveDate"
              value={formData.leaveDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-input">
            <label>Date of Return:</label>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-input">
            <label>Purpose:</label>
            <textarea
              name="purpose"
              value={formData.purpose1}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" onClick={handleNext}>Submit</button>
        </form>

        <p>Your leave application will be reviewed and processed.</p>
      </div>

      {/* <div className="side-section"> */}
        {/* Display previous form data and status here */}
        {/* <h2>Previous Form Data</h2>
        <p>Purpose: {formData.purpose}</p>
        <p>Date of Return: {formData.returnDate}</p>
        <h2>Status</h2>
        <p>{status || "Not Approved"}</p> */}
      {/* </div> */}
    </div>
  );
}

export default VacationLeave;
