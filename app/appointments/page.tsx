"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { AppointmentCard } from "@/components/cards/appointment-card"
import { BottomNav } from "@/components/navigation/bottom-nav"

type AppointmentStatus = "upcoming" | "completed" | "cancelled"

const appointments = [
  {
    id: 1,
    doctorName: "Dr. Alfred Moshai",
    specialization: "Cardiologist",
    imageUrl: "/images/doctor-1.jpg",
    time: "Friday, 8AM - 10AM",
    type: "in-person" as const,
  },
  {
    id: 2,
    doctorName: "Dr. Alfred Moshai",
    specialization: "Cardiologist",
    imageUrl: "/images/doctor-1.jpg",
    time: "Friday, 8AM - 10AM",
    type: "video" as const,
  },
  {
    id: 3,
    doctorName: "Dr. Alfred Moshai",
    specialization: "Cardiologist",
    imageUrl: "/images/doctor-1.jpg",
    time: "Friday, 8AM - 10AM",
    type: "in-person" as const,
  },
]

export default function AppointmentsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<AppointmentStatus>("upcoming")

  const handleCancel = (id: number) => {
    console.log("Cancel appointment:", id)
  }

  const handleReschedule = (id: number) => {
    console.log("Reschedule appointment:", id)
  }

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-full">
        {/* Header */}
        <div className="bg-purple-700 text-white">
          <div className="flex items-center px-4 h-14">
            <button onClick={() => router.back()} className="p-2 -ml-2">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-[17px] font-semibold ml-2">My Appointments</h1>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-purple-600">
            {(["upcoming", "completed", "cancelled"] as const).map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-3 px-4 text-[13px] font-medium ${
                  activeTab === tab ? "border-b-2 border-white" : "text-purple-200"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="p-4 space-y-4 pb-24">
            {appointments.map((appointment) => (
              <AppointmentCard
                key={appointment.id}
                doctorName={appointment.doctorName}
                specialization={appointment.specialization}
                imageUrl={appointment.imageUrl}
                time={appointment.time}
                type={appointment.type}
                onCancel={() => handleCancel(appointment.id)}
                onReschedule={() => handleReschedule(appointment.id)}
              />
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </MobileLayout>
  )
}
