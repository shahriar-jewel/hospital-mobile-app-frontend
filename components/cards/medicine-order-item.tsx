import { Minus, Plus, Trash2 } from "lucide-react"

interface MedicineOrderItemProps {
  name: string
  price: number
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
  onDelete: () => void
}

export function MedicineOrderItem({ name, price, quantity, onIncrease, onDecrease, onDelete }: MedicineOrderItemProps) {
  return (
    <div className="py-4 border-b border-gray-100 last:border-0">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-[15px] font-medium text-gray-900">{name}</h3>
          <p className="text-[13px] text-gray-500">BDT {price}</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={onDecrease}
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300"
              disabled={quantity <= 1}
            >
              <Minus className="w-4 h-4 text-gray-600" />
            </button>
            <span className="text-[15px] font-medium w-4 text-center">{quantity}</span>
            <button
              onClick={onIncrease}
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300"
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <button onClick={onDelete} className="text-red-500">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

