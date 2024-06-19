import React, { useState } from "react";
import axios from 'axios';
import '../styles/complaint.css';


function Complaint() {
  const initialFormData = {
    selectedGrievance: "Noisy Neighbours", // Set the default value to one of the enum options
    description: "",
    otherValue: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [status, setStatus] = useState(""); // To display "Not Submitted" or "Submitted"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked");
    PostData();
  };

  const PostData = async () => {
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found in local storage');
        return;
      }

      const response = await axios.post("http://localhost:5000/api/v4/grievance", formData, {
        headers: {
          Authorization: `${token}`, // Include the token in the Authorization header
        }
      });

      // Handle the secured API response using response.data
      console.log(response.data);

      // For demo purposes, assume it's submitted after 3 seconds (simulating backend submission)
      setTimeout(() => {
        setStatus("Submitted");
      }, 3000);
    } catch (error) {
      // Handle errors
      console.error(error);

      // Handle the error gracefully and provide feedback to the user
      setStatus("Not Submitted");
    }
  };

  return (
    <div className="complaint-form">
      <div className="form-section">
        <h1>Submit a Complaint</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label>Grievance Type:</label>
            <select
              name="selectedGrievance"
              value={formData.selectedGrievance}
              onChange={handleChange}
            >
              <option value="Noisy Neighbours">Noisy Neighbours</option>
              <option value="Maintenance Issues">Maintenance Issues</option>
              <option value="Security Concerns">Security Concerns</option>
              <option value="Roomate Problems">Roomate Problems</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {formData.selectedGrievance === "Other" && (
            <div className="form-input">
              <label>Other Grievance:</label>
              <input
                type="text"
                name="otherValue"
                value={formData.otherValue}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-input">
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
        {status && <p>Status: {status}</p>}
        <p>Your complaint will be reviewed and processed.</p>
      </div>
    </div>
  );
}

export default Complaint;
