import type React from "react" // Added import for React
import { ClipboardList, User2, MessageSquare } from "lucide-react"
import Link from "next/link"

interface CareOptionProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

function CareOption({ icon, title, description, href }: CareOptionProps) {
  return (
    <Link href={href} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  )
}

export function OnDemandCareSection() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Get On-Demand Care</h3>
      <div className="space-y-2">
        <CareOption
          icon={<ClipboardList className="h-6 w-6 text-purple-700" />}
          title="Manage your prescription"
          description="Upload and review your prescriptions"
          href="/prescriptions"
        />
        <CareOption
          icon={<User2 className="h-6 w-6 text-purple-700" />}
          title="Treat me now"
          description="Answer a few questions to get personalized care"
          href="/treat-now"
        />
        <CareOption
          icon={<MessageSquare className="h-6 w-6 text-purple-700" />}
          title="Urgent appointment"
          description="Connect with your doctor for urgent chat"
          href="/urgent-chat"
        />
      </div>
    </div>
  )
}

