import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [formErrors, setFormErrors] = useState({}); // To track form errors

  const handleNext = () => {
    // Check if all required fields are filled
    const errors = {};
    if (formData.FatherName === "") {
      errors.FatherName = "Father's Name is required";
    }
    if (formData.MotherName === "") {
      errors.MotherName = "Mother's Name is required";
    }
    if (formData.parentContactNo === "") {
      errors.parentContactNo = "Parent's Contact Number is required";
    }
    if (formData.parentEmailID === "") {
      errors.parentEmailID = "Parent's Email is required";
    }
    if (formData.streetAddress === "") {
      errors.streetAddress = "Street Address is required";
    }
    if (formData.city === "") {
      errors.city = "City is required";
    }
    if (formData.state === "") {
      errors.state = "State is required";
    }
    if (formData.postalCode === "") {
      errors.postalCode = "Postal Code is required";
    }

    // If there are errors, update the state and do not proceed
    if (Object.values(errors).some((error) => error !== "")) {
      setFormErrors(errors);
    } else {
      // No errors, proceed to the next step
      nextStep();
    }
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove the error message when the user starts typing
    if (formErrors[name]) {
      const updatedErrors = { ...formErrors };
      updatedErrors[name] = "";
      setFormErrors(updatedErrors);
    }
  };

  const handleInputnumber= (e) => {
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
        <h2>Step 2: Parents Information</h2>
        <label htmlFor="fatherName">Father's Name</label>
        <input
          value={formData.fatherName}
          name="fatherName"
          onChange={handleInputChange}
          type="text"
          id="fatherName"
        />
        {formErrors.FatherName && (
          <div className="red-alert">{formErrors.FatherName}</div>
        )}

        <label htmlFor="motherName">Mother's Name</label>
        <input
          value={formData.motherName}
          name="motherName"
          onChange={handleInputChange}
          type="text"
          id="motherName"
        />
        {formErrors.MotherName && (
          <div className="red-alert">{formErrors.MotherName}</div>
        )}

        <label htmlFor="parentContactNo">Parent's Contact Number</label>
        <input
          value={formData.parentContactNo}
          name="parentContactNo"
          onChange={handleInputnumber}
          type="text"
          id="parentContactNo"
        />
        {formErrors.parentContactNo && (
          <div className="red-alert">{formErrors.parentContactNo}</div>
        )}

        <label htmlFor="parentEmailID">Parent's Email</label>
        <input
          value={formData.parentEmailID}
          name="parentEmailID"
          onChange={handleInputnumber}
          type="text"
          id="parentEmailID"
        />
        {formErrors.parentEmailID && (
          <div className="red-alert">{formErrors.parentEmailID}</div>
        )}

        <label htmlFor="streetAddress">Street Address</label>
        <input
          value={formData.streetAddress}
          name="streetAddress"
          onChange={handleInputChange}
          type="text"
          id="streetAddress"
        />
        {formErrors.streetAddress && (
          <div className="red-alert">{formErrors.streetAddress}</div>
        )}

        <label htmlFor="city">City</label>
        <input
          value={formData.city}
          name="city"
          onChange={handleInputChange}
          type="text"
          id="city"
        />
        {formErrors.city && <div className="red-alert">{formErrors.city}</div>}

        <label htmlFor="state">State</label>
        <input
          value={formData.state}
          name="state"
          onChange={handleInputChange}
          type="text"
          id="state"
        />
        {formErrors.state && <div className="red-alert">{formErrors.state}</div>}



        <label htmlFor="postalCode">Postal Code</label>
        <input
          value={formData.postalCode}
          name="postalCode"
          onChange={handleInputChange}
          type="text"
          id="postalCode"
          
        />
        {formErrors.state && <div className="red-alert">{formErrors.postalCode}</div>}

        <div className="button-container">
          <button onClick={handlePrevious} className="previous-button">
            <FaArrowLeft /> Previous
          </button>
          <button onClick={handleNext} className="next-button">
            Next <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
