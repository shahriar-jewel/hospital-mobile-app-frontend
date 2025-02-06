"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Search, SlidersHorizontal, Heart, Brain, SmileIcon as Tooth } from "lucide-react"
import { Input } from "@/components/ui/input"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { SpecialtyChip } from "@/components/chips/specialty-chip"
import { DoctorCard } from "@/components/cards/doctor-card"
import { BottomNav } from "@/components/navigation/bottom-nav"

const specialties = [
  { label: "Cardiology", icon: Heart },
  { label: "Psychologist", icon: Brain },
  { label: "Dental", icon: Tooth },
]

const doctors = [
  {
    id: 1,
    name: "Dr. Ahmed Farukh",
    specialty: "Cardiology",
    experience: 15,
    imageUrl: "/placeholder.svg",
    hasInPerson: true,
    hasVideo: true,
    href: "/doctors/ahmed-farukh",
  },
  {
    id: 2,
    name: "Dr. Ahmed Farukh",
    specialty: "Cardiology",
    experience: 15,
    imageUrl: "/placeholder.svg",
    hasInPerson: true,
    href: "/doctors/ahmed-farukh-2",
  },
  {
    id: 3,
    name: "Dr. Ahmed Farukh",
    specialty: "Cardiology",
    experience: 15,
    imageUrl: "/placeholder.svg",
    hasVideo: true,
    href: "/doctors/ahmed-farukh-3",
  },
  {
    id: 4,
    name: "Dr. Ahmed Farukh",
    specialty: "Cardiology",
    experience: 15,
    imageUrl: "/placeholder.svg",
    hasVideo: true,
    href: "/doctors/ahmed-farukh-4",
  },
]

export default function DoctorsPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSpecialty, setActiveSpecialty] = useState<string | null>("Cardiology")

  return (
    <MobileLayout>
      <div className="flex flex-col h-full bg-gray-50">
        {/* Header */}
        <div className="bg-purple-700 text-white">
          <div className="flex items-center justify-between px-4 h-14">
            <div className="flex items-center">
              <button onClick={() => router.back()} className="p-2 -ml-2">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <h1 className="text-[17px] font-medium ml-2">Praava Doctors</h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-4 pb-20">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="search"
                placeholder="Search for Doctors, Specialization"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 py-5 bg-white"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <SlidersHorizontal className="h-5 w-5" />
              </button>
            </div>

            {/* Specialties */}
            <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4">
              <div className="flex gap-2 pb-2">
                {specialties.map((specialty) => (
                  <SpecialtyChip
                    key={specialty.label}
                    label={specialty.label}
                    icon={specialty.icon}
                    isActive={activeSpecialty === specialty.label}
                    onClick={() => setActiveSpecialty(specialty.label)}
                  />
                ))}
              </div>
            </div>

            {/* Doctors List */}
            <div className="space-y-3">
              {doctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  imageUrl={doctor.imageUrl}
                  name={doctor.name}
                  specialty={doctor.specialty}
                  experience={doctor.experience}
                  hasInPerson={doctor.hasInPerson}
                  hasVideo={doctor.hasVideo}
                  href={doctor.href}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </MobileLayout>
  )
}

