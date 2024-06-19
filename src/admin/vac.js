import React, { useState, useEffect } from "react";
import "./styles/vacation.css";

function VacationRequests() {
  const [requests, setRequests] = useState([]);

  // Fetch vacation leave requests from your backend API
  // useEffect(() => {
  //   // Replace with your API endpoint
  //   fetch("http://your-api-endpoint/vacation-requests")
  //     .then((response) => response.json())
  //     .then((data) => setRequests(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);


useEffect(() => {
  // Replace with your API endpoint
  fetch("http://localhost:5000/api/v2/dayleavedata")
    .then((response) => response.json())
    .then((data) => {
      // Extract and set the selected properties in your state
      const selectedFields = data.data.map((item, index) => ({
        name: item.fullname,
        department: item.department,
        startDate: item.timeOfLeaving,
        endDate: item.timeOfReturn,
        purpose: item.purpose,
        serialNumber: index + 1
      }));
      setRequests(selectedFields);
    })
    .catch((error) => console.error("Error fetching data:", error));
  }, []);
  

  // Handle approval or rejection of a request
  const handleAction = (requestId, action) => {
    // Send a request to your backend to approve or reject the request
    // Update the state accordingly (e.g., remove the deleted request)
  };

  return (
    <div>
      <h2>Vacation Leave Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>department</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Purpose</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.serialNumber}</td>
              <td>{request.name}</td>
              <td>{request.department}</td>
              <td>{request.startDate}</td>
              <td>{request.endDate}</td>
              <td>{request.purpose}</td>
              <td>
                <button onClick={() => handleAction(request.id, "approve")}>
                  Approve
                </button>
                <button onClick={() => handleAction(request.id, "reject")}>
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VacationRequests;
