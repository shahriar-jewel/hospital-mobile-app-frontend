import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function EmptyCart() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mb-6 mt-6">
        <ShoppingBag className="w-12 h-12 text-purple-700" />
      </div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
      <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
      <Button onClick={() => router.push("/pharmacy")} className="bg-purple-700 hover:bg-purple-800 text-white">
        Start Shopping
      </Button>
    </div>
  )
}

