import { ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

interface CartIconProps {
  onClick?: () => void
}

export function CartIcon({ onClick }: CartIconProps) {
  const { getTotalItems } = useCart()
  const itemCount = getTotalItems()

  return (
    <button onClick={onClick} className="relative">
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {itemCount}
        </div>
      )}
    </button>
  )
}

