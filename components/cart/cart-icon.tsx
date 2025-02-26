import { ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

interface CartIconProps {
  onClick: () => void
}

export function CartIcon({ onClick }: CartIconProps) {
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <button onClick={onClick} className="relative p-2">
      <ShoppingCart className="h-6 w-6 text-white" />
      {totalItems > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  )
}

