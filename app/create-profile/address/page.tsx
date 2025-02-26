"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MobileLayout } from "@/components/layouts/mobile-layouts"

// This would typically come from an API
const divisions = ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"]
const districts = ["Dhaka", "Gazipur", "Narayanganj", "Tangail"] // Example districts
const upazilas = ["Dhanmondi", "Mirpur", "Gulshan", "Mohammadpur"] // Example upazilas
const postalCodes = ["1205", "1206", "1207", "1208"] // Example postal codes

export default function AddressPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    division: "",
    district: "",
    upazila: "",
    postalCode: "",
    address: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically save the data to your backend
    router.push("/select-profile") // Changed from "/home" to "/select-profile"
  }

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-full bg-white">
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-14">
          <button onClick={() => router.back()} className="p-2 -ml-2">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <span className="text-sm text-gray-600">2/2</span>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 pb-8">
          <div className="space-y-6">
            {/* Title and Progress */}
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-4">Create your profile</h1>
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <div className="h-1 bg-purple-700 rounded" />
                  <div className="mt-2 text-[13px] font-medium text-purple-700">Personal Info</div>
                </div>
                <div className="flex-1">
                  <div className="h-1 bg-purple-700 rounded" />
                  <div className="mt-2 text-[13px] font-medium text-purple-700">Address</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Division */}
              <div className="space-y-2">
                <Select
                  value={formData.division}
                  onValueChange={(value) => setFormData({ ...formData, division: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Division" />
                  </SelectTrigger>
                  <SelectContent>
                    {divisions.map((division) => (
                      <SelectItem key={division} value={division.toLowerCase()}>
                        {division}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* District */}
              <div className="space-y-2">
                <Select
                  value={formData.district}
                  onValueChange={(value) => setFormData({ ...formData, district: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="District" />
                  </SelectTrigger>
                  <SelectContent>
                    {districts.map((district) => (
                      <SelectItem key={district} value={district.toLowerCase()}>
                        {district}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Upazila */}
              <div className="space-y-2">
                <Select
                  value={formData.upazila}
                  onValueChange={(value) => setFormData({ ...formData, upazila: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Upazila" />
                  </SelectTrigger>
                  <SelectContent>
                    {upazilas.map((upazila) => (
                      <SelectItem key={upazila} value={upazila.toLowerCase()}>
                        {upazila}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Postal Code */}
              <div className="space-y-2">
                <Select
                  value={formData.postalCode}
                  onValueChange={(value) => setFormData({ ...formData, postalCode: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Postal Code" />
                  </SelectTrigger>
                  <SelectContent>
                    {postalCodes.map((code) => (
                      <SelectItem key={code} value={code}>
                        {code}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <Textarea
                  placeholder="Type your address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 mt-4">
                Save & Continue
              </Button>
            </form>
          </div>
        </div>
      </div>
    </MobileLayout>
  )
}
