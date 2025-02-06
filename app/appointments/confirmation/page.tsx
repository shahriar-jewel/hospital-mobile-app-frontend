"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MobileLayout } from "@/components/layouts/mobile-layouts"

export default function AppointmentConfirmationPage() {
  const router = useRouter()

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-full bg-white">
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          {/* Confetti Animation */}
          <div className="relative w-64 h-64 mb-6">
            {/* Cards Illustration */}
            <div className="relative z-10 space-y-3">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 transform transition-transform"
                  style={{
                    transform: `translateY(${index * 4}px)`,
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <div className="h-2 w-24 bg-purple-700 rounded-full" />
                  </div>
                </div>
              ))}
            </div>

            {/* Confetti Dots */}
            <div className="absolute inset-0 -z-10">
              {[
                "top-0 left-1/4 bg-red-500",
                "top-1/4 right-1/4 bg-yellow-500",
                "bottom-1/4 left-1/3 bg-blue-500",
                "bottom-0 right-1/3 bg-purple-500",
                "top-1/3 right-1/2 bg-green-500",
                "bottom-1/2 left-1/2 bg-orange-500",
              ].map((classes, index) => (
                <div key={index} className={`absolute w-2 h-2 rounded-full ${classes}`} />
              ))}
            </div>
          </div>

          <h1 className="text-xl font-semibold text-gray-900 mb-2">Your appointment has been confirmed</h1>
          <p className="text-gray-600 mb-8">We look forward to assisting you with your healthcare needs.</p>

          <Button onClick={() => router.push("/home")} className="w-full bg-purple-700 hover:bg-purple-800" size="lg">
            Back to Home
          </Button>
        </div>
      </div>
    </MobileLayout>
  )
}
