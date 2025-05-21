"use client";
import React, { useState } from "react";

const JobApplication = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    jobRole: "",
    experience: "",
    location: "",
    consent: false,
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const jobLocations = [
    "Bala Cynwyd Office",
    "Philadelphia Office", 
    "South Philadelphia Satellite Office"
  ];

  const jobRoles = [
    "Behavior Consultant (BC)",
    "Mobile Therapist (MT)",
    "Registered Behavior Technician (RBT)",
    "Behavior Technician (BT)",
    "Administration"
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size > 5 * 1024 * 1024) { // 5MB limit
      setSubmitError("File size should be less than 5MB");
      return;
    }
    setCvFile(file);
    setSubmitError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.jobRole || !formData.location || !formData.consent) {
      setSubmitError("Please fill all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      const formPayload = new FormData();
      formPayload.append("firstName", formData.firstName);
      formPayload.append("lastName", formData.lastName);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone || "");
      formPayload.append("address", formData.address || "");
      formPayload.append("jobRole", formData.jobRole);
      formPayload.append("experience", formData.experience || "");
      formPayload.append("location", formData.location);
      formPayload.append("consent", String(formData.consent));
      if (cvFile) {
        formPayload.append("cvFile", cvFile);
      }

      const response = await fetch("/api/send-emails2", {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit application");
      }

      // Reset form on success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        jobRole: "",
        experience: "",
        location: "",
        consent: false,
      });
      setCvFile(null);
      setSubmitSuccess(true);

    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : "An error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-9 lg:-mt-20 flex justify-center items-center">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl md:text-5xl text-blue-500 font-bold">Apply Here</h2>
        <hr className="border-blue-500 w-16 mt-2 mb-4" />
        <p className="text-gray-800 py-5">
          Thank you for wanting to join our team. Complete the initial requirements, and our HR team will start your onboarding process.
        </p>

        {submitError && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
            {submitError}
          </div>
        )}

        {submitSuccess && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
            ✔ Application submitted successfully! We'll be in touch soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name *"
              className="border border-gray-400 px-3 py-2 w-full rounded"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name *"
              className="border border-gray-400 px-3 py-2 w-full rounded"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              className="border border-gray-400 px-3 py-2 w-full rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="border border-gray-400 px-3 py-2 w-full rounded"
            />
          </div>
          
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="border border-gray-400 px-3 py-2 w-full rounded"
          ></textarea>
          
          <select
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            className="border border-gray-400 px-3 py-2 w-full rounded"
            required
          >
            <option value="">Select Job Role *</option>
            {jobRoles.map((role) => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
          
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Relevant Experience"
            className="border border-gray-400 px-3 py-2 w-full rounded h-32"
          ></textarea>
          
          <div className="flex flex-col space-y-2">
            <p className="text-sm font-semibold">Select a location *</p>
            {jobLocations.map((location) => (
              <label key={location} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="location"
                  value={location}
                  checked={formData.location === location}
                  onChange={handleChange}
                  className="form-radio text-blue-600"
                  required
                />
                <span>{location}</span>
              </label>
            ))}
          </div>
          
          <div>
            <label htmlFor="cvFile" className="block text-sm font-semibold mb-1">
              Upload Resume (PDF/DOC, max 5MB):
            </label>
            <input
              type="file"
              id="cvFile"
              name="cvFile"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="border border-gray-400 px-3 py-2 w-full rounded"
            />
          </div>
          
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1"
              required
            />
            <p className="text-sm text-gray-700">
              I consent to having my data stored and processed for the purpose of establishing contact. *
            </p>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition w-full ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplication;