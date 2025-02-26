import { Plus, Check } from "lucide-react"

interface DiagnosticServiceItemProps {
  title: string
  description: string
  category: "Lab" | "Imaging"
  price: number
  isSelected?: boolean
  onSelect: () => void
}

export function DiagnosticServiceItem({
  title,
  description,
  category,
  price,
  isSelected,
  onSelect,
}: DiagnosticServiceItemProps) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <div className="py-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-[15px] font-medium text-gray-900">{title}</h3>
            <p className="text-[13px] text-gray-600 mt-1">{description}</p>
            <div className="flex items-center mt-1">
              <span className="text-[13px] text-purple-700">{category}</span>
              <span className="text-[13px] text-gray-400 mx-1">-</span>
              <span className="text-[13px] font-medium text-purple-700">BDT {price}</span>
            </div>
          </div>
          <button
            onClick={onSelect}
            className={`ml-4 w-6 h-6 flex items-center justify-center rounded-full ${
              isSelected ? "bg-green-500 text-white" : "bg-purple-700 text-white hover:bg-purple-800"
            }`}
          >
            {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  )
}

