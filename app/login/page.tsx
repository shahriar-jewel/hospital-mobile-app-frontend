"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { MobileHeader } from "@/components/header/mobile-header"
import { PhoneInput } from "@/components/forms/phone-input"
import { Divider } from "@/components/ui/divider"
import { useRouter } from "next/navigation" // Add this import

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const router = useRouter() // Add this

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // You would typically make an API call here to send the OTP
    console.log("Phone number submitted:", phoneNumber)
    // Navigate to verify page
    router.push(`/verify?phone=${phoneNumber}`)
  }

  const handleBack = () => {
    router.back()
  }

  const handleLanguageChange = () => {
    console.log("Language change clicked")
  }

  return (
    <MobileLayout>
      <div className="flex flex-col h-full">
        <MobileHeader onBack={handleBack} onLanguageChange={handleLanguageChange} />

        <main className="flex-grow px-6 pt-6 pb-8">
          <div className="space-y-2 mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Login</h1>
            <p className="text-gray-600">Please enter your registered number</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <PhoneInput value={phoneNumber} onChange={setPhoneNumber} />

            <Button 
              type="submit" 
              className="w-full bg-purple-700 hover:bg-purple-800 text-white py-5"
            >
              Continue
            </Button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-purple-700 hover:text-purple-800">
                Register
              </Link>
            </p>
          </div>

          <div className="mt-6">
            <Divider text="Or" />
          </div>

          <Button 
            variant="outline"
            className="mt-6 w-full py-5 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700"
          >
            View as Guest
          </Button>
        </main>
      </div>
    </MobileLayout>
  )
}