"use client"

import { useRouter, useParams } from "next/navigation"
import { ArrowLeft, Plus } from "lucide-react"
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { Input } from "@/components/ui/input"
import { CartIcon } from "@/components/cart/cart-icon"
import { BottomNav } from "@/components/navigation/bottom-nav"
import { useCart } from "@/contexts/cart-context"
import { toast } from "@/components/ui/use-toast"
import { QuantitySelector } from "@/components/ui/quantity-selector"
import { useEffect, useState, useRef } from "react"
import { Loader } from "@/components/ui/loader"

interface Product {
  id: string
  name: string
  originalPrice: number
  price: number
  unit: string
  imageUrl: string
  discount?: number
}

// Simulated API call
const fetchProducts = (page: number, limit: number): Product[] => {
  const startIndex = (page - 1) * limit
  return Array.from({ length: limit }, (_, index) => ({
    id: `product-${startIndex + index + 1}`,
    name: `Product ${startIndex + index + 1}`,
    originalPrice: 135,
    price: 120,
    unit: "Box",
    imageUrl: "/images/napa.png",
    discount: index % 3 === 0 ? 10 : undefined,
  }))
}

const formatTitle = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export default function SubcategoryPage() {
  const router = useRouter()
  const params = useParams()
  const category = params.category as string
  const subcategory = params.subcategory as string
  const [products, setProducts] = useState<Product[]>([])
  const [page, setPage] = useState(1)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const loaderRef = useRef(null)

  const title = formatTitle(subcategory)

  const { addItem, updateQuantity, removeItem, state } = useCart()

  useEffect(() => {
    // Load initial 20 products
    setProducts(fetchProducts(1, 20))
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingMore) {
          loadMoreProducts()
        }
      },
      { threshold: 1.0 },
    )

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => observer.disconnect()
  }, [isLoadingMore])

  const loadMoreProducts = () => {
    setIsLoadingMore(true)
    const newProducts = fetchProducts(page + 1, 20)
    setProducts((prevProducts) => [...prevProducts, ...newProducts])
    setPage((prevPage) => prevPage + 1)
    setIsLoadingMore(false)
  }

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      category: 'Medicine'
    })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleIncreaseQuantity = (productId: string) => {
    const item = state.items.find((item) => item.id === productId)
    if (item) {
      updateQuantity(productId, item.quantity + 1)
    }
  }

  const handleDecreaseQuantity = (productId: string) => {
    const item = state.items.find((item) => item.id === productId)
    if (item) {
      if (item.quantity > 1) {
        updateQuantity(productId, item.quantity - 1)
      } else {
        removeItem(productId)
      }
    }
  }

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-full bg-gray-50">
        <div className="bg-purple-700 text-white">
          <div className="flex items-center justify-between px-4 h-12">
            <div className="flex items-center">
              <button onClick={() => router.back()} className="p-2 -ml-2">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <h1 className="text-sm font-medium ml-2">{title}</h1>
            </div>
            <CartIcon onClick={() => router.push("/cart")} />
          </div>
        </div>

        <div className="p-4">
          <Input type="search" placeholder="Search for medicine" className="bg-white text-sm" />
        </div>

        <div className="flex-1 p-4 pt-0 pb-24">
          <div className="grid grid-cols-3 gap-3">
            {products.map((product) => {
              const cartItem = state.items.find((item) => item.id === product.id)

              return (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="relative">
                    <div className="absolute top-2 left-2 z-20">
                      <span className="text-xs font-medium bg-purple-700 text-white px-1.5 py-0.5 rounded">
                        ৳{product.price}
                      </span>
                    </div>
                    {product.discount && (
                      <div className="absolute top-2 right-2 z-20">
                        <span className="text-[10px] font-medium bg-orange-500 text-white px-1.5 py-0.5 rounded">
                          {product.discount}% off
                        </span>
                      </div>
                    )}
                    <div className="relative aspect-square overflow-hidden group">
                      <ImageWithSkeleton
                        src={product.imageUrl || "/images/napa.png"}
                        alt={product.name}
                        width={120}
                        height={120}
                        className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                      />
                      <div className="absolute bottom-2 right-2">
                        {cartItem && cartItem.quantity > 0 ? (
                          <QuantitySelector
                            quantity={cartItem.quantity}
                            onIncrease={() => handleIncreaseQuantity(product.id)}
                            onDecrease={() => handleDecreaseQuantity(product.id)}
                            size="sm"
                          />
                        ) : (
                          <button
                            className="w-6 h-6 rounded-full bg-purple-700 flex items-center justify-center shadow-md"
                            onClick={() => handleAddToCart(product)}
                          >
                            <Plus className="w-4 h-4 text-white" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <h3 className="text-xs font-medium text-gray-900 line-clamp-2">{product.name}</h3>
                  </div>
                </div>
              )
            })}
          </div>
          <div ref={loaderRef} className="text-center py-4">
            {isLoadingMore ? <Loader /> : "Scroll for more"}
          </div>
        </div>

        <BottomNav />
      </div>
    </MobileLayout>
  )
}


