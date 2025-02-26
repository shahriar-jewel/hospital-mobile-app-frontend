"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { MobileHeader } from "@/components/header/mobile-header"
import { PhoneInput } from "@/components/forms/phone-input"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // You would typically make an API call here to send the OTP
    console.log("Phone number submitted:", phoneNumber)
    // Navigate to verify page with registration flag
    router.push(`/verify?phone=${phoneNumber}&isRegistration=true`)
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
            <h1 className="text-2xl font-semibold text-gray-900">Register</h1>
            <p className="text-gray-600">Please enter your phone number</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <PhoneInput value={phoneNumber} onChange={setPhoneNumber} />

            <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 text-white py-5">
              Continue
            </Button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-purple-700 hover:text-purple-800">
                Login
              </Link>
            </p>
          </div>
        </main>
      </div>
    </MobileLayout>
  )
}

