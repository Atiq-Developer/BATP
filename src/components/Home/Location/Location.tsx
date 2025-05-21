"use client";
import Image from "next/image";

export default function Location() {
  const locations = [
    {
      city: "Bala Cynwyd Office",
      address: "139 Montgomery Avenue, #110  Bala Cynwyd, PA 19004  ",
      number: "610-664-6200",
      fax: "610-664-6200",
      image: "/images/l3.jpg",
    },
    {
      city: "Philadelphia Office",
      address: "1930 S. Broad Street, #26  Philadelphia, PA 19145 ",
      number: "267-507-2719",
      fax: "267-507-2720",
      image: "/images/l4.jpg",
    },
    {
      city: "South Philadelphia Office",
      address: "2132 South 10th St. Philadelphia, PA 19148  ",
      image: "/images/l5.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#f5f5f5]">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-600 uppercase tracking-wide mb-12">
        Our Locations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {locations.map((location, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl group shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            {/* Background Image */}
            <Image
              src={location.image}
              alt={location.city}
              width={500}
              height={350}
              className="w-full h-[300px] object-cover transform scale-100 group-hover:scale-105 transition-all duration-500"
            />

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[1.5px]"></div>

            {/* Text Container */}
            <div className="absolute bottom-0 left-0 w-full p-6 text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <h3 className="text-2xl font-bold">{location.city}</h3>
              <p className="text-sm opacity-90 mt-1">{location.address}</p>

              {/* Phone & Fax (conditionally rendered) */}
              {location.number && (
                <p className="text-sm mt-2">
                  📞Phone Number :{" "}
                  <span className="font-semibold">{location.number}</span>
                </p>
              )}
              {location.fax && (
                <p className="text-sm mt-1">
                  📠Fax : <span className="font-semibold">{location.fax}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
