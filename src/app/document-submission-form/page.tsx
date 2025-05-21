"use client";
import React, { useState } from "react";

const DOCUMENT_TYPES = [
  { id: "resume", required: true },
  { id: "degree", required: true },
  { id: "idProof", required: true },
  { id: "experience", required: false },
  { id: "certification1", required: false },
  { id: "certification2", required: false },
  { id: "other1", required: false },
  { id: "other2", required: false },
  { id: "other3", required: false },
  { id: "other4", required: false },
  { id: "other5", required: false },
  { id: "other6", required: false },
];

const LOCATIONS = [
  "Bala Cynwyd Office",
  "Philadelphia Office",
  "South Philadelphia Satellite Office",
];

const JOB_POSITIONS = [
  "Behavior Consultant (BC)",
  "Mobile Therapist (MT)",
  "Registered Behavior Technician (RBT)",
  "Behavior Technician (BT)",
  "Administration",
];

const JobApplication = () => {
  const [currentStep, setCurrentStep] = useState<
    "emailVerification" | "formSubmission"
  >("emailVerification");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [verificationError, setVerificationError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    position: "",
    location: "",
  });

  const [files, setFiles] = useState<Record<string, File | null>>(
    DOCUMENT_TYPES.reduce((acc, doc) => ({ ...acc, [doc.id]: null }), {})
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSendVerificationCode = async () => {
    if (!email) {
      setEmailError("Please enter your email address");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsSendingCode(true);
    setEmailError("");

    try {
      const response = await fetch("/api/send-email?action=send-verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send verification code");
      }

      alert("Verification code sent to your email. Please check your inbox.");
    } catch (error) {
      setEmailError(
        error instanceof Error
          ? error.message
          : "Failed to send verification code"
      );
    } finally {
      setIsSendingCode(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode) {
      setVerificationError("Please enter the verification code");
      return;
    }

    try {
      const response = await fetch("/api/send-email?action=verify-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, code: verificationCode }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Verification failed");
      }

      setCurrentStep("formSubmission");
      setVerificationError("");
    } catch (error) {
      setVerificationError(
        error instanceof Error ? error.message : "Verification failed"
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (
    docId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        setSubmitError(`Only PDF, DOC, and DOCX files are allowed`);
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setSubmitError(`File size should be less than 5MB`);
        return;
      }
    }

    setFiles((prev) => ({ ...prev, [docId]: file }));
    setSubmitError("");
  };

  const removeFile = (docId: string) => {
    setFiles((prev) => ({ ...prev, [docId]: null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);
    setIsSubmitting(true);

    try {
      const formPayload = new FormData();
      formPayload.append("fullName", formData.fullName);
      formPayload.append("email", email);
      formPayload.append("phone", formData.phone || "");
      formPayload.append("position", formData.position);
      formPayload.append("location", formData.location);

      Object.entries(files).forEach(([docId, file]) => {
        if (file) formPayload.append(docId, file);
      });

      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Submission failed");
      }

      setSubmitSuccess(true);
      resetForm();
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

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      position: "",
      location: "",
    });
    setFiles(
      DOCUMENT_TYPES.reduce((acc, doc) => ({ ...acc, [doc.id]: null }), {})
    );
  };

  if (currentStep === "emailVerification") {
    return (
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-8">
            <h2 className="text-3xl font-bold text-white text-center">
              Email Verification
            </h2>
          </div>

          <div className="p-8 space-y-8">
            <div className="space-y-3">
              <label className="block text-lg font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-5 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  placeholder="your@email.com"
                />
              </div>
              {emailError && (
                <p className="mt-2 text-red-600 text-sm">{emailError}</p>
              )}
            </div>

            <div>
              <button
                onClick={handleSendVerificationCode}
                disabled={isSendingCode}
                className={`w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 ${
                  isSendingCode
                    ? "opacity-80 cursor-not-allowed"
                    : "hover:shadow-md"
                }`}
              >
                {isSendingCode ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending Code...
                  </>
                ) : (
                  "Send Verification Code"
                )}
              </button>
            </div>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-gray-100"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-gray-400 text-lg font-medium">
                  OR
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-lg font-medium text-gray-700">
                Verification Code <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className="block w-full px-5 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center tracking-widest"
                  placeholder="• • • • • •"
                  maxLength={6}
                  required
                />
              </div>
              {verificationError && (
                <p className="mt-2 text-red-600 text-sm">{verificationError}</p>
              )}
            </div>

            <div>
              <button
                onClick={handleVerifyCode}
                className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 hover:shadow-md"
              >
                Verify Code
              </button>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-6 text-center border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Didn't receive the code?{" "}
              <button
                onClick={handleSendVerificationCode}
                className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
              >
                Resend code
              </button>{" "}
              or{" "}
              <button
                onClick={() => setEmail("")}
                className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
              >
                Change email
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-2">
        Document Submission Form
      </h2>
      <p className="text-gray-600 mb-6">
        Please complete this form with required documents.
      </p>

      <div className="mb-4 p-4 bg-blue-100 text-blue-700 rounded">
        <p>Verified email: {email}</p>
        <button
          onClick={() => {
            setCurrentStep("emailVerification");
            setVerificationCode("");
          }}
          className="text-blue-600 hover:text-blue-800 text-sm mt-1"
        >
          Change email
        </button>
      </div>

      {submitError && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {submitError}
        </div>
      )}

      {submitSuccess && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
          Thank you for your application! Our HR team will review your documents
          and contact you through the email you provided if they wish to proceed
          with your candidacy.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Position *</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="">Select Position</option>
              {JOB_POSITIONS.map((pos) => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Location *</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="">Select Location</option>
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Upload Required Documents</h3>
          <p className="text-sm text-gray-600 mb-4">
            Please upload all required documents (PDF, DOC, or DOCX, max 5MB
            each)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DOCUMENT_TYPES.map((doc, index) => (
              <div key={doc.id} className="border rounded p-4">
                <label className="block text-sm font-medium mb-2">
                  Document {index + 1} {doc.required && "*"}
                </label>
                {files[doc.id] ? (
                  <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
                    <span className="truncate">{files[doc.id]?.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(doc.id)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(doc.id, e)}
                    accept=".pdf,.doc,.docx"
                    className="w-full px-3 py-2 border rounded"
                    required={doc.required}
                  />
                )}
                <p className="text-xs text-gray-500 mt-1">Max file size: 5MB</p>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default JobApplication;
