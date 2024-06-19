import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    dateOfBirth: "",
    gender: "",
    contactNumber: "",
    emailID: "",
    FatherName: "",
    MotherName: "",
    parentContactNo: "",
    parentEmailID: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    rollNo: "",
    department: "",
    program: "",
    enrollmentYear: "",
    expectedGraduationYear: "",
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the formData to your server for registration
    // For simplicity, we'll just log the data to the console
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={formData.fullname}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
        />
      </div>
      {/* Add similar input fields for the remaining data */}
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
