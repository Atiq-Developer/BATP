"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
  location: string;
  job: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
    location: "",
    job: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const locations = ["Philadelphia", "Bucks", "Delaware", "Montgomery"];
  const jobTypes = ["Employment (HR)", "Services (Case Management)", "Other (office)"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);
    setIsSubmitting(true);

    if (!formData.location || !formData.job) {
      setSubmitError("Please select both a location and job type");
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = {
        ...formData,
        name: `${formData.firstName} ${formData.lastName}`
      };

      const response = await fetch("/api/send-emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
        location: "",
        job: "",
      });
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
    <div className="max-w-[1600px] mx-auto px-4 md:px-10 pt-24 py-16 grid grid-cols-1 md:grid-cols-7 gap-12">
      {/* Left Section - Contact Info */}
      <div className="md:col-span-2 pl-11">
        <h2 className="text-2xl text-blue-500 md:text-4xl font-bold">Get in touch</h2>
        <hr className="border-blue-500 w-36 h-[3px] mt-2 mb-4" />
        <div className="mt-4">
          <div className="flex items-center">
            <Image 
              src="/images/con7.jpg" 
              alt="Phone" 
              width={104} 
              height={104} 
              className="w-11 h-11 contrast-100" 
            />
            <div className="ml-4">
              <p className="font-semibold">Phone</p>
              <p>610-664-6200</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <Image 
              src="/images/con8.jpg" 
              alt="Email" 
              width={104} 
              height={104} 
              className="-ml-3 w-16 h-16" 
            />
            <div>
              <p className="font-semibold">Email</p>
              <Link href="mailto:chantellebosier@batp.org" className="text-blue-600 hover:underline">
                chantellebosier@batp.org
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Center Section - Contact Form */}
      <div className="md:col-span-3">
        <h2 className="text-3xl md:text-4xl text-blue-500 font-bold">Contact us</h2>
        <hr className="border-blue-500 w-20 mt-2 mb-4" />
        
        {submitError && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {submitError}
          </div>
        )}

        {submitSuccess && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
            ✔ Form submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="border border-gray-400 px-5 py-3 w-full rounded"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="border border-gray-400 px-5 py-3 w-full rounded"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border border-gray-400 px-5 py-3 w-full rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="border border-gray-400 px-5 py-3 w-full rounded"
            />
          </div>
          
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="border border-gray-400 px-5 py-3 w-full rounded h-32"
          />

          <div className="flex flex-col space-y-2">
            <p className="text-lg font-semibold">Select a location:</p>
            {locations.map((location) => (
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

          <div className="flex flex-col space-y-2">
            <p className="text-lg font-semibold">Are you interested in:</p>
            {jobTypes.map((job) => (
              <label key={job} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="job"
                  value={job}
                  checked={formData.job === job}
                  onChange={handleChange}
                  className="form-radio text-blue-600"
                  required
                />
                <span>{job}</span>
              </label>
            ))}
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
              Data will be stored and processed for the purpose of establishing contact. 
              You may revoke your consent to store your information at any time.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition w-full ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : "Send"}
          </button>
        </form>
      </div>

      {/* Right Section - Let's Talk */}
      <div className="md:col-span-2">
        <h2 className="text-2xl md:text-3xl text-blue-500 font-bold">Let&apos;s Talk!</h2>
        <hr className="border-blue-500 w-16 mt-2 mb-4" />
        <p className="text-gray-700">
          Have questions? Interested in working with us? Send us an{" "}
          <Link href="mailto:chantellebosier@botp.org" className="text-blue-600 hover:underline">
            Email
          </Link>{" "}
          to schedule a talk with us.
        </p>
        <p className="mt-4 text-gray-700">
          At Behavior Analysis & Therapy Partners, we value your inquiries and feedback. 
          Please reach out to us using the information below or fill out the contact form. 
          A member of our team will get back to you shortly.
        </p>
      </div>
    </div>
  );
};

export default Contact;