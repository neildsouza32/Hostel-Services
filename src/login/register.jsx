import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export const Register = (props) => {
  const [formData, setFormData] = useState({
    fullname: "",
    dateOfBirth: "",
    gender: "",
    contactNumber: "",
    emailID: "",
    fatherName: "",
    motherName: "",
    parentContactNo: "",
    parentEmailID: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    rollNo: "",
    department: "",
    semester: "",
    enrollmentYear: "",
    expectedGraduationYear: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        const accessToken = data.accessToken; // Assuming the server sends the token in the response

        // Store the token in localStorage
        localStorage.setItem('token', accessToken);

        // Registration is successful
        console.log("Registration successful.");
        alert("Registration successful. You can now login.");
        // Redirect to the login page
        window.location.href = "/login";
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

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <input
          value={formData.fullname}
          name="fullname"
          onChange={handleInputChange}
          type="text"
          id="fullname"
          placeholder="Full Name"
        />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          value={formData.dateOfBirth}
          name="dateOfBirth"
          onChange={handleInputChange}
          type="date"
          id="dateOfBirth"
          placeholder="Date of Birth"
        />

        <label htmlFor="gender">Gender</label>
        <input
          value={formData.gender}
          name="gender"
          onChange={handleInputChange}
          type="text"
          id="gender"
          placeholder="Gender"
        />

        <label htmlFor="contactNumber">Contact Number</label>
        <input
          value={formData.contactNumber}
          name="contactNumber"
          onChange={handleInputChange}
          type="text"
          id="contactNumber"
          placeholder="Contact Number"
        />

        <label htmlFor="emailID">Email</label>
        <input
          value={formData.emailID}
          name="emailID"
          onChange={handleInputChange}
          type="text"
          id="emailID"
          placeholder="Email"
        />

        <label htmlFor="fatherName">Father's Name</label>
        <input
          value={formData.fatherName}
          name="fatherName"
          onChange={handleInputChange}
          type="text"
          id="fatherName"
          placeholder="Father's Name"
        />

        <label htmlFor="motherName">Mother's Name</label>
        <input
          value={formData.motherName}
          name="motherName"
          onChange={handleInputChange}
          type="text"
          id="motherName"
          placeholder="Mother's Name"
        />

        <label htmlFor="parentContactNo">Parent's Contact Number</label>
        <input
          value={formData.parentContactNo}
          name="parentContactNo"
          onChange={handleInputChange}
          type="text"
          id="parentContactNo"
          placeholder="Parent's Contact Number"
        />

        <label htmlFor="parentEmailID">Parent's Email</label>
        <input
          value={formData.parentEmailID}
          name="parentEmailID"
          onChange={handleInputChange}
          type="text"
          id="parentEmailID"
          placeholder="Parent's Email"
        />

        <label htmlFor="streetAddress">Street Address</label>
        <input
          value={formData.streetAddress}
          name="streetAddress"
          onChange={handleInputChange}
          type="text"
          id="streetAddress"
          placeholder="Street Address"
        />

        <label htmlFor="city">City</label>
        <input
          value={formData.city}
          name="city"
          onChange={handleInputChange}
          type="text"
          id="city"
          placeholder="City"
        />

        <label htmlFor="state">State</label>
        <input
          value={formData.state}
          name="state"
          onChange={handleInputChange}
          type="text"
          id="state"
          placeholder="State"
        />

        <label htmlFor="postalCode">Postal Code</label>
        <input
          value={formData.postalCode}
          name="postalCode"
          onChange={handleInputChange}
          type="text"
          id="postalCode"
          placeholder="Postal Code"
        />

        <label htmlFor="rollNo">Roll Number</label>
        <input
          value={formData.rollNo}
          name="rollNo"
          onChange={handleInputChange}
          type="text"
          id="rollNo"
          placeholder="Roll Number"
        />

        <label htmlFor="department">Department</label>
        <input
          value={formData.department}
          name="department"
          onChange={handleInputChange}
          type="text"
          id="department"
          placeholder="Department"
        />

        <label htmlFor="semester">Semester</label>
        <input
          value={formData.semester}
          name="semester"
          onChange={handleInputChange}
          type="text"
          id="semester"
          placeholder="Semester"
        />

        <label htmlFor="enrollmentYear">Enrollment Year</label>
        <input
          value={formData.enrollmentYear}
          name="enrollmentYear"
          onChange={handleInputChange}
          type="date"
          id="enrollmentYear"
          placeholder="Enrollment Year"
        />

        <label htmlFor="expectedGraduationYear">Expected Graduation Year</label>
        <input
          value={formData.expectedGraduationYear}
          name="expectedGraduationYear"
          onChange={handleInputChange}
          type="date"
          id="expectedGraduationYear"
          placeholder="Expected Graduation Year"
        />

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

        <button type="submit">Register</button>
      </form>
      <Link to="/home">
        <button className="link-btn">Already have an account? Login here.</button>
      </Link>
    </div>
  );
};

export default Register;
