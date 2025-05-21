"use client";
import React, { useState } from "react";
import "./Footer.css"; // Ensure you import the CSS file
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close modal if click is outside the modal content
    if (e.currentTarget === e.target) {
      setShowPrivacyModal(false);
      setShowTermsModal(false);
    }
  };

  return (
    <>
    <footer className="footer !mb-0 !pb-0  !bottom-0 !pt-9 px-7 bg-red-500 sm:bg-blue-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-red-500 ">
      <div className="footer-container max-w-[1500px] md:max-w-9xl mx-auto  text-[17px]  flex flex-wrap gap-8 bg-red-500 sm:bg-blue-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-indigo-500">
        {/* Left Section */}
        <div className="footer-left w-full md:w-auto">
          <Image
            src="/images/logo3.png"
            alt="Logo"
            className="footer-logo w-[200px] md:w-[500px] h-auto"
            height={500}
            width={500}
          />
          <div className="h-[2px] space-y-3 w-full bg-white mt-4" />
          <p className="max-w-[110%] md:w-[550px] pt-6 text-sm md:text-base">
            Behavior Analysis &amp; Therapy Partners (BAPT) is devoted to
            providing behavioral health care to those under 21 years of age.
            Starting in 2006, we are now a large company with 3 offices serving
            families in Philadelphia and the 3 surrounding counties: Montgomery,
            Bucks, and Delaware.
          </p>
          <p className="pt-4">
            If you want help for your family{" "}
            <Link
              href="/contact"
              className="text-white contrast-150 underline underline-offset-4 ml-1"
            >
              Contact Us.
            </Link>
          </p>
          <p className="pt-4">
            If you want to join our team{" "}
            <Link
              href="/join-our-team"
              className="text-white contrast-150 underline underline-offset-8 ml-1"
            >
              Click Here.
            </Link>
          </p>
          <div className="social-icons flex gap-4 mt-4">
            <Link href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
  
        {/* Right Section */}
       {/* Container */}
<div className="flex flex-wrap md:flex-col lg:flex-row">
  {/* Container: Ensures wrapping works properly */}
<div className="flex flex-wrap md:flex-col lg:flex-row">

{/* Right Section */}
<div className="footer-right w-full md:w-auto lg:w-auto pt-8 py-5 md:pt-28 lg:pl-[180px] xl:pl-[290px]">
  <h3 className="text-lg md:text-2xl font-bold mb-1 underline underline-offset-8 ">
    Explore
  </h3>
  <ul className="flex flex-col gap-1 space-y-4 pt-4 md:pt-9 md:pb-5 ">
    <li>
      <Link href="/">► Home</Link>
    </li>
    <li>
      <Link href="/about-us">► About Us</Link>
    </li>
    <li>
      <Link href="/services">► Services</Link>
    </li>
    <li>
      <Link href="/join-our-team" className="!w-full block p-0 flex">
        ► Join Our Team
      </Link>
    </li>
  </ul>
</div>

{/* Second Section (Legal, Privacy, Contact) */}
<ul className="w-full md:w-full lg:w-auto flex flex-col gap-2  space-y-4 md:pt-48 | xl:pr-[80px] mt-4">
  <li>
    <Link href="/legal-notice">► Legal Notice</Link>
  </li>
  <li>
    <Link href="/privacy-policy">► Privacy Policy</Link>
  </li>
  <li>
    <Link href="/contact">► Contact Us</Link>
  </li>
</ul>

</div>


</div>

      </div>
  
      <div className="text-center md:text-left sm:pl-11 md:ml-11 max-w-7xl mx-auto !pb-2 xl:-ml-7">
        <p>&copy; 2025 BATP, All Rights Reserved</p>
      </div>
  
      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="modal" onClick={handleModalClose}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowPrivacyModal(false)}>
              &times;
            </span>
            <h2>Privacy </h2>
            <p>
              BATP full contact details;
              <br />
              the types of personal data you collect;
              <br />
              where you got people’s data from, if it wasn’t from them;
              <br />
              why you have people’s information and what you’re doing with it;
              <br />
              your lawful basis and your legitimate interests where relevant;
              <br />
              who you share people’s information with;
              <br />
              how long you hold people’s information for before getting rid of it
              securely.
            </p>
          </div>
        </div>
      )}
  
      {/* Terms & Conditions Modal */}
      {showTermsModal && (
        <div className="modal" onClick={handleModalClose}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowTermsModal(false)}>
              &times;
            </span>
            <h2>Terms &amp; Conditions</h2>
            <p>[Insert full terms and conditions details here...]</p>
          </div>
        </div>
      )}
  
      <ul className="text-center md:text-right pr-16 md:pr-28  pb-11 ">
        <li>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowTermsModal(true);
            }}
          >
            Terms &amp; Conditions
          </Link>{" "}
          |{" "}
          <Link href="/privacy-policy">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </footer>
  </>
  
  );
};

export default Footer;
