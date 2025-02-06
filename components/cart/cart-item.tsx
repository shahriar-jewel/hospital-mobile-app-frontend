"use client"

import { Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

interface CartItemProps {
  id: string
  name: string
  price: number
  quantity: number
}

export function CartItem({ id, name, price, quantity }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  const handleIncrement = () => {
    updateQuantity(id, quantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1)
    }
  }

  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex-1">
        <h3 className="text-[15px] font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">BDT {price}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={handleDecrement}
            className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200"
          >
            <Minus className="w-4 h-4 text-gray-600" />
          </button>
          <span className="text-[15px] font-medium w-4 text-center">{quantity}</span>
          <button
            onClick={handleIncrement}
            className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200"
          >
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        <button onClick={() => removeItem(id)} className="text-red-500 hover:text-red-600">
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

