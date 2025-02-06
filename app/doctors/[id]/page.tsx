// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import { ArrowLeft, Facebook, Linkedin } from "lucide-react"
// import { format } from "date-fns"
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/calender/calender"
// import { MobileLayout } from "@/components/layouts/mobile-layouts"

// export default function DoctorDetailPage() {
//   const router = useRouter()
//   const [selectedDate, setSelectedDate] = useState<Date>()
//   const [selectedTime, setSelectedTime] = useState<string>()
//   const [consultationType, setConsultationType] = useState<"in-person" | "video">("in-person")

//   const handleMakeAppointment = () => {
//     if (selectedDate && selectedTime) {
//       console.log("Appointment scheduled for:", {
//         date: format(selectedDate, "yyyy-MM-dd"),
//         time: selectedTime,
//         type: consultationType,
//       })
//       // Navigate to confirmation page or show success message
//       router.push("/appointments")
//     }
//   }

//   return (
//     <MobileLayout>
//       <div className="flex flex-col min-h-full bg-gray-50">
//         {/* Header */}
//         <div className="bg-purple-700 text-white">
//           <div className="flex items-center px-4 h-14">
//             <button onClick={() => router.back()} className="p-2 -ml-2">
//               <ArrowLeft className="h-5 w-5" />
//             </button>
//             <h1 className="text-[17px] font-medium ml-2">Doctor Detail</h1>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="flex-1 overflow-y-auto">
//           <div className="p-4 space-y-6 pb-24">
//             {/* Doctor Profile */}
//             <div className="flex items-start space-x-4">
//               <Image src="/placeholder.svg" alt="Dr. Ahmed Farukh" width={80} height={80} className="rounded-lg" />
//               <div>
//                 <h2 className="text-xl font-medium">Dr. Ahmed Farukh</h2>
//                 <p className="text-gray-600">Cardiology</p>
//                 <div className="flex space-x-2 mt-2">
//                   <Link href="https://facebook.com" target="_blank" className="text-blue-600">
//                     <Facebook className="w-5 h-5" />
//                   </Link>
//                   <Link href="https://linkedin.com" target="_blank" className="text-blue-700">
//                     <Linkedin className="w-5 h-5" />
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* Key Information */}
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <h3 className="text-gray-600 mb-1">Experiences</h3>
//                 <p className="font-medium flex items-center gap-2">
//                   <span className="text-purple-700">8+ Yrs</span>
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-gray-600 mb-1">Consultation Fee</h3>
//                 <p className="font-medium flex items-center gap-2">
//                   <span className="text-purple-700">TK 1200</span>
//                 </p>
//               </div>
//             </div>

//             {/* Qualification */}
//             <div>
//               <h3 className="text-gray-900 font-medium mb-1">Qualification</h3>
//               <p className="text-gray-600">MBBS, DIPCARD (LONDON), FACC(USA)</p>
//               <button className="text-purple-700 text-sm mt-2">Read Biography</button>
//             </div>

//             {/* Consultation Type */}
//             <div>
//               <h3 className="text-gray-900 font-medium mb-3">Consultation Type</h3>
//               <div className="flex gap-3">
//                 <button
//                   onClick={() => setConsultationType("in-person")}
//                   className={`px-4 py-2 rounded-lg text-sm transition-colors ${
//                     consultationType === "in-person" ? "bg-purple-700 text-white" : "bg-white border border-gray-200"
//                   }`}
//                 >
//                   In-person
//                 </button>
//                 <button
//                   onClick={() => setConsultationType("video")}
//                   className={`px-4 py-2 rounded-lg text-sm transition-colors ${
//                     consultationType === "video" ? "bg-purple-700 text-white" : "bg-white border border-gray-200"
//                   }`}
//                 >
//                   Video consultation
//                 </button>
//               </div>
//             </div>

//             {/* Availability Calendar */}
//             <div>
//               <div className="flex items-center justify-between mb-3">
//                 <h3 className="text-gray-900 font-medium">Availability</h3>
//                 <button className="text-sm text-purple-700">
//                   {format(new Date(), "MMMM yyyy")} {">"}
//                 </button>
//               </div>
//               <Calendar
//                 onDateSelect={setSelectedDate}
//                 onTimeSelect={setSelectedTime}
//                 selectedDate={selectedDate}
//                 selectedTime={selectedTime}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Make Appointment Button */}
//         <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t max-w-[430px] mx-auto">
//           <Button onClick={handleMakeAppointment} className="w-full bg-purple-700 hover:bg-purple-800" size="lg">
//             Make Appointment
//           </Button>
//         </div>
//       </div>
//     </MobileLayout>
//   )
// }


"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Facebook, Linkedin } from 'lucide-react'
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/calender/calender"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { PatientSelectionDrawer } from "@/components/drawers/patient-selection-drawer"

export default function DoctorDetailPage() {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>()
  const [consultationType, setConsultationType] = useState<"in-person" | "video">("in-person")
  const [isPatientModalOpen, setIsPatientModalOpen] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState<{
    id: string
    name: string
    patientId: string
    imageUrl: string
  }>()

  const handleMakeAppointment = () => {
    if (selectedDate && selectedTime) {
      setIsPatientModalOpen(true)
    }
  }

  const handlePatientSelect = (patient: {
    id: string
    name: string
    patientId: string
    imageUrl: string
  }) => {
    setSelectedPatient(patient)
  }

  const handleModalClose = () => {
    setIsPatientModalOpen(false)
    if (selectedPatient) {
      // Here you would typically make an API call to create the appointment
      console.log("Appointment scheduled for:", {
        patient: selectedPatient,
        date: selectedDate,
        time: selectedTime,
        type: consultationType,
      })
      router.push("/appointments")
    }
  }

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-full bg-gray-50">
        {/* Header */}
        <div className="bg-purple-700 text-white">
          <div className="flex items-center px-4 h-14">
            <button onClick={() => router.back()} className="p-2 -ml-2">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-[17px] font-medium ml-2">Doctor Detail</h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-6 pb-24">
            {/* Doctor Profile */}
            <div className="flex items-start space-x-4">
              <Image src="/placeholder.svg" alt="Dr. Ahmed Farukh" width={80} height={80} className="rounded-lg" />
              <div>
                <h2 className="text-xl font-medium">Dr. Ahmed Farukh</h2>
                <p className="text-gray-600">Cardiology</p>
                <div className="flex space-x-2 mt-2">
                  <Link href="https://facebook.com" target="_blank" className="text-blue-600">
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" className="text-blue-700">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Key Information */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-gray-600 mb-1">Experiences</h3>
                <p className="font-medium flex items-center gap-2">
                  <span className="text-purple-700">8+ Yrs</span>
                </p>
              </div>
              <div>
                <h3 className="text-gray-600 mb-1">Consultation Fee</h3>
                <p className="font-medium flex items-center gap-2">
                  <span className="text-purple-700">TK 1200</span>
                </p>
              </div>
            </div>

            {/* Qualification */}
            <div>
              <h3 className="text-gray-900 font-medium mb-1">Qualification</h3>
              <p className="text-gray-600">MBBS, DIPCARD (LONDON), FACC(USA)</p>
              <button className="text-purple-700 text-sm mt-2">Read Biography</button>
            </div>

            {/* Consultation Type */}
            <div>
              <h3 className="text-gray-900 font-medium mb-3">Consultation Type</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => setConsultationType("in-person")}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    consultationType === "in-person" ? "bg-purple-700 text-white" : "bg-white border border-gray-200"
                  }`}
                >
                  In-person
                </button>
                <button
                  onClick={() => setConsultationType("video")}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    consultationType === "video" ? "bg-purple-700 text-white" : "bg-white border border-gray-200"
                  }`}
                >
                  Video consultation
                </button>
              </div>
            </div>

            {/* Availability Calendar */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-gray-900 font-medium">Availability</h3>
                <button className="text-sm text-purple-700">
                  {format(new Date(), "MMMM yyyy")} {">"}
                </button>
              </div>
              <Calendar
                onDateSelect={setSelectedDate}
                onTimeSelect={setSelectedTime}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
              />
            </div>
          </div>
        </div>

        {/* Make Appointment Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t max-w-[430px] mx-auto">
          <Button
            onClick={handleMakeAppointment}
            className="w-full bg-purple-700 hover:bg-purple-800"
            size="lg"
          >
            Make Appointment
          </Button>
        </div>

        {/* Patient Selection Drawer */}
        <PatientSelectionDrawer
          isOpen={isPatientModalOpen}
          onClose={handleModalClose}
          onSelect={handlePatientSelect}
          selectedPatient={selectedPatient}
        />
      </div>
    </MobileLayout>
  )
}

