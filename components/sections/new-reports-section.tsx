// import { useRef } from "react"
// import { ReportCard } from "@/components/cards/report-card"

// interface Report {
//   id: number
//   title: string
//   patientName: string
//   patientId: string
//   labType: "praava-lab" | "lab-aid-test"
//   status: string
// }

// interface NewReportsSectionProps {
//   reports: Report[]
// }

// export function NewReportsSection({ reports }: NewReportsSectionProps) {
//   const scrollContainerRef = useRef<HTMLDivElement>(null)

//   return (
//     <div className="space-y-4">
//       <h2 className="text-[15px] font-semibold text-gray-900">New Reports</h2>
//       <div ref={scrollContainerRef} className="relative">
//         <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory pl-4">
//           <div className="flex gap-4 pb-4">
//             {reports.map((report, index) => (
//               <div key={report.id} className={`snap-start ${index === 0 ? "w-[98%]" : "w-[70%]"}`}>
//                 <ReportCard
//                   title={report.title}
//                   patientName={report.patientName}
//                   patientId={report.patientId}
//                   labType={report.labType}
//                   status={report.status}
//                   isPending
//                   isNew
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import { useRef } from "react"
import { ReportCard } from "@/components/cards/report-card"

interface Report {
  id: number
  title: string
  patientName: string
  patientId: string
  labType: "praava-lab" | "lab-aid-test"
  status: string
}

interface NewReportsSectionProps {
  reports: Report[]
}

export function NewReportsSection({ reports }: NewReportsSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="space-y-4 px-4">
      <h2 className="text-[15px] font-semibold text-gray-900">New Reports</h2>
      <div ref={scrollContainerRef} className="relative">
        <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory pl-4">
          <div className="flex gap-4 pb-4">
            {reports.map((report, index) => (
              <div
                key={report.id}
                className={`snap-start ${index === 0 ? "w-[85vw] max-w-[360px]" : "w-[70vw] max-w-[300px]"}`}
              >
                <ReportCard
                  title={report.title}
                  patientName={report.patientName}
                  patientId={report.patientId}
                  labType={report.labType}
                  status={report.status}
                  isPending
                  isNew
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

