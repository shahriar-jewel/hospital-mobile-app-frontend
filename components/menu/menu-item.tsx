import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface MenuItemProps {
  icon: LucideIcon
  label: string
  href: string
  iconColor?: string
}

export function MenuItem({ icon: Icon, label, href, iconColor = "text-purple-700" }: MenuItemProps) {
  return (
    <Link href={href} className="flex items-center justify-between p-4 hover:bg-gray-50">
      <div className="flex items-center space-x-3">
        <div className={`${iconColor}`}>
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-[15px] text-gray-900">{label}</span>
      </div>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </Link>
  )
}

