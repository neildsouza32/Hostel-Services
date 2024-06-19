import React, { useState, useEffect } from "react";
import "./styles/dayl.css"

function LeaveRequests() {
  const [requests, setRequests] = useState([]);

  // Fetch leave requests from your backend API
  // useEffect(() => {
  //   // Replace with your API endpoint
  //   fetch("http://localhost:5000/api/v2/dayleavedata")
  //     .then((response) => response.json())
  //     .then((data) => setRequests(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  // useEffect(() => {
  //   // Replace with your API endpoint
  //   fetch("http://localhost:5000/api/v2/dayleavedata")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Check if the data is in the expected array format, if not, transform it
  //       const dataArray = Array.isArray(data) ? data : [data];
  
  //       setRequests(dataArray);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);
  
  // useEffect(() => {
  //   // Replace with your API endpoint
  //   fetch("http://localhost:5000/api/v2/dayleavedata")
  //     .then((response) => response.json())
  //     .then((data) => setRequests(data.data)) // Access the "data" property
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);
  

// useEffect(() => {
//   // Replace with your API endpoint
//   fetch("http://localhost:5000/api/v2/dayleavedata")
//     .then((response) => response.json())
//     .then((data) => {
//       // Extract and set the selected properties in your state
//       const selectedFields = data.data.map((item) => ({
//         fullname: item.fullname,
//         semester: item.semester,
//         // dateOfLeaving: item.dateOfLeaving,
//         timeOfLeaving: item.timeOfLeaving,
//         timeOfJoining: item.timeOfJoining,
//         purpose: item.purpose,
//       }));
//       setRequests(selectedFields);
//     })
//     .catch((error) => console.error("Error fetching data:", error));
//   }, []);
  

useEffect(() => {
  // Replace with your API endpoint
  fetch("http://localhost:5000/api/v2/dayleavedata")
    .then((response) => response.json())
    .then((data) => {
      // Extract and set the selected properties in your state
      const selectedFields = data.data.map((item, index) => ({
        name: item.fullname,
        department: item.department,
        timeOfLeaving: item.timeOfLeaving,
        timeOfJoining: item.timeOfReturn,
        purpose: item.purpose,
        serialNumber: index + 1
      }));
      setRequests(selectedFields);
      // console.log(selectedFields.length);
    })
    .catch((error) => console.error("Error fetching data:", error));
}, []);


  // Handle approval or deletion of a request
  const handleAction = (requestId, action) => {
    // Send a request to your backend to approve or delete the request
    // Update the state accordingly (e.g., remove the deleted request)
  };

  return (
    <div>
      <h2>Day Leave Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>Semester</th>
            <th>Time of Leaving</th>
            <th>Time of Joining</th>
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
              <td>{request.timeOfLeaving}</td>
              <td>{request.timeOfJoining}</td>
              <td>{request.purpose}</td>
              <td>
                <button onClick={() => handleAction(request.id, "approve")}>
                  Approve
                </button>
                <button onClick={() => handleAction(request.id, "delete")}>
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

export default LeaveRequests;
