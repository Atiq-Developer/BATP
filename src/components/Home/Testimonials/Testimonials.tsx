"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {  AnimatePresence } from "framer-motion"
import { motion } from "framer-motion";
import Image from "next/image";

const MotionImage = motion(Image);

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    content:
      "After years of struggling with anxiety and self-doubt, working with Dr.Halina Dziewolska was life-changing. Her evidence-based approach provided me with practical tools to challenge negative thought patterns, and I now feel empowered to face each day with confidence",
    image: "/images/t3.avif",
  },
  {
    id: 2,
    name: "Emily Davis",
    role: "Product Manager",
    content:
      "I came to therapy feeling overwhelmed by depression and hopelessness. Dr.Gary Ames's compassionate guidance helped me break free from the cycle of despair. With personalized strategies and consistent support, I've reclaimed joy and built healthier, lasting habits.   ",
    image: "/images/t4.jpg",
  },
  {
    id: 3,
    name: "Michael Wilson",
    role: "CEO",
    content:
      "Dr. Joseph Cautilli truly understands the complexities of mental health. Through our sessions, I learned effective techniques to manage stress and improve my relationships. I now lead a more balanced life and am incredibly grateful for the positive changes she has helped me achieve",
    image: "/images/t5.jpg",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Image */}
        <div className="relative h-[400px] lg:h-[540px] rounded-2xl overflow-hidden">
          <AnimatePresence mode="wait">
          <MotionImage
    key={currentIndex}
    src={testimonials[currentIndex].image}
    alt="Testimonial"
    fill  // This makes the image fill the parent container
    className="object-cover"
    initial={{ opacity: 0, x: 100, filter: 'blur(0px)' }}
    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.5 }}
  />

          </AnimatePresence>
        </div>

        {/* Right side - Content */}
        <div className="relative">
          <h2 className="text-4xl text-blue-900 font-bold mb-8">Client Testimonials</h2>

          {/* Navigation */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1}/{testimonials.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={previous}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="relative bg-muted/50 rounded-2xl p-8 lg:ml-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="text-4xl text-muted-foreground"></div>
                <p className="text-lg text-muted-foreground">{testimonials[currentIndex].content}</p>
                <div className="pt-4">
                  <h3 className="font-semibold text-lg">{testimonials[currentIndex].name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
                <div className="absolute bottom-4 right-4 bg-background rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-sm font-medium">{String(currentIndex + 1).padStart(2, "0")}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

