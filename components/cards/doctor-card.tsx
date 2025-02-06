import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface DoctorCardProps {
  imageUrl: string
  name: string
  specialty: string
  experience: number
  hasInPerson?: boolean
  hasVideo?: boolean
  href: string
}

export function DoctorCard({ imageUrl, name, specialty, experience, hasInPerson, hasVideo, href }: DoctorCardProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={name}
        width={56}
        height={56}
        className="rounded-full object-cover"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-[15px] text-gray-900">{name}</h3>
        <p className="text-[13px] text-gray-600">{specialty}</p>
        <p className="text-[13px] text-gray-500">Exp: {experience} years</p>
        <div className="flex gap-2 mt-2">
          {hasInPerson && (
            <span className="px-2 py-1 bg-cyan-50 text-cyan-600 rounded text-[11px] font-medium">In-person</span>
          )}
          {hasVideo && (
            <span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded text-[11px] font-medium">
              Video consultation
            </span>
          )}
        </div>
      </div>
      <Link href={href} className="flex items-center text-purple-700 px-2 py-4">
        <span className="text-[13px] mr-1">Details</span>
        <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
  )
}

