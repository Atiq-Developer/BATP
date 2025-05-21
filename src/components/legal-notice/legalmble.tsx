"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Heromble: React.FC = () => {
  return (
   <>
     <div className="flex flex-col  md:hidden md:flex-row items-center justify-between pt-11 pb-2 px-4">
   
   {/* Left: Image */}
   <div className="flex-1 px-8 overflow-y-auto sm:pl-16 md:pl-20 lg:pl-24 xl:pl-32  pt-[150px] lg:pt-[220px] space-y-4">
       <div className="container">

        <h1 className="text-3xl md:text-5xl font-bold mb-0">
        Legal Notice

        </h1>
        <div className="h-[3px] bg-blue-500 w-[46%]  pl-9" />
       </div>
       
       <h1 className="text-xl font-semibold pt-">Name of company</h1>
       <p className="text-xl -mt-3 text-gray-700">
       Behavior Analysis & Therapy Partners, LLC. </p>
        {/*  */}
        <h2 className="text-3xl font-semibold ">Registered office
        </h2>
        <p className="text-lg text-gray-600 -mt-3">
        139 Montgomery Avenue, #110, Bala Cynwyd, PA 19004
        </p>
        
        {/*  */}
        <h2 className="text-3xl font-semibold">Contact details
        </h2>
        <p className="text-lg -mt-3 text-gray-600">
        139 Montgomery Avenue, #110, Bala Cynwyd, PA 19004

        </p> <p className="text-lg text-gray-600">
        <Link href="mailto:chantellebosier@batp.org" className="">chantellebosier@batp.org</Link>{" "}
    
        </p>
       
    
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
   <div className="md:w-1/2 w-full text-left mt-8 md:mt-0 md:pl-16 ">
     <Image
           src="/images/legal1.jpg"// Replace with your image path
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

export default Heromble;
