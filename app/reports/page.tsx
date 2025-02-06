// "use client"

// import { useState } from "react"
// import { ArrowLeft, Search, ArrowDownUp, SlidersHorizontal } from "lucide-react"
// import { useRouter } from "next/navigation"
// import { MobileLayout } from "@/components/layouts/mobile-layouts"
// import { ReportCard } from "@/components/cards/report-card"
// import { NewReportsSection } from "@/components/sections/new-reports-section"
// import { BottomNav } from "@/components/navigation/bottom-nav"

// type ReportTab = "all" | "praava" | "other"

// const newReports = [
//   {
//     id: 1,
//     title: "AML Panel By FISH - NCGM",
//     patientName: "Tasmir Mahbub",
//     patientId: "PHBL0000456758",
//     labType: "praava-lab" as const,
//     status: "will be ready in 2 days",
//   },
//   {
//     id: 2,
//     title: "AML Panel By FISH - NCGM",
//     patientName: "Tasmir Mahbub",
//     patientId: "PHBL0000456758",
//     labType: "praava-lab" as const,
//     status: "will be ready in 3 days",
//   },
//   {
//     id: 3,
//     title: "AML Panel By FISH - NCGM",
//     patientName: "Tasmir Mahbub",
//     patientId: "PHBL0000456758",
//     labType: "praava-lab" as const,
//     status: "will be ready in 4 days",
//   },
// ]

// const pastReports = [
//   {
//     id: 1,
//     title: "AML Panel By FISH - NCGM",
//     patientName: "Tasmir Mahbub",
//     patientId: "PHBL0000456758",
//     labType: "praava-lab" as const,
//     date: "12/09/21",
//   },
//   {
//     id: 2,
//     title: "Acute Leukaemia Panel (IPT) (Immunophenotyping) - NCGM",
//     patientName: "Tasmir Mahbub",
//     patientId: "PHBL0000456758",
//     labType: "lab-aid-test" as const,
//     date: "12/09/21",
//   },
// ]

// export default function ReportsPage() {
//   const router = useRouter()
//   const [activeTab, setActiveTab] = useState<ReportTab>("all")

//   const handleDownload = (id: number) => {
//     console.log("Download report:", id)
//   }

//   const handleDelete = (id: number) => {
//     console.log("Delete report:", id)
//   }

//   return (
//     <MobileLayout>
//       <div className="flex flex-col min-h-full bg-gray-50">
//         {/* Header */}
//         <div className="bg-purple-700 text-white">
//           <div className="flex items-center justify-between px-6 h-14">
//             <div className="flex items-center">
//               <button onClick={() => router.back()} className="p-2 -ml-2">
//                 <ArrowLeft className="h-6 w-6" />
//               </button>
//               <h1 className="text-[17px] font-semibold ml-2">Medical Reports</h1>
//             </div>
//             <button className="p-2">
//               <Search className="h-6 w-6" />
//             </button>
//           </div>

//           {/* Tabs */}
//           <div className="flex border-b border-purple-600">
//             {(["all", "praava", "other"] as const).map((tab) => (
//               <button
//                 key={tab}
//                 className={`flex-1 py-3 px-4 text-[13px] font-medium ${
//                   activeTab === tab ? "border-b-2 border-white" : "text-purple-200"
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 overflow-y-auto scrollbar-hide">
//           <div className="py-4 space-y-6 pb-24 px-4">
//             {/* New Reports Section */}
//             <div className="overflow-x-hidden">
//               <NewReportsSection reports={newReports} />
//             </div>

//             {/* Past Reports Section */}
//             <div className="space-y-4">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-[15px] font-semibold text-gray-900">Past Reports</h2>
//                 <div className="flex items-center space-x-4">
//                   <button className="flex items-center text-[13px] text-gray-600">
//                     <span className="mr-1">Sort by</span>
//                     <ArrowDownUp className="h-4 w-4" />
//                   </button>
//                   <button className="text-gray-600">
//                     <SlidersHorizontal className="h-5 w-5" />
//                   </button>
//                 </div>
//               </div>
//               {pastReports.map((report) => (
//                 <ReportCard
//                   key={report.id}
//                   title={report.title}
//                   patientName={report.patientName}
//                   patientId={report.patientId}
//                   labType={report.labType}
//                   date={report.date}
//                   onDownload={() => handleDownload(report.id)}
//                   onDelete={() => handleDelete(report.id)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Navigation */}
//         <BottomNav />
//       </div>
//     </MobileLayout>
//   )
// }



"use client"

import { useState } from "react"
import { ArrowLeft, Search, ArrowDownUp, SlidersHorizontal } from "lucide-react"
import { useRouter } from "next/navigation"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { ReportCard } from "@/components/cards/report-card"
import { NewReportsSection } from "@/components/sections/new-reports-section"
import { BottomNav } from "@/components/navigation/bottom-nav"

type ReportTab = "all" | "praava" | "other"

const newReports = [
  {
    id: 1,
    title: "AML Panel By FISH - NCGM",
    patientName: "Tasmir Mahbub",
    patientId: "PHBL0000456758",
    labType: "praava-lab" as const,
    status: "will be ready in 2 days",
  },
  {
    id: 2,
    title: "AML Panel By FISH - NCGM",
    patientName: "Tasmir Mahbub",
    patientId: "PHBL0000456758",
    labType: "praava-lab" as const,
    status: "will be ready in 3 days",
  },
  {
    id: 3,
    title: "AML Panel By FISH - NCGM",
    patientName: "Tasmir Mahbub",
    patientId: "PHBL0000456758",
    labType: "praava-lab" as const,
    status: "will be ready in 4 days",
  },
]

const pastReports = [
  {
    id: 1,
    title: "AML Panel By FISH - NCGM",
    patientName: "Tasmir Mahbub",
    patientId: "PHBL0000456758",
    labType: "praava-lab" as const,
    date: "12/09/21",
  },
  {
    id: 2,
    title: "Acute Leukaemia Panel (IPT) (Immunophenotyping) - NCGM",
    patientName: "Tasmir Mahbub",
    patientId: "PHBL0000456758",
    labType: "lab-aid-test" as const,
    date: "12/09/21",
  },
]

export default function ReportsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<ReportTab>("all")

  const handleDownload = (id: number) => {
    console.log("Download report:", id)
  }

  const handleDelete = (id: number) => {
    console.log("Delete report:", id)
  }

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-full bg-gray-50">
        {/* Header */}
        <div className="bg-purple-700 text-white">
          <div className="flex items-center justify-between px-4 h-14">
            <div className="flex items-center">
              <button onClick={() => router.back()} className="p-2 -ml-2">
                <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <h1 className="text-[15px] sm:text-[17px] font-semibold ml-2">Medical Reports</h1>
            </div>
            <button className="p-2">
              <Search className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-purple-600">
            {(["all", "praava", "other"] as const).map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 text-[11px] sm:text-[13px] font-medium ${
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
          <div className="py-4 space-y-6 pb-24">
            {/* New Reports Section */}
            <div className="overflow-x-hidden">
              <NewReportsSection reports={newReports} />
            </div>

            {/* Past Reports Section */}
            <div className="space-y-4 px-4">
              <div className="flex items-center justify-between">
                <h2 className="text-[13px] sm:text-[15px] font-semibold text-gray-900">Past Reports</h2>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-[11px] sm:text-[13px] text-gray-600">
                    <span className="mr-1">Sort by</span>
                    <ArrowDownUp className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                  <button className="text-gray-600">
                    <SlidersHorizontal className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>
              </div>
              {pastReports.map((report) => (
                <ReportCard
                  key={report.id}
                  title={report.title}
                  patientName={report.patientName}
                  patientId={report.patientId}
                  labType={report.labType}
                  date={report.date}
                  onDownload={() => handleDownload(report.id)}
                  onDelete={() => handleDelete(report.id)}
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

