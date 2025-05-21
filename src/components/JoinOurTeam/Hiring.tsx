"use client";
import React from "react";
import Image from "next/image";

const Hiring: React.FC = () => {
  return (
    <div className="hiring-section p-8 text-center">
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
        {/* Job 1 */}
        <div className="job w-full md:w-[650px] p-4  flex flex-col">
          <Image
            src="/images/join1.jpeg"
            alt="Behavior Consultant (BC)"
            width={600}
            height={400}
            className="w-full p-9 object-contain rounded"
          />
          <h2 className="mt-4 text-2xl text-blue-500 font-bold">
            Behavior Consultant (BC)
          </h2>
          <h3 className="py-5 text-lg text-gray-700  font-semibold">Job Description</h3>
          <p className="mt-1 line-height-5 text-gray-600 text-left px-5 " style={{ lineHeight: '1.9' }}>
            The Behavior Consultant (BC) provides comprehensive behavioral
            health services, working closely with clients to assess needs and
            develop individualized treatment plans. Supervision provided at no
            cost.
          </p>
          <h4 className="py-4 text-lg text-gray-700 font-semibold">
            Key Responsibilities
          </h4>
          <div className="mt-1 list-disc list-inside  text-gray-600 text-left px-5"  style={{ lineHeight: '2.1' }} >
            <p>Conduct comprehensive multi-systemic assessments.    </p>
           <p>
           Develop and implement individualized treatment plans.
           </p>
           <p>
           Provides behavioral consultation and training to parents and teachers around child behaviors and skill development.
           </p>
           <p>
           Ensure BHT team is effectively implementing treatment plans.
           </p>
          </div>
        </div>

        {/* Job 2 */}
        <div className="job w-full md:w-[600px] p-3 flex flex-col">
          <Image
            src="/images/join3.webp"
            alt="Mobile Therapist (MT)"
            width={600}
            height={400}
            className="w-full p-9 object-cover rounded"
          />
          <h2 className="mt-4 text-2xl text-blue-500 font-bold  pt-4">Mobile Therapist (MT)</h2>
          <h3 className="mt-2 text-lg text-gray-700 font-semibold">Job Description</h3>
          <p className="mt-1 text-gray-600 text-left px-6" style={{ lineHeight: '1.8' }}>
          The Mobile Therapist (MT) provides Intensive Behavioral Health Services (IBHS) to children, youth, and young adults in their homes, schools, or communities. As part of a collaborative team with Behavior Consultants (BCs) and Behavioral Health Technicians (BHTs), the MT develops and implements individualized treatment plans. 

          </p>
          <h4 className="mt-3 text-lg text-gray-700 font-semibold">Responsibilities</h4>
          <p className="mt-1 text-gray-600 text-left px-5">
          Conduct comprehensive assessments and develop treatment plans.  

          </p>
          <p className="mt-1 text-gray-600 text-left px-5">
          Provide individual, group and family therapy sessions  

          </p>
        </div>

        {/* Job 3 */}
        <div className="job w-full md:w-[650px] p-1  flex flex-col">
          <Image
            src="/images/join2.jpg"
            alt="UX Designer"
            width={600}
            height={400}
            className="w-full p-9 object-cover rounded"
          />
          <h2 className="mt-4 text-2xl text-blue-500 font-bold">Behavioral Health Technician (BHT)
          </h2>
          <h3 className="mt-2 text-lg text-gray-700 font-semibold">Job Description</h3>
          <p className="mt-1 text-gray-600 text-left px-5 " style={{ lineHeight: '-1' }}>
          The Behavioral Health Technician (BHT) implements behavioral health services under the close supervision of a Behavior Consultant (BC). The BHT works one-on-one or in group settings with clients aged 5-21, their families, and other involved professionals. Paid training provided to employees. 

          </p>
          <h4 className="mt-3 text-lg text-gray-700   font-semibold">Responsibilities</h4>
          <p className="mt-1 text-gray-600 text-left px-5">
          Implement evidence-based strategies from the treatment plan.  Keep the child engaged and motivated. Create a therapeutic environment. 

          </p>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
