"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Applied Behaviour Analysis (ABA)",
    description: "Individual and group sessions for ages 3–21.",
    img: "/images/support.png",
  },
  {
    title: "Intensive Behavioural Health Services",
    description: "Individual and group support for ages 5–21.",
    img: "/images/lifeline.png",
  },
  {
    title: "Early Intervention Services",
    description: "Specialized care for children from birth to age 5.",
    img: "/images/family.png",
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-blue-700">Our Services</h2>
      <p className="text-gray-600 mt-2 max-w-xl mx-auto">
        Providing specialized behavioral health services to support children and youth.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(1,1,1,0.2)" }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center hover:bg-gradient-to-l from-blue-100 via-blue-200 to-blue-300 hover:text-black cursor-pointer"
          >
            <Image
              src={service.img} // ✅ Fixed the src reference
              alt={service.title} // ✅ Using the service title as alt text
              className="text-5xl"
              width={100}
              height={100}
            />
            <h3 className="text-2xl md:text-4xl  font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-600 mt-2 text-lg  text-black">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
