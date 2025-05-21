"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const PrivacyPolicymble: React.FC = () => {
  return (
    <>
    <div className="flex flex-col  md:hidden md:flex-row items-center justify-between pt-7 pb-2 px-4">
  
  {/* Left: Image */}
  <div className="flex-1 p-5 overflow-y-auto sm:pl-16 md:pl-20 lg:pl-24 xl:pl-32  lg:pt-[220px] space-y-4">
      <div className="container">

       <h1 className="text-3xl md:text-5xl font-bold mb-1">
       Privacy Policy

       </h1>
       <div className="h-[3px] bg-blue-500 w-[46%] my-1 pl-9" />
      </div>
      
      <ul className="list-disc pl-5 text-gray-700 text-lg px-7">
      {/* <li> BATP full contact details;</li>
      <li> the types of personal data you collect;</li>
      <li> where you got people’s data from, if it wasn’t from them;</li>
      <li> why you have people’s information and what you’re doing with it;</li>
      <li> your lawful basis and your legitimate interests where relevant;</li>
      <li> who you share people’s information with; and</li>
       */}
       <li>Data will be stored and processed for the purpose of establishing contact. You may revoke your consent to store your information at any time.</li>
      {/* <li> how long you hold people’s information for before
        <Link href="https://ico.org.uk/for-organisations/advice-for-small-organisations/whats-new/blogs/practical-methods-for-destroying-documents-that-are-no-longer-needed/" className="text-blue-500 hover:text-gray-600"> getting rid of it securely.</Link></li> */}
      </ul>
      
   
       {/*  */}
       {/* <h2 className="text-3xl font-semibold">Business ID no.
       </h2>
       <p className="text-lg text-gray-600">
       Please enter your business ID no.
       </p>
       <h2 className="text-3xl font-semibold">VAT no.
       </h2>

       <p className="text-lg text-gray-600">
       Please enter your VAT no.
       </p>


       <h2 className="text-3xl font-semibold">Regulatory authority</h2>

       <p className="text-lg text-gray-600">
       Please enter your regulatory authority
1930 S. Broad Street, #26, Philadelphia, PA 19145
2132 S. 10th St. Philadelphia, PA 19148
       </p> */}
      
      
     </div>
  {/* Right: Heading and Paragraph */}
  <div className="md:w-1/2 w-full text-left mt-2 md:mt-0 md:pl-16 ">
    <Image
        src="/images/privacy1.jpg" // Replace with your image path
       alt="Hero Image"
       width={1600}
       height={1600}
       className="object-cover rounded p-3"
       />
  </div>
</div>
  </>
  );
};

export default PrivacyPolicymble;
