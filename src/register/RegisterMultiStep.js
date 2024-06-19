import React, { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";

const RegisterMultiStep = () => {
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
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const submitForm = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration is successful
        console.log("Registration successful.");
        alert("Registration successful. You can now login.");
        // Redirect to the login page or any other page as needed
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
    <div>
      {currentStep === 1 && (
        <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
      )}
      {currentStep === 2 && (
        <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
      )}
      {currentStep === 3 && (
        <Step3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
      )}
      {currentStep === 4 && (
        <Step4
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
          submitForm={submitForm} // Pass the submitForm function
        />
      )}
    </div>
  );
};

export default RegisterMultiStep;
