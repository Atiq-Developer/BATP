"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero2: React.FC = () => {
  return (
    <section className="min-h-screen pt-11 mdLpt-20 flex p-3 md:p-7 hidden md:flex">
      {/* Left Content: Scrollable text */}
      <div className="w-1/2 hidden md:block">
        <div className="sticky top-0 h-screen">
          <Image
            src="/images/ab2.jpg"  // Ensure this image exists in /public/images/
            alt="Hero Image"
            fill
            className="object-cover"
          />
        </div>
      </div> 
       <div className="flex-1 p-8 overflow-y-auto    space-y-8">
       <div className="container">

       <h1 className="text-2xl -mt-[20px] lg:-mt-0 md:text-3xl text-black font-bold mb-4">
       Leadership Team
        </h1>       
       </div>
        <p className="text-lg text-black">
        At Behavior Analysis & Therapy Partners (BATP), our leadership team brings together a wealth of experience and expertise in behavioral health. Each member provides exceptional care and support to our clients and their families. </p>
        {/*  */}
        <h2 className="text-3xl font-bold">Joseph Cautilli, Ph.D.
        </h2> <h2 className="text-md font-bold">Co-Founder & Clinical Director  
        </h2>
        <p className="text-lg text-black">
        Dr. Joseph Cautilli is a licensed clinical psychologist, professional counselor, and a Board-Certified Behavior Analyst-D. With a career spanning since 1984, he has addressed the behavioral health and rehabilitation needs of children and adults facing severe mental health conditions, emotional behavior disorders, and psychiatric disorders, including autism spectrum disorders, depression, and developmental disabilities. Additionally, Dr. Cautilli has experience in criminal justice, focusing on the rehabilitation of offenders in both jails and the community. He is internationally recognized for his treatment work and adherence to ethical standards. 
        </p>
        
        {/*  */}
        <h2 className="text-3xl font-bold">Gary Ames, M.A., M.B.A.
        </h2><h2 className="text-md font-semibold">Co-Founder
        </h2>
        <p className="text-lg text-black">
        Gary Ames is a licensed clinical psychologist and co-founder of BATP. He is currently focused on special projects that aim to enhance the quality of work life within the organization.
He recently presented a poster at the 50th Applied Behavior Analysis International Convention in 2024, showcasing a BATP-sponsored neurofeedback project in two South Philadelphia schools. For more information  
 <Link href="/biofeedback-neurofeedback-eeg" className="text-blue-500 hover:text-blue-700"> Click Here </Link>
 BATP does not offer Neurofeedback.
Gary also runs a private practice specializing in neurofeedback.
Learn more at:
<Link href="https://www.CalmFocus.com" className="text-blue-500 hover:text-blue-700">www.CalmFocus.com</Link>
        </p>
       
        {/*  */}
        <h2 className="text-3xl font-bold">Halina Dziewolska
        </h2><h2 className="text-md font-semibold">Co-Manager & Clinical Supervisor

        </h2>
        <p className="text-lg text-black">
        Halina Dziewolska holds a master’s in education and an MS in Special Education with a concentration in Applied Behavior Analysis. As a Board-Certified Behavior Analyst and a licensed Behavior Specialist in Pennsylvania, she has dedicated her career to serving children with developmental disabilities and emotional-behavioral disorders since 2000. Halina has served on the faculty at St. Joseph’s University and Arcadia University, and she provides clinical supervision at BATP while co-managing the organization.
        </p><h2 className="text-3xl font-bold">Lynn Santilli Connor
        </h2><h2 className="text-lg font-semibold">Executive Director

        </h2>
        <p className="text-lg text-black">
        Lynn Santilli Connor is an accomplished executive with extensive experience directing client care and operational programs across diverse settings. A Board-Certified Behavior Analyst and Licensed Clinical Social Worker, Lynn is pursuing a psychology PhD. With 25 years of experience serving the behavioral and emotional needs of children, adolescents, and young adults with intellectual developmental delays (I/DD), depression, oppositional behavior, and severe psychiatric issues, Lynn excels at building high-performing teams and fostering relationships with community partners. At BATP, she leads as the Executive Director.       </p>
      
      </div>

      {/* Right Image: Stays fixed as you scroll */}
       

    </section>
  );
};

export default Hero2;
