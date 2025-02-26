"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, PenSquare, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import Image from "next/image"

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]

export default function CreateProfilePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    gender: "male",
    name: "",
    email: "",
    dob: "",
    bloodGroup: "",
    height: "",
    heightUnit: "feet",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    router.push("/create-profile/address")
  }

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-full bg-white">
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-14">
          <button onClick={() => router.back()} className="p-2 -ml-2">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <span className="text-sm text-gray-600">1/2</span>
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
                  <div className="h-1 bg-gray-200 rounded" />
                  <div className="mt-2 text-[13px] text-gray-400">Address</div>
                </div>
              </div>
            </div>

            {/* Profile Picture */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                  <Image src="/placeholder.svg" alt="Profile" width={96} height={96} className="rounded-full" />
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center">
                  <PenSquare className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Gender Selection */}
              <div className="space-y-3">
                <Label className="text-[15px]">Select Gender</Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(value) => setFormData({ ...formData, gender: value })}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="others" id="others" />
                    <Label htmlFor="others">Others</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[15px]">
                  Name<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[15px]">
                  Email<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <Label htmlFor="dob" className="text-[15px]">
                  DOB: DD/MM/YYYY<span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="dob"
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    required
                    className="pr-10"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Blood Group */}
              <div className="space-y-2">
                <Label htmlFor="bloodGroup" className="text-[15px]">
                  Blood Group
                </Label>
                <Select
                  value={formData.bloodGroup}
                  onValueChange={(value) => setFormData({ ...formData, bloodGroup: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select blood group" />
                  </SelectTrigger>
                  <SelectContent>
                    {bloodGroups.map((group) => (
                      <SelectItem key={group} value={group}>
                        {group}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Height */}
              <div className="space-y-2">
                <Label htmlFor="height" className="text-[15px]">
                  Height - Feet/CM
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="height"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    className="flex-1"
                  />
                  <Select
                    value={formData.heightUnit}
                    onValueChange={(value) => setFormData({ ...formData, heightUnit: value })}
                  >
                    <SelectTrigger className="w-[100px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="feet">Feet</SelectItem>
                      <SelectItem value="cm">CM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 text-white">
                Next
              </Button>
            </form>
          </div>
        </div>
      </div>
    </MobileLayout>
  )
}

