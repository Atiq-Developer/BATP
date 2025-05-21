"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex p-3 md:p-3 md:flex hidden">
      {/* Left Content: Scrollable text */}
      <div className="flex-1 p-4 overflow-y-auto sm:pl-16 md:pl-20 lg:pl-24 xl:pl-32  pt-[190px] lg:pt-[220px] space-y-7">
       <div className="container">

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Legal Notice

        </h1>
        <div className="h-[3px] bg-blue-500 w-[46%] my-4 pl-9" />
       </div>
       
       <h1 className="text-xl font-semibold pt-5">Name of company</h1>
       <p className="text-xl text-gray-700">
       Behavior Analysis & Therapy Partners, LLC. </p>
        {/*  */}
        <h2 className="text-3xl font-semibold">Registered office
        </h2>
        <p className="text-lg text-gray-600">
        139 Montgomery Avenue, #110, Bala Cynwyd, PA 19004
        </p>
        
        {/*  */}
        <h2 className="text-3xl font-semibold">Contact details
        </h2>
        <p className="text-lg text-gray-600">
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

      {/* Right Image: Stays fixed as you scroll */}
      <div className="md:w-1/2 hidden md:block">
        <div className="sticky top-0 h-screen">
          <Image
            src="/images/legal1.jpg"  // Ensure this image exists in /public/images/
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
