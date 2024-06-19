import React, { useState, useEffect } from "react";
import "../styles/DayLeaveForm.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function VacationLeave() {
  const initialFormData = {
    dateOfLeaving: "",
    dateOfReturn: "",
    purpose: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [status, setStatus] = useState(""); // To display "Not Approved" or "Approved"
  // const [token, setToken] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const history = useHistory();
  // const handleNext = (e) => {
  //   e.preventDefault();
  //   // Perform any form validation here if needed

  //   // Show an alert
  //   window.alert("Registration successful!");

  //   // Redirect to another page
  //   history.push("/menu"); // Replace with the actual URL you want to redirect to
  // }; 

  const token=window.localStorage.getItem("token");
  console.log(token);

  // Axios request with the JWT token
  // const makeAuthenticatedRequest = () => {
  //   axios.post("http://localhost:5000/api/v3/vacation_leave", {
  //     headers: {
  //       Authorization: `Bearer ${token}`, // Include the token in the Authorization header
  //     },
  //   })
  //     .then((response) => {
  //       // Handle the secured API response
  //     })
  //     .catch((error) => {
  //       // Handle errors
  //     });
  // };

  const makeAuthenticatedRequest = async () => {
    console.log(formData);
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('token'); // Replace 'token' with your actual local storage key
  
      if (!token) {
        console.error('Token not found in local storage');
        return;
      }
  
      const response = await axios.post("http://localhost:5000/api/v3/vacation-leave", formData, {
        headers: {
          Authorization: `${token}`, // Include the token in the Authorization header
        }
       
      });
  
      // Handle the secured API response using response.data
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };
  

  // useEffect(() => {
  //   const storedToken = localStorage.getItem('token');
  //   console.log(token);
  //   // setToken(storedToken); // Make the authenticated request when the component mounts
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit button clicked"); // Add this line for debugging
    PostData();
  };
  
  const PostData = async () => {
    // ... your existing code
    makeAuthenticatedRequest();
  
    try {
      // ... your existing code
  
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a non-2xx status
        console.error("Server responded with an error status:", error.response.status);
        console.error("Server response data:", error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error("No response received. The server might be down.");
      } else {
        // Something else happened while setting up the request
        console.error("An error occurred before the request was sent:", error.message);
      }
  
      // Handle the error gracefully and provide feedback to the user
      setStatus("Not Approved");
    }
  };
  

  return (
    <div className="vaca-leave-form">
      <div className="form-section">
        <h1>Vacation Leave Application</h1>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="form-input">
            <label>Date of Leaving:</label>
            <input
              type="date"
              name="dateOfLeaving"
              value={formData.leaveDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-input">
            <label>Date of Return:</label>
            <input
              type="date"
              name="dateOfReturn"
              value={formData.returnDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-input">
            <label>Purpose:</label>
            <input
              type= "String"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>

        {status && <p>Status: {status}</p>}
        <p>Your leave application will be reviewed and processed.</p>
      </div>
    </div>
  );
}

export default VacationLeave;
