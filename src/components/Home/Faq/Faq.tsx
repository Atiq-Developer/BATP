'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is ABA, and who does it help?',
    answer:
      'ABA is the gold standard for treating autism and many other behavioral challenges in children, youth, and young adults. The emphasis is on behavior modification through learning techniques. Reinforcing positive behavior is at the heart of this approach.',
  },
  {
    question: 'What is the first step in treatment, and who prepares the plan?',
    answer:
      'The first step toward treatment involves interviews, observations, and assessments, leading to a Functional Behavior Assessment and a Treatment Plan prepared by a licensed Behavior Consultant.',
  },
  {
    question: ' Who will be part of my child’s therapy team?',
    answer:
      'Your dedicated team may include a Behavior Consultant, one-on-one specialists, Behavior Health Technicians, and possibly a Mobile Therapist.',
  },
  {
    question: 'How does BATP ensure effective therapy, and where are services provided?',
    answer:
      'We prioritize continuous training and adhere to rigorous standards, ensuring that all interventions are evidence-based/informed and effective. All services are conducted in the child’s natural environments—home, school, or community—ensuring a supportive and familiar setting.',
  },
  {
    question: 'Is BATP covered by insurance?',
    answer:
      'BATP is normally paid in full by insurance provided to citizens of the Commonwealth of Pennsylvania. If you don’t already have public insurance coverage, we can assist you in exploring options.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50 px-6 md:px-16 lg:px-32">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold text-center text-blue-800 mb-8"
      >
        Frequently Asked Questions
      </motion.h2>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left text-lg font-semibold text-blue-700 hover:bg-blue-50 transition"
            >
              {faq.question}
              <ChevronDown
                className={`w-6 h-6 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-5 pb-5 text-gray-700"
              >
                {faq.answer.split('\n').map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="mb-2"
                  >
                    {line}
                  </motion.p>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
