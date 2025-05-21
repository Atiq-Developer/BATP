import { Button } from "@/components/ui/button"
import { CircleDot, Pill } from "lucide-react"
import Image from "next/image"

export default function HealthcareLanding() {
  return (
    <div className="min-h-[50vh] bg-[#1E2A4A] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 py-auto md:py-9  relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#B8D1FF]">BATP</h1>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-pink-400/20 p-2 rounded-full">
                  <CircleDot className="w-5 h-5 text-pink-400" />
                </div>
                <span className="text-gray-200">Reduce Anxiety</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-green-400/20 p-2 rounded-full">
                  <Pill className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-gray-200">No More Medications</span>
              </div>
            </div>

            <p className="text-gray-300 max-w-md">
              IF YOU ARE LOOKING FOR SOMEONE TO HELP YOU WITH YOUR MENTAL HEALTH NEEDS, YOU ARE IN THE RIGHT PLACE.
            </p>

            <Button className="bg-pink-200 text-gray-800 hover:bg-pink-300 rounded-full px-8 py-6 text-lg font-medium group transition-all duration-300">
              Book Consultation
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative -mb-9 lg:h-[550px] z-0">
            <Image
              src="/images/dr1.png"
              alt="Healthcare Professional"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Background Gradient Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl -z-10" />
      </div>
    </div>
  )
}

