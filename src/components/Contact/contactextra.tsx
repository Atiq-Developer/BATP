"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Services from "@/app/services/page";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
    location: "",
    job: "",  // Add job selection
    attachments: [] as File[]  // Add attachments
  });

  const locations = [
    { name: "Philadelphia" },
    { name: "Montgomery, Bucks, or Delaware county" },
  ];

  const job = [
    { name: "Services" },
    { name: "Employment" },
    { name: "Something else" },
  ];

  const locationJobEmails = [
    { location: "Philadelphia", job: "Services", email: "email1@example.com" },
    { location: "Philadelphia", job: "Employment", email: "2ndemail@example.com" },
    { location: "Philadelphia", job: "Something else", email: "3rdemail@example.com" },
    { location: "Montgomery, Bucks, or Delaware county", job: "Services", email: "4themail@example.com" },
    { location: "Montgomery, Bucks, or Delaware county", job: "Employment", email: "5themail@example.com" },
    { location: "Montgomery, Bucks, or Delaware county", job: "Something else", email: "6themail@example.com" },
  ];

  // Add this helper function
  const getRecipientEmail = (location: string, job: string) => {
    const mapping = locationJobEmails.find(
      item => item.location === location && item.job === job
    );
    return mapping?.email || "default@example.com";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;  // Type assertion
    const { name, value, type, checked } = target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Add file handling
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        attachments: Array.from(e.target.files)
      });
    }
  };
  
  // Update handleSubmit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.location || !formData.job) {
      alert("Please select both a location and job type.");
      return;
    }

    const recipientEmail = getRecipientEmail(formData.location, formData.job);
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'attachments') {
        formDataToSend.append(key, value.toString());
      }
    });
    
    formData.attachments.forEach((file) => {
      formDataToSend.append('attachments', file);
    });
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      });
  
      if (res.ok) {
        alert("Form submitted successfully!");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          consent: false,
          location: "",
          job: "",
          attachments: []
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      alert("Error submitting form. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto px-4 md:px-10 pt-24 py-16 grid grid-cols-1 md:grid-cols-7 gap-12">
  
  {/* Left Section - Contact Info */}
  <div className="text-b0 md:col-span-2 pl-11 ">
    <h2 className="text-2xl text-blue-500 md:text-4xl font-bold">Get in touch</h2>
    <hr className="border-blue-500 w-36 h-[3px] mt-2 mb-4" />
    <div className="mt-4">
      <div className="flex items-center">
        <Image src="/images/con7.jpg" alt="Phone" width={104} height={104} className="w-11 h-11 contrast-100" />
        <div className="ml-4">
          <p className="font-semibold">Phone</p>
          <p>610-664-6200</p>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <Image src="/images/con8.jpg" alt="Email" width={104} height={104} className="-ml-3 w-16 h-16" />
        <div>
          <p className="font-semibold">Email</p>
          <Link href="mailto:chantellebosier@batp.org" className="">chantellebosier@batp.org</Link>{" "}
    
        </div>
      </div>
    </div>
  </div>

  {/* Center Section - Bigger Contact Form */}
  <div className="md:col-span-3  ">
    <h2 className="text-3xl md:text-4xl text-blue-500 font-bold ">Contact us</h2>
    <hr className="border-blue-500 w-20 mt-2 mb-4 " />
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="border border-gray-400 px-5 py-3 w-full rounded" required />
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="border border-gray-400 px-5 py-3 w-full rounded" required />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border border-gray-400 px-5 py-3 w-full rounded" required />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="border border-gray-400 px-5 py-3 w-full rounded" />
      </div>
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="border border-gray-400 px-5 py-3 w-full rounded h-32" required></textarea>

      {/* Location Selection */}
      <div className="flex flex-col space-y-2">
        <p className="text-lg font-semibold">Select a location:</p>
        {locations.map((loc, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input type="radio" name="location" value={loc.name} onChange={handleChange} className="form-radio text-blue-600" />
            <span>{loc.name}</span>
          </label>
        ))}
      </div>

      {/* Service Selection */}
      <div className="flex flex-col space-y-2">
        <p className="text-lg font-semibold">Are you interested in:</p>
        {job.map((ser, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input type="radio" name="job" value={ser.name} onChange={handleChange} className="form-radio text-blue-600" />
            <span>{ser.name}</span>
          </label>
        ))}
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-2">
        <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="mt-1" required />
        <p className="text-sm text-gray-700">
        
        Data will be stored and processed for the purpose of establishing contact. You may revoke your consent to store your information at any time.

        </p>
      </div>

      {/* Submit Button */}
      <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition w-full">
        Send
      </button>
    </form>
  </div>

  {/* Right Section - Let's Talk */}
  <div className="md:col-span-2"> 
    <h2 className="text-2xl md:text-3xl text-blue-500 font-bold">Let&apos;s Talk!</h2>
    <hr className="border-blue-500 w-16 mt-2 mb-4" />
    <p className="text-gray-700">
      Have questions? Interested in working with us? Send us an{" "}
      <Link href="mailto:chantellebosier@botp.org" className="text-red-600 underline">Email</Link>{" "}
      to schedule a talk with us.
    </p>
    <p className="mt-4 text-gray-700">
      At Behavior Analysis & Therapy Partners, we value your inquiries and feedback. Please reach out to us using the information below or fill out the contact form. A member of our team will get back to you shortly.
    </p>
  </div>

</div>

  );
};

export default Contact;
