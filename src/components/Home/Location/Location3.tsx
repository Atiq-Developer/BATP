"use client";
import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

const locations = [
  {
    city: "Bala Cynwyd Office",
    address: "139 Montgomery Avenue, #110  Bala Cynwyd, PA 19004  ",
    number: "610-664-6200",
    fax: "610-664-6200",
  },
  {
    city: "Philadelphia Office",
    address: "1930 S. Broad Street, #26  Philadelphia, PA 19145 ",
    number: "267-507-2719",
    fax: "267-507-2720",
  },
  {
    city: "South Philadelphia Office",
    address: "2132 South 10th St. Philadelphia, PA 19148  ",
    number: "267-507-2719",
    fax: "267-507-2720",
  },
];

const Location3: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Section */}
        <div className="flex-1 md:pl-10">
          <h2 className="text-4xl font-extrabold text-blue-500 mb-4">
            Check Our Locations
          </h2>
          <p className="text-gray-700 mb-6">
            Visit one of our offices to meet our dedicated team and explore our services.
          </p>
          <div className="space-y-4">
            {locations.map((loc, index) => (
              <div key={index} className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900">{loc.city}</h3>
                  <p className="text-gray-700">{loc.address}</p>
                  {loc.number && (
                    <p className="text-gray-800">
                      Phone: <span className="font-semibold">{loc.number}</span>
                    </p>
                  )}
                  {loc.fax && (
                    <p className="text-gray-800">
                      Fax: <span className="font-semibold">{loc.fax}</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Section */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/l3.jpg"
            alt="Our Location"
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Location3;
