import Image from "next/image"
import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AppointmentCardProps {
  doctorName: string
  specialization: string
  imageUrl: string
  time: string
  type: "in-person" | "video"
  onCancel: () => void
  onReschedule: () => void
}

export function AppointmentCard({
  doctorName,
  specialization,
  imageUrl,
  time,
  type,
  onCancel,
  onReschedule,
}: AppointmentCardProps) {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <Image src={imageUrl || "/placeholder.svg"} alt={doctorName} width={60} height={60} className="rounded-lg" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-[15px] text-gray-900">{doctorName}</h3>
          <p className="text-[13px] text-gray-600 font-medium">{specialization}</p>
          <div className="flex items-center gap-2 mt-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-[13px] text-gray-600">{time}</span>
          </div>
          <div className="mt-2">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                type === "in-person" ? "bg-cyan-100 text-cyan-800" : "bg-indigo-100 text-indigo-800"
              }`}
            >
              {type === "in-person" ? "In-person" : "Video Consultation"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <Button
          variant="outline"
          className="flex-1 text-gray-700 hover:text-gray-900 font-medium text-[13px]"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          className="flex-1 bg-purple-700 hover:bg-purple-800 text-white font-medium text-[13px]"
          onClick={onReschedule}
        >
          Reschedule
        </Button>
      </div>
    </div>
  )
}
