import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Step3 = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="auth-form-container">
      <div>
        <h2>Step 3: College Information</h2>
        <label htmlFor="rollNo">Roll Number</label>
        <input
          value={formData.rollNo}
          name="rollNo"
          onChange={handleInputChange}
          type="number"
          id="rollNo"
        />

        <label htmlFor="department">Department</label>
        <select
          value={formData.department}
          name="department"
          onChange={handleInputChange}
          id="department"
        >
          <option value="">Select Department</option>
          <option value="COMP-A">Computer Science A</option>
          <option value="COMP-B">Computer Science B</option>
          <option value="ELEC">Electrical Engineering</option>
          <option value="MECH-A">Mechanical Engineering A</option>
          <option value="MECH-B">Mechanical Engineering B</option>
          <option value="IT">IT</option>
          {/* Add more options as needed */}
        </select>

        <label htmlFor="semester">Semester</label>
        <select
          value={formData.semester}
          name="semester"
          onChange={handleInputChange}
          id="semester"
        >
          <option value="">Select Semester</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>

        <label htmlFor="enrollmentYear">Enrollment Year</label>
        <input
          value={formData.enrollmentYear}
          name="enrollmentYear"
          onChange={handleInputChange}
          type="number"
          id="enrollmentYear"
        />

        <label htmlFor="expectedGraduationYear">Expected Graduation Year</label>
        <input
          value={formData.expectedGraduationYear}
          name="expectedGraduationYear"
          onChange={handleInputChange}
          type="number"
          id="expectedGraduationYear"
        />

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

export default Step3;
