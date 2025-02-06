import { Pill } from "lucide-react"
import Link from "next/link"

interface PharmacyCategoryCardProps {
  title: string
  href: string
}

export function PharmacyCategoryCard({ title, href }: PharmacyCategoryCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center p-4 rounded-lg bg-white border border-gray-100 hover:border-purple-200 transition-colors"
    >
      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
        <Pill className="w-5 h-5 text-purple-700" />
      </div>
      <span className="text-[13px] text-center text-gray-900">{title}</span>
    </Link>
  )
}

