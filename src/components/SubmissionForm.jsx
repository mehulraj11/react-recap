import { useState } from "react";

const SubmissionForm = () => {
  // Initial form state
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    subjects: [],
    resume: null,
    url: "",
    choice: "",
    about: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  // Handle all input changes
  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    if (type === "file") {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        subjects: checked
          ? [...prev.subjects, value]
          : prev.subjects.filter(subject => subject !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form Submitted! Check console for details.");
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="form-container">
      <h2>Submission Form</h2>
      
      <form onSubmit={handleSubmit} className="submission-form">
        {/* Personal Information Section */}
        <div className="form-section">
          <h3>Personal Information</h3>
          
          <div className="form-group">
            <label htmlFor="firstName">First Name*</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact*</label>
            <input
              id="contact"
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Gender Section */}
        <div className="form-section">
          <h4>Gender*</h4>
          <div className="radio-group">
            {["Male", "Female", "Other"].map((gender) => (
              <label key={gender} className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={handleChange}
                  required
                />
                {gender}
              </label>
            ))}
          </div>
        </div>

        {/* Subjects Section */}
        <div className="form-section">
          <h4>Your Best Subject*</h4>
          <div className="checkbox-group">
            {["Maths", "English", "Computer"].map((subject) => (
              <label key={subject} className="checkbox-label">
                <input
                  type="checkbox"
                  name="subjects"
                  value={subject}
                  checked={formData.subjects.includes(subject)}
                  onChange={handleChange}
                />
                {subject}
              </label>
            ))}
          </div>
        </div>

        {/* File Upload Section */}
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="resume">Upload Resume*</label>
            <input
              id="resume"
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
            />
            {formData.resume && (
              <span className="file-name">
                Selected: {formData.resume.name}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="url">Enter URL*</label>
            <input
              id="url"
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="https://example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="choice">Select Your Choice*</label>
            <select
              id="choice"
              name="choice"
              value={formData.choice}
              onChange={handleChange}
              required
            >
              <option value="">--Select--</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="about">About</label>
            <textarea
              id="about"
              name="about"
              value={formData.about}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about yourself..."
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button type="button" onClick={handleReset} className="reset-btn">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmissionForm;
