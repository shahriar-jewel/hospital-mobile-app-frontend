import { Trash2 } from "lucide-react"

interface OrderHistoryItemProps {
  orderNumber: string
  date: string
  onDelete: () => void
  onReOrder: () => void
}

export function OrderHistoryItem({ orderNumber, date, onDelete, onReOrder }: OrderHistoryItemProps) {
  return (
    <div className="bg-white rounded-lg mb-3">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[15px] font-medium text-gray-900">{orderNumber}</h3>
            <p className="text-[13px] text-gray-500">{date}</p>
          </div>
          <button onClick={onDelete} className="text-red-500">
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-[13px] text-gray-700">Detail</span>
          <button onClick={onReOrder} className="text-[13px] font-medium text-purple-700 hover:text-purple-800">
            Re-Order
          </button>
        </div>
      </div>
    </div>
  )
}
