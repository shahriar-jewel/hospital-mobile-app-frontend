import type { LucideIcon } from "lucide-react"

interface SpecialtyChipProps {
  label: string
  icon: LucideIcon
  isActive?: boolean
  onClick?: () => void
}

export function SpecialtyChip({ label, icon: Icon, isActive, onClick }: SpecialtyChipProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-[13px] ${
        isActive ? "bg-purple-700 text-white" : "bg-white text-gray-700 border border-gray-200"
      }`}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </button>
  )
}

