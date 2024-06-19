// Step1.js
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import './step1.css'; // Import your custom CSS file

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [formErrors, setFormErrors] = useState({}); // To track form errors

  const handleNext = () => {
    // Check if all required fields are filled
    const errors = {};
    if (formData.fullname === '') {
      errors.fullname = 'Full Name is required';
    }
    if (formData.dateOfBirth === '') {
      errors.dateOfBirth = 'Date of Birth is required';
    }
    if (formData.gender === '') {
      errors.gender = 'Gender is required';
    }
    if (formData.contactNumber === '') {
      errors.contactNumber = 'Contact Number is required';
    }
    if (formData.emailID === '') {
      errors.emailID = 'Email is required';
    }

    // Update the state with errors
    setFormErrors(errors);

    // If there are errors, do not proceed
    if (Object.keys(errors).length === 0) {
      // No errors, proceed to the next step
      nextStep();
    }
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });

  //   // Remove the error message when the user starts typing
  //   if (formErrors[name]) {
  //     setFormErrors({ ...formErrors, [name]: '' });
  //   }
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the input is a valid 10-digit number
    if (name === 'contactNumber') {
      if (value.length === 10 && /^\d+$/.test(value)) {
        // No errors, clear any previous error message
        setFormErrors({ ...formErrors, [name]: '' });
      } else {
        // Display an error message if the input is not a 10-digit number
        setFormErrors({ ...formErrors, [name]: 'Contact number must be 10 digits' });
      }
    }

    // Update the form data
    setFormData({ ...formData, [name]: value });
  };

  const handleInputDOB = (e) => {
    const { name, value } = e.target;

    if (name === 'dateOfBirth') {
      // Calculate the age based on the date of birth
      const dob = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();

      if (age < 18) {
        // Display an error message if the person is below 18 years old
        setFormErrors({ ...formErrors, [name]: 'You must be 18 years or older' });
      } else {
        // No errors, clear any previous error message
        setFormErrors({ ...formErrors, [name]: '' });
      }
    }

    // Update the form data
    setFormData({ ...formData, [name]: value });
  };

  const handleInputEMAIL = (e) => {
    const { name, value } = e.target;

    if (name === 'emailID') {
      // Regular expression to validate email format
      const emailRegex = /^[A-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/i;

      if (!emailRegex.test(value)) {
        // Display an error message if the email format is invalid
        setFormErrors({ ...formErrors, [name]: 'Invalid email format' });
      } else {
        // No errors, clear any previous error message
        setFormErrors({ ...formErrors, [name]: '' });
      }
    }

    // Update the form data
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="auth-form-container">
      <div>
        <h2>Step 1: Personal Information</h2>
        <label htmlFor="fullname">Full Name</label>
        <input
          value={formData.fullname}
          name="fullname"
          onChange={handleInputChange}
          type="text"
          id="fullname"
        />
        {formErrors.fullname && (
          <div className="red-alert">{formErrors.fullname}</div>
        )}

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          value={formData.dateOfBirth}
          name="dateOfBirth"
          onChange={handleInputChange}
          type="date"
          id="dateOfBirth"
        />
        {formErrors.dateOfBirth && (
          <div className="red-alert">{formErrors.dateOfBirth}</div>
        )}

        <label htmlFor="gender">Gender</label>
        <select
          value={formData.gender}
          name="gender"
          onChange={handleInputDOB}
          type="text"
          id="gender"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          {/* <option value="other">Other</option> */}
          
        </select>
        {formErrors.gender && (
          <div className="red-alert">{formErrors.gender}</div>
        )}

        <label htmlFor="contactNumber">Contact Number</label>
        <input
          value={formData.contactNumber}
          name="contactNumber"
          onChange={handleInputChange}
          type="number"
          id="contactNumber"
        />
        {formErrors.contactNumber && (
          <div className="red-alert">{formErrors.contactNumber}</div>
        )}

        <label htmlFor="emailID">Email</label>
        <input
          value={formData.emailID}
          name="emailID"
          onChange={handleInputEMAIL}
          type="text"
          id="emailID"
        />
        {formErrors.emailID && (
          <div className="red-alert">{formErrors.emailID}</div>
        )}
        <div className="button-container">
          <button onClick={handleNext} className="next-button">
            Next <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
