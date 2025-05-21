"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero1mble: React.FC = () => {
  return (
  <>
     {/* 2nd */}
     <div className="flex flex-col px-3 md:hidden flex flex-row items-center justify-between pt-11 pb-5 px-4">
     <div className="md:w-1/2 w-full text-left mt-8 pt-[90px]  md:mt-0 md:pl-16 ">
       {/* <div className="container">

<h1 className="text-3xl md:text-5xl text-blue-500 font-bold mb-4">
 About Us
 </h1>        <h2 className="text-2xl md:text-4xl font-bold mb-4">
 Who We Are
 </h2>
</div> */}
    
   </div>
   {/* Left: Image */}
   <div className="w-full max-w-5xl mx-auto">
       <div className="container">

       <h1 className="text-3xl md:text-5xl text-blue-500 font-bold mb-7">
        About Us
        </h1>        <h2 className="text-2xl md:text-4xl font-bold mb-3">
        Who We Are
        </h2>
       </div>
        <p className="text-lg  text-black ">
        Founded in 2006, Behavior Analysis & Therapy Partners (BATP) has grown to become a leading provider of behavioral health services, employing over 100 dedicated professionals. We proudly serve South Philadelphia, including approximately a dozen schools, and extend our services through Medicaid to families in Bucks, Montgomery, and Delaware counties.
        </p>
        {/*  */}
        <h2 className="text-3xl font-semibold mt-4 ">Our Mission
        </h2>
        <p className="text-lg text-black">
        Our mission is to facilitate recovery and improve the overall quality of life for children and adults with behavioral health problems and developmental disabilities. Using an individualized behavior analytic case formulation and the evidence-based treatments from applied behavioral science, Behavior Analysis & Therapy Partners (BATP) seeks to improve the behavioral health and wellbeing of children, families, and adults. Our goal is to strengthen the community’s capacity to deal with behavioral health issues through the delivery of behavior analytically based, time limited, accountable effective and accessible treatment oriented behavioral services. We believe that the highest quality services are best provided through theoretically guided, highly trained, and clinically competent behavioral health professionals in collaboration with families, public agencies, and involved community members. We respect families and seek to empower families to live life in accord with their higher values and to help their children overcome their behavioral health disabilities. We are committed to supporting and guiding our staff to help them grow in a healthy, friendly, community-oriented environment. 
        </p>
        <br />
         <p className="text-lg text-black">
         At BATP, we transform lives by providing the gold standard of behavioral health care for children: Applied Behavior Analysis (ABA) and Intensive Behavioral Health Services (IBHS). Our approach is rooted in comprehensive assessments of each child’s behavior and environment, allowing us to develop precise intervention plans aimed at achieving tangible goals. 

         </p>
        {/*  */}
        <h2 className="text-3xl font-semibold mt-4 ">Our Approach
        </h2>
        <p className="text-lg text-black mb-4">
        We understand that effective behavioral health care requires a thorough assessment process. By analyzing each child’s unique circumstances, we can create individualized intervention plans that foster lasting positive change. Our skilled staff is dedicated to implementing these plans and ensuring that families receive ongoing support and guidance. 

        </p>
       
        {/*  */}
        <h2 className="text-3xl font-semibold mt-4 ">Our Commitment
        </h2>
        <p className="text-lg text-black">
        With nearly two decades of experience, our commitment to delivering exceptional care and support to our community is unwavering. We continually strive to enhance our services and adapt to the needs of the families we serve, making a meaningful impact in their lives. 

        </p>
      
      </div>

   {/* Right: Heading and Paragraph */}
   <Image
          src="/images/ab1.jpg"      // Replace with your image path
        alt="Hero Image"
        width={1600}
        height={1600}
        className="object-cover rounded p-3"
        />
 </div>

  </>
  );
};

export default Hero1mble;
