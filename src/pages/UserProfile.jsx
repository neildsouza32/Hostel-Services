// import React, { useState, useEffect } from "react";
// import "../styles/UserProfile.css";
// import { FaEdit } from "react-icons/fa";
// import axios from "axios";

// const fields = [
//   "fullname",
//   "dateOfBirth",
//   "gender",
//   "contactNumber",
//   "emailID",
//   "fatherName",
//   "motherName",
//   "parentContactNo",
//   "parentEmailID",
//   "streetAddress",
//   "city",
//   "state",
//   "postalCode",
//   "rollNo",
//   "department",
//   "semester",
//   "enrollmentYear",
//   "expectedGraduationYear",
//   "username",
// ];

// function UserProfile() {
//   const [userData, setUserData] = useState({});
//   const [isEditing, setIsEditing] = useState(false);

//   const getUserData = async () => {
//     try {
//       // Retrieve the token from localStorage
//       const token = localStorage.getItem("token");

//       if (!token) {
//         // Handle case where token is missing or invalid
//         return;
//       }

//       const headers = {
//         Authorization: `${token}`,
//       };
      
//       try {
//         const response = await axios.get(`http://localhost:5000/api/v1/current, ${ headers }`);

//         if (response.status === 200) {
//           const loggedInUserId = response.data._id; // Assuming your user data includes the user's ID.
//           const userDataResponse = await axios.get(`http://localhost:5000/api/v1/current/${loggedInUserId}`, { headers });

//           if (userDataResponse.status === 200) {
//             setUserData(userDataResponse.data);
//           } else {
//             console.error('Failed to fetch user data');
//           }
//         } else {
//           console.error('Failed to fetch currently logged-in user data');
//         }
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   }

//   const updateUser = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         // Handle case where token is missing or invalid
//         return;
//       }

//       const headers = {
//         Authorization: `${token}`,
//       };

//       const userId = userData._id; // Use the user's ID from the retrieved user data.
//       const response = await axios.patch(`http://localhost:5000/api/v1/current/${userId}`, userData, { headers });

//       if (response.status === 200) {
//         setIsEditing(false);
//         // You can add success handling here, like displaying a success message.
//       } else {
//         console.error('Failed to update user data');
//       }
//     } catch (error) {
//       console.error('Error updating user data:', error);
//     }
//   };

//   const handleEdit = (field) => {
//     setIsEditing(field);
//   };

//   const handleSave = () => {
//     updateUser();
//   };

//   useEffect(() => {
//     getUserData();
//   }, []);

//   return (
//     <div className="auth-form-container">
//       <h2>User Profile</h2>
//       <div className="info-columns">
//         {fields.map((field) => (
//           <div className="info-pair" key={field}>
//             <label>{field === "fullname" ? "Full Name" : field}:</label>
//             {isEditing === field ? (
//               <input
//                 type="text"
//                 value={userData[field]}
//                 onChange={(e) => setUserData({ ...userData, [field]: e.target.value })}
//               />
//             ) : (
//               <p>{userData[field]}</p>
//             )}
//             {isEditing === field ? (
//               <button onClick={handleSave}>Save</button>
//             ) : (
//               <FaEdit className="edit-icon" onClick={() => handleEdit(field)} />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default UserProfile;
// import React, { useState, useEffect } from "react";
// import "../styles/UserProfile.css";
// import axios from "axios";

// function UserProfile() {
//   const [userData, setUserData] = useState({});

//   const getUserData = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         return; // Handle missing or invalid token
//       }

//       const headers = {
//         Authorization: `${token}`,
//       };

//       try {
//         const response = await axios.get(`http://localhost:5000/api/v1/current`, { headers });

//         if (response.status === 200) {
//           setUserData(response.data);
//         } else {
//           console.error('Failed to fetch user data');
//         }
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   }

//   useEffect(() => {
//     getUserData();
//   }, []);

//   const displayNestedData = (data) => {
//     if (!data || typeof data !== 'object') {
//       return null; // Handle the case where the data is not an object or is null/undefined
//     }

//     return (
//       <ul>
//         {Object.keys(data).map((key) => (
//           <li key={key}>
//             <strong>{key}:</strong>
//             {typeof data[key] === 'object' ? displayNestedData(data[key]) : data[key]}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <div className="auth-form-container">
//       <h2>User Profile</h2>
//       <div className="info-columns">
//         <div className="info-pair">
//           <label>Full Name:</label>
//           <p>{userData.fullname}</p>
//         </div>
//         <div className="info-pair">
//           <label>Date of Birth:</label>
//           <p>{userData.dateOfBirth}</p>
//         </div>
//         <div className="info-pair">
//           <label>Gender:</label>
//           <p>{userData.gender}</p>
//         </div>
//         <div className="info-pair">
//           <label>Contact Number:</label>
//           <p>{userData.contactNumber}</p>
//         </div>
//         <div className="info-pair">
//           <label>Email ID:</label>
//           <p>{userData.emailID}</p>
//         </div>
//         <div className="info-pair">
//           <label>Parent Details:</label>
//           {displayNestedData(userData.parentDetails)}
//         </div>
//         <div className="info-pair">
//           <label>Address:</label>
//           {displayNestedData(userData.address)}
//         </div>
//         <div className="info-pair">
//           <label>Student Info:</label>
//           {displayNestedData(userData.studentInfo)}
//         </div>
//         <div className="info-pair">
//           <label>Username:</label>
//           <p>{userData.username}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserProfile;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UserProfile.css";

function UserProfile() {
  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return; // Handle missing or invalid token
      }

      const headers = {
        Authorization: `${token}`,
      };

      try {
        const response = await axios.get(`http://localhost:5000/api/v1/current`, { headers });

        if (response.status === 200) {
          setUserData(response.data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  const displayNestedData = (data) => {
    if (!data || typeof data !== 'object') {
      return null; // Handle the case where the data is not an object or is null/undefined
    }

    return (
      <ul>
        {Object.keys(data).map((key) => (
          <li key={key}>
            <strong>{key}:</strong>
            {typeof data[key] === 'object' ? displayNestedData(data[key]) : data[key]}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="user-profile-container">
      <div className="user-details">
        <div className="user-details-content">
          <h2>User Details</h2>
          <div className="info-columns">
            <div className="info-pair">
              <label>Full Name:</label>
              <p>{userData.fullname}</p>
            </div>
            <div className="info-pair">
              <label>Date of Birth:</label>
              <p>{userData.dateOfBirth}</p>
            </div>
            <div className="info-pair">
              <label>Gender:</label>
              <p>{userData.gender}</p>
            </div>
            <div className="info-pair">
              <label>Contact Number:</label>
              <p>{userData.contactNumber}</p>
            </div>
            <div className="info-pair">
              <label>Email ID:</label>
              <p>{userData.emailID}</p>
            </div>
            <div className="info-pair">
              <label>Username:</label>
              <p>{userData.username}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="details-section parent-details">
          <h2>Parent Details</h2>
          {displayNestedData(userData.parentDetails)}
        </div>
        <div className="details-section address-details">
          <h2>Address Details</h2>
          {displayNestedData(userData.address)}
        </div>
        <div className="details-section student-info">
          <h2>Student Info</h2>
          {displayNestedData(userData.studentInfo)}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
