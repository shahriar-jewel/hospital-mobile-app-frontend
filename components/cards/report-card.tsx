// import { Download, Trash2 } from "lucide-react"
// import { cn } from "@/lib/utils"

// interface ReportCardProps {
//   title: string
//   patientName: string
//   patientId: string
//   labType: "praava-lab" | "lab-aid-test"
//   status?: string
//   date?: string
//   isPending?: boolean
//   onDownload?: () => void
//   onDelete?: () => void
//   className?: string
//   isNew?: boolean
// }

// export function ReportCard({
//   title,
//   patientName,
//   patientId,
//   labType,
//   status,
//   date,
//   isPending,
//   onDownload,
//   onDelete,
//   className,
//   isNew,
// }: ReportCardProps) {
//   return (
//     <div className={cn("bg-[#F8F3F3] border border-gray-200 rounded-lg p-3 h-full w-full", className)}>
//       <div className="space-y-1.5">
//         <h3 className="font-medium text-[15px] text-gray-900 line-clamp-2">{title}</h3>
//         <div className="flex items-center space-x-2 text-[13px]">
//           <span className="text-purple-700">{patientName}</span>
//           <span className="text-gray-400">|</span>
//           <span className="text-gray-500">{patientId}</span>
//         </div>
//         <div className="flex items-center justify-between">
//           <span
//             className={cn(
//               "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
//               labType === "praava-lab" ? "bg-purple-700 text-white" : "bg-cyan-500 text-white",
//             )}
//           >
//             {labType === "praava-lab" ? "Praava - Lab" : "Lab Aid - Test"}
//           </span>

//           {isPending ? (
//             <span className="text-xs text-gray-500">{status}</span>
//           ) : (
//             <div className="flex items-center space-x-4">
//               {date && <span className="text-xs text-gray-500">{date}</span>}
//               {onDownload && (
//                 <button onClick={onDownload} className="text-gray-400 hover:text-gray-600">
//                   <Download className="h-4 w-4" />
//                 </button>
//               )}
//               {onDelete && (
//                 <button onClick={onDelete} className="text-gray-400 hover:text-gray-600">
//                   <Trash2 className="h-4 w-4" />
//                 </button>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

import { Download, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface ReportCardProps {
  title: string
  patientName: string
  patientId: string
  labType: "praava-lab" | "lab-aid-test"
  status?: string
  date?: string
  isPending?: boolean
  onDownload?: () => void
  onDelete?: () => void
  className?: string
  isNew?: boolean
}

export function ReportCard({
  title,
  patientName,
  patientId,
  labType,
  status,
  date,
  isPending,
  onDownload,
  onDelete,
  className,
  isNew,
}: ReportCardProps) {
  return (
    <div className={cn("bg-[#F8F3F3] border border-gray-200 rounded-lg p-3 h-full w-full", className)}>
      <div className="space-y-1.5">
        <h3 className="font-medium text-[13px] sm:text-[15px] text-gray-900 line-clamp-2">{title}</h3>
        <div className="flex items-center space-x-2 text-[11px] sm:text-[13px]">
          <span className="text-purple-700">{patientName}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-500">{patientId}</span>
        </div>
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium",
              labType === "praava-lab" ? "bg-purple-700 text-white" : "bg-cyan-500 text-white",
            )}
          >
            {labType === "praava-lab" ? "Praava - Lab" : "Lab Aid - Test"}
          </span>

          {isPending ? (
            <span className="text-[10px] sm:text-xs text-gray-500">{status}</span>
          ) : (
            <div className="flex items-center space-x-4">
              {date && <span className="text-[10px] sm:text-xs text-gray-500">{date}</span>}
              {onDownload && (
                <button onClick={onDownload} className="text-gray-400 hover:text-gray-600">
                  <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              )}
              {onDelete && (
                <button onClick={onDelete} className="text-gray-400 hover:text-gray-600">
                  <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


