"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { X, ShoppingCart, Plus, Minus } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useCart } from "@/contexts/cart-context"

interface ProductDrawerProps {
  isOpen: boolean
  onClose: () => void
  product: {
    id: string
    title: string
    imageUrl: string
    price: number
    originalPrice?: number
    unit?: string
    discount?: number
    genericName?: string
    type?: string
  }
}

export function ProductDrawer({ isOpen, onClose, product }: ProductDrawerProps) {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: quantity,
    })
    onClose()
    router.push("/cart")
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="fixed inset-x-0 bottom-0 p-0 rounded-t-xl w-full max-w-[430px] mx-auto h-[90vh] bg-white data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom">
        <DialogTitle className="sr-only">Product Details</DialogTitle>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Product Detail</h2>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {/* Product Image */}
              <div className="relative bg-gray-50 rounded-lg overflow-hidden">
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="w-full object-contain"
                />
                {product.discount && (
                  <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                    {product.discount}% off
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                {product.type && <p className="text-sm text-gray-500">{product.type}</p>}
                <h2 className="text-xl font-semibold">{product.title}</h2>
                {product.genericName && <p className="text-gray-600">{product.genericName}</p>}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through">TK {product.originalPrice}</span>
                    )}
                    <span className="text-lg font-semibold text-purple-700">
                      TK {product.price}
                      {product.unit && <span className="text-sm text-gray-500">/{product.unit}</span>}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-2 py-1">
                    <button
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="w-6 h-6 rounded-full bg-purple-700 flex items-center justify-center text-white"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-6 h-6 rounded-full bg-purple-700 flex items-center justify-center text-white"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-4">
                <section>
                  <h3 className="text-lg font-semibold mb-2">Contraindications</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur. Massa sed ac at consectetur faucibus etiam aliquam.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">Dosage</h3>
                  <p className="text-gray-600">Lorem ipsum</p>
                  <p className="text-gray-600 mt-2">
                    dolor sit amet consectetur aequat molestie vestibulum habitasse ac. In etiam semper ornare semper
                    semper. Eget faucibus in ut tincidunt id nunc sed.
                  </p>
                </section>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="p-4 border-t bg-white mt-auto">
            <Button onClick={handleAddToCart} className="w-full bg-purple-700 hover:bg-purple-800 text-white" size="lg">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

