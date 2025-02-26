// interface QuantitySelectorProps {
//     quantity: number
//     onIncrease: () => void
//     onDecrease: () => void
//     className?: string
//   }
  
//   export function QuantitySelector({ quantity, onIncrease, onDecrease, className = "" }: QuantitySelectorProps) {
//     return (
//       <div className={`flex items-center justify-between bg-purple-700 rounded-full px-2 py-1 ${className}`}>
//         <button onClick={onDecrease} className="text-white w-6 h-6 flex items-center justify-center text-lg font-medium">
//           -
//         </button>
//         <span className="text-white text-sm font-medium w-8 text-center">{quantity.toString().padStart(2, "0")}</span>
//         <button onClick={onIncrease} className="text-white w-6 h-6 flex items-center justify-center text-lg font-medium">
//           +
//         </button>
//       </div>
//     )
//   }
  
  

import { Minus, Plus } from "lucide-react"

interface QuantitySelectorProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
  size?: "sm" | "md"
}

export function QuantitySelector({ quantity, onIncrease, onDecrease, size = "md" }: QuantitySelectorProps) {
  const buttonClass = size === "sm" ? "w-4 h-4 text-[10px]" : "w-6 h-6 text-sm"

  const quantityClass = size === "sm" ? "text-xs w-4" : "text-sm w-6"

  return (
    <div className="flex items-center space-x-1">
      <button
        className={`${buttonClass} rounded-full bg-gray-200 flex items-center justify-center`}
        onClick={onDecrease}
      >
        <Minus className={size === "sm" ? "w-2 h-2" : "w-3 h-3"} />
      </button>
      <span className={`${quantityClass} text-center`}>{quantity}</span>
      <button
        className={`${buttonClass} rounded-full bg-purple-700 text-white flex items-center justify-center`}
        onClick={onIncrease}
      >
        <Plus className={size === "sm" ? "w-2 h-2" : "w-3 h-3"} />
      </button>
    </div>
  )
}

