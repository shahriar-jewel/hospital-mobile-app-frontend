import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface ActionButtonProps {
  icon: LucideIcon
  label: string
  sublabel?: string
  href: string
}

export function ActionButton({ icon: Icon, label, sublabel, href }: ActionButtonProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
    >
      <div className="flex items-center space-x-3">
        <div className="text-purple-700">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[15px] text-purple-700 font-medium">{label}</div>
          {sublabel && <div className="text-[13px] text-gray-500">{sublabel}</div>}
        </div>
      </div>
      <svg className="h-5 w-5 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  )
}
