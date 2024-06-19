import React, { useState } from "react";
import axios from 'axios';
import "../styles/DayLeaveForm.css";

function DayLeaveForm() {
  const initialFormData = {
    dateOfLeaving: "",
    timeOfLeaving: "",
    purpose: "",
    timeOfReturn: "",
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
  const token = window.localStorage.getItem("token");
  console.log(token);

  const PostData = async () => {
    try {
      // Format date and time values
      const formattedDateOfLeaving = formData.dateOfLeaving.toLocaleString('en-GB').split(', ')[0]; // Format as "yyyy-MM-dd"
      const formattedTimeOfLeaving = formData.timeOfLeaving.toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit' }).replace(' ', ''); // Format as "HH:mm"
      const formattedTimeOfReturn = formData.timeOfReturn.toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit' }).replace(' ', ''); // Format as "HH:mm"

      // Update formData with formatted values
      setFormData({
        ...formData,
        dateOfLeaving: formattedDateOfLeaving,
        timeOfLeaving: formattedTimeOfLeaving,
        timeOfReturn: formattedTimeOfReturn,
      });

      // Retrieve the token from local storage
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found in local storage');
        return;
      }

      const response = await axios.post("http://localhost:5000/api/v2/day-leave", formData, {
        headers: {
          Authorization: `${token}`,
        }
      });

      // Handle the secured API response using response.data
      console.log(response.data);

      // For demo purposes, assume it's approved after 3 seconds (simulating backend approval)
      setTimeout(() => {
        setStatus("Approved");
      }, 3000);
    } catch (error) {
      // Handle errors
      console.error(error);

      // Handle the error gracefully and provide feedback to the user
      setStatus("Not Approved");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit button clicked");
    PostData();
  };

  return (
    <div className="day-leave-form">
      <div className="form-section">
        <h1>Day Leave Application</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label>Date of Leaving:</label>
            <input
              type="date"
              name="dateOfLeaving"
              value={formData.dateOfLeaving}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-input">
            <label>Time of Leaving:</label>
            <input
              type="time"
              name="timeOfLeaving"
              value={formData.timeOfLeaving}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-input">
            <label>Purpose:</label>
            <textarea
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-input">
            <label>Time of Return:</label>
            <input
              type="time"
              name="timeOfReturn"
              value={formData.timeOfReturn}
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

export default DayLeaveForm;

// import React, { useState } from "react";
// import axios from 'axios';
// import "../styles/DayLeaveForm.css";

// function DayLeaveForm() {
//   const initialFormData = {
//     dateOfLeaving: "",
//     timeOfLeaving: "",
//     purpose: "",
//     timeOfReturn: "",
//   };

//   const [formData, setFormData] = useState({ ...initialFormData });
//   const [status, setStatus] = useState(""); // To display "Not Approved" or "Approved"

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const token=window.localStorage.getItem("token");
//   console.log(token);

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   // Send the form data to the backend for approval
//   //   makeAuthenticatedRequest();
//   // };

//   const makeAuthenticatedRequest = async () => {
//     try {
//       // Retrieve the token from local storage
//       const token = localStorage.getItem('token'); // Replace 'token' with your actual local storage key

//       if (!token) {
//         console.error('Token not found in local storage');
//         return;
//       }

//       const response = await axios.post("http://localhost:5000/api/v2/day-leave", formData, {
//         headers: {
//           Authorization: `${token}`, // Include the token in the Authorization header
//         }
//       });

//       // Handle the secured API response using response.data
//       console.log(response.data);

//       // For demo purposes, assume it's approved after 3 seconds (simulating backend approval)
//       // setTimeout(() => {
//       //   setStatus("Approved");
//       // }, 3000);
//     } catch (error) {
//       // Handle errors
//       console.error(error);

//       // Handle the error gracefully and provide feedback to the user
//       setStatus("Not Approved");
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submit button clicked"); // Add this line for debugging
//     PostData();
//   };
  
//   const PostData = async () => {
//     // ... your existing code
//     makeAuthenticatedRequest();
  
//     try {
//       // ... your existing code
  
//     } catch (error) {
//       if (error.response) {
//         // The request was made, but the server responded with a non-2xx status
//         console.error("Server responded with an error status:", error.response.status);
//         console.error("Server response data:", error.response.data);
//       } else if (error.request) {
//         // The request was made, but no response was received
//         console.error("No response received. The server might be down.");
//       } else {
//         // Something else happened while setting up the request
//         console.error("An error occurred before the request was sent:", error.message);
//       }
  
//       // Handle the error gracefully and provide feedback to the user
//       setStatus("Not Approved");
//     }
//   };
  


//   return (
//     <div className="day-leave-form">
//       <div className="form-section">
//         <h1>Day Leave Application</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-input">
//             <label>Date of Leaving:</label>
//             <input
//               type="date"
//               name="dateOfLeaving"
//               value={formData.dateOfLeaving}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-input">
//             <label>Time of Leaving:</label>
//             <input
//               type="time"
//               name="timeOfLeaving"
//               value={formData.timeOfLeaving}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-input">
//             <label>Purpose:</label>
//             <textarea
//               name="purpose"
//               value={formData.purpose}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-input">
//             <label>Time of Return:</label>
//             <input
//               type="time"
//               name="timeOfReturn"
//               value={formData.timeOfReturn}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <button type="submit">Submit</button>
//         </form>
//         {status && <p>Status: {status}</p>}
//         <p>Your leave application will be reviewed and processed.</p>
//       </div>
//     </div>
//   );
// }


// //         <p>Parents will be notified of you leaving the premises.</p>
// //       </div>

// //       <div className="side-section">
// //         {/* Display previous form data and status here */}
// //         <h2>Previous Form Data</h2>
// //         <p>Purpose: {formData.purpose}</p>
// //         <p>Time of Return: {formData.returnTime}</p>
// //         <h2>Status</h2>
// //         <p>{status || "Not Approved"}</p>
// //       </div>
// //     </div>
// //   );
// // }

// export default DayLeaveForm;
