// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { MobileLayout } from "@/components/layouts/mobile-layouts"
// import { MobileHeader } from "@/components/header/mobile-header"
// import { OtpInput } from "@/components/forms/otp-input"
// import Link from "next/link"
// import { useRouter, useSearchParams } from "next/navigation"

// export default function VerifyPage() {
//   const router = useRouter()
//   const searchParams = useSearchParams()
//   const phoneNumber = searchParams.get("phone") || ""

//   const [otp, setOtp] = useState<string[]>(Array(6).fill(""))
//   const [timeLeft, setTimeLeft] = useState(10)

//   useEffect(() => {
//     if (!phoneNumber) {
//       router.replace("/login")
//     }
//   }, [phoneNumber, router])

//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
//       return () => clearTimeout(timer)
//     }
//   }, [timeLeft])

//   const handleOtpChange = (index: number, value: string) => {
//     if (value.length > 1) return

//     const newOtp = [...otp]
//     newOtp[index] = value
//     setOtp(newOtp)

//     if (value && index < 5) {
//       const nextInput = document.getElementById(`otp-${index + 1}`)
//       nextInput?.focus()
//     }
//   }

//   const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       const prevInput = document.getElementById(`otp-${index - 1}`)
//       prevInput?.focus()
//     }
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     const otpValue = otp.join("")
//     console.log("OTP submitted:", otpValue)
//     console.log("Mobile:", phoneNumber)
//     // Here you would typically verify the OTP with your backend
//     // For this example, we'll just navigate to the home page
//     router.push("/home")
//   }

//   const handleBack = () => {
//     router.back()
//   }

//   return (
//     <MobileLayout>
//       <div className="flex flex-col min-h-full">
//         <MobileHeader onBack={handleBack} />

//         <main className="flex-1 px-6 pt-6 pb-24 overflow-y-auto scrollbar-hide">
//           <div className="space-y-2 mb-8">
//             <h1 className="text-2xl font-semibold text-gray-900">Verify your phone number</h1>
//             <p className="text-gray-600">We sent you a code to verify your phone number</p>
//           </div>

//           <div className="mb-8">
//             <p className="text-gray-600">
//               Sent to {phoneNumber}{" "}
//               <Link href="/login" className="text-purple-700 font-medium ml-1">
//                 EDIT
//               </Link>
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-8">
//             <OtpInput value={otp} onChange={handleOtpChange} onKeyDown={handleKeyDown} />

//             <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 text-white py-5">
//               Verify
//             </Button>
//           </form>

//           <div className="mt-4 text-center">
//             <button
//               onClick={() => setTimeLeft(10)}
//               disabled={timeLeft > 0}
//               className="text-gray-600 hover:text-gray-900 disabled:opacity-50"
//             >
//               Resend the verification code in{" "}
//               <span className="text-purple-700">00:{timeLeft.toString().padStart(2, "0")}s</span>
//             </button>
//           </div>
//         </main>
//       </div>
//     </MobileLayout>
//   )
// }



"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { MobileHeader } from "@/components/header/mobile-header"
import { OtpInput } from "@/components/forms/otp-input"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

export default function VerifyPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const phoneNumber = searchParams.get("phone") || ""
  const isRegistration = searchParams.get("isRegistration") === "true"

  const [otp, setOtp] = useState<string[]>(Array(6).fill(""))
  const [timeLeft, setTimeLeft] = useState(10)

  useEffect(() => {
    if (!phoneNumber) {
      router.replace("/login")
    }
  }, [phoneNumber, router])

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [timeLeft])

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      nextInput?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      prevInput?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const otpValue = otp.join("")
    console.log("OTP submitted:", otpValue)
    // Here you would typically verify the OTP with your backend
    // For this example, we'll just navigate to the appropriate page
    if (isRegistration) {
      router.push("/create-profile")
    } else {
      router.push("/home")
    }
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-full">
        <MobileHeader onBack={handleBack} />

        <main className="flex-1 px-6 pt-6 pb-24 overflow-y-auto scrollbar-hide">
          <div className="space-y-2 mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Verify your phone number</h1>
            <p className="text-gray-600">We sent you a code to verify your phone number</p>
          </div>

          <div className="mb-8">
            <p className="text-gray-600">
              Sent to {phoneNumber}{" "}
              <Link href="/login" className="text-purple-700 font-medium ml-1">
                EDIT
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <OtpInput value={otp} onChange={handleOtpChange} onKeyDown={handleKeyDown} />

            <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 text-white py-5">
              Verify
            </Button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={() => setTimeLeft(10)}
              disabled={timeLeft > 0}
              className="text-gray-600 hover:text-gray-900 disabled:opacity-50"
            >
              Resend the verification code in{" "}
              <span className="text-purple-700">00:{timeLeft.toString().padStart(2, "0")}s</span>
            </button>
          </div>
        </main>
      </div>
    </MobileLayout>
  )
}

