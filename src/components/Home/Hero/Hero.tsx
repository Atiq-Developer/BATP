"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

const Hero: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section className="min-h-screen flex p-3 md:p-7">
      {/* Left Content: Scrollable text */}
      <div className="flex-1 p-8 overflow-y-auto pt-[170px] lg:pt-[170px] space-y-3">
       <div className="container">

        <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4">
          Behavior Analysis & <br /> Therapy Partners (BATP)
        </h1>
        <div className="h-[3px] bg-blue-500 w-[86%] my-4 pl-9" />
       </div>
        <p className="text-lg text-gray-700">
          We help children, teens, and young adults overcome behavioral challenges and thrive.
        </p><p className="text-lg text-gray-700">
          At BATP, we use Applied Behavior Analysis (ABA) and other proven methods to provide personalized care. Our services are designed to improve the quality of life for the child and family.
        </p>
        {/*  */}
        <h2 className="text-3xl font-semibold">Who We Serve
        </h2>
        <p className="text-lg text-gray-600">
          We work with children and young adults aged birth to 21 in:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>Philadelphia</li>
          <li className="relative flex items-center gap-2 ">
        <span className="font-bold text-md ">• </span> &nbsp; A cluster of South Philadelphia Schools
            <div 
              className="relative inline-block mt-2 mb-16 "
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <FaInfoCircle className="text-blue-500 text-md -mb-52 top-20 mt-5 " />
              {showTooltip && (
                <div className="absolute z-10 w-[270px] -left-[210px] sm:-left-60  sm:w-[410px]    md:-left-[323px] md:w-[345px] lg:w-[460px] p-4 rounded-lg shadow-lg border bg-gray-300 border-gray-200  lg:-left-30 bottom-0 ">
                  <div className="text-sm lg:text-base text-gray-700">
                    <ul className="list-disc list-inside">
                      <li>Educational Options Program - South Philadelphia High School</li>
                      <li>Preparatory Charter School of Mathematics, Tech and Careers</li>
                      <li>Sts John Neumann and Maria Goretti Catholic High School</li>
                      <li>Creative and Performing Arts High School (CAPA)</li>
                      <li>Mastery Charter School - Thomas Campus</li>
                      <li>Girard Academic Music Program (GAMP)</li>
                      <li>Universal Audenried Charter School</li>
                      <li>South Philadelphia High School</li>
                      <li>Crooked Places Made Straight</li>
                      <li>Horace Furness High School</li>
                      <li>Academy at Palumbo</li>
                    </ul>
                  </div>
                  {/* <div className="absolute top-2 left-3 w-3 h-3 bg-white border-t border-l border-gray-200 transform rotate-45"></div> */}
                </div>
              )}
            </div>
          </li>
          <li>Bucks, Montgomery, and Delaware Counties</li>
        </ul>
        {/*  */}
        <h2 className="text-3xl font-semibold">Our Services
        </h2>
        <p className="text-lg text-gray-600">
          We offer:

        </p>
        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>Applied Behavior Analysis (ABA): Individual and group sessions for ages 3–21.
          </li>
          <li>Intensive Behavioral Health Services: Individual and group support for ages 5–21.
          </li>
          <li>Early Intervention Services: Specialized care for children from birth to age 5.
          </li>
        </ul>
        <Link href="services" className="text-blue-500 underline underline-offset-4 hover:text-blue-600">
          Learn more about our services</Link>
        {/*  */}
        <h2 className="text-3xl font-semibold">What is Applied Behavior Analysis (ABA)?
        </h2>
        <p className="text-lg text-gray-600">
          ABA is a leading, evidence-based approach to helping children with autism and other behavioral challenges. It focuses on teaching positive behaviors and reducing harmful ones through personalized learning techniques.

        </p>
        <h2 className="text-3xl font-semibold">How We Work

        </h2>

        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>
            <span className="font-semibold">Assessment:</span> We start by understanding your child&apos;s needs through interviews, assessments, and observation.<ul className="list-disc list-inside text-lg text-gray-600 "><li><span className="font-semibold">Plan:</span> A licensed Behavior Consultant creates a Functional Behavior Analysis with a detailed treatment plan.
            </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Team:</span> Your child&apos;s care team may include a Behavior Consultant and/or a Mobile Therapist. There may also be a one-on-one trained specialist called a Behavior Health Technician.
          </li>
          <li>
            <span className="font-semibold">Support:</span> We provide care in your child&apos;s natural environment—home, school, or community—to ensure comfort and success.
          </li>
        </ul>

        {/*  */}

        <h2 className="text-3xl font-semibold pt-4">Payment Options</h2>

        <p className="text-lg text-gray-600">
        All services are free to families .
          <br />
          <br />
          Nearly all individuals under 21 are eligible for our services at no cost.  We are paid by PA Medicaid. If you do not have coverage yet, call us. If you do have PA Medicaid contact us to pursue authorization for services.


        </p>
        <p className="text-lg text-gray-600">At BATP, we are here to help your child grow, learn, and thrive. Let&apos;s take the first step together.
        </p>
        <p>Call  <span className="font-semibold">BATP</span>  <br />
          267-507-2719 – Philadelphia <br />
          610-664-6200 - Delaware, Montgomery, Bucks counties. <br />
          or
          <Link href="/contact" className="text-blue-500 underline underline-offset-4 hover:text-blue-600">
            <span className="font-semibold ml-2">Contact Us </span> </Link>
        </p>

      </div>

      {/* Right Image: Stays fixed as you scroll */}
      <div className="w-1/2 hidden md:block">
        <div className="sticky top-0 h-screen">
          <Image
            src="/images/hero.jpg"  // Ensure this image exists in /public/images/
            alt="Hero Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
