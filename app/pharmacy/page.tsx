"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Search, HelpCircle, FileText, Pill } from "lucide-react"
import { Input } from "@/components/ui/input"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { PharmacyCategoryCard } from "@/components/cards/pharmacy-category-card"
import { ProductCard } from "@/components/cards/product-card"
import { ActionButton } from "@/components/buttons/action-button"
import { BottomNav } from "@/components/navigation/bottom-nav"
import { CartIcon } from "@/components/cart/cart-icon"
import { Loader } from "@/components/ui/loader"

const categories = [
  { title: "Common Conditions", href: "/pharmacy/common-conditions" },
  { title: "Sexual Wellness", href: "/pharmacy/sexual-wellness" },
  { title: "Health & Wellness", href: "/pharmacy/health-wellness" },
  { title: "Baby Care", href: "/pharmacy/baby-care" },
  { title: "Diabetes", href: "/pharmacy/diabetes" },
  { title: "Skin & Hair", href: "/pharmacy/skin-hair" },
]

const popularProducts = [
  {
    id: "1",
    title: "Vitamin D3 Supplement",
    imageUrl: "/placeholder.svg",
    price: 450,
    discount: 10,
    href: "/pharmacy/products/vitamin-d3",
  },
  {
    id: "2",
    title: "Calcium Plus Tablets",
    imageUrl: "/placeholder.svg",
    price: 350,
    href: "/pharmacy/products/calcium-plus",
  },
  {
    id: "3",
    title: "Omega 3 Fish Oil",
    imageUrl: "/placeholder.svg",
    price: 550,
    discount: 15,
    href: "/pharmacy/products/omega-3",
  },
]

const babyCareProducts = [
  {
    id: "4",
    title: "Napa 500 mg",
    imageUrl: "/placeholder.svg",
    price: 120,
    originalPrice: 135,
    unit: "Box",
    type: "Tablet",
    genericName: "Paracetamol",
    discount: 10,
    href: "/pharmacy/products/napa-500mg",
  },
  {
    id: "5",
    title: "Next cap capsul delayed 20 mg",
    imageUrl: "/placeholder.svg",
    price: 135,
    discountedPrice: 120,
    unit: "Box",
    href: "/pharmacy/products/next-cap",
  },
  {
    id: "6",
    title: "Napa 500 mg",
    imageUrl: "/placeholder.svg",
    price: 135,
    discountedPrice: 120,
    unit: "Box",
    href: "/pharmacy/products/napa-500mg-2",
  },
]

export default function PharmacyPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      const loadData = async () => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setIsLoading(false)
      }
  
      loadData()
    }, [])

  const handleCartClick = () => {
    router.push("/cart")
  }

  return (
    <MobileLayout>
      {isLoading && <Loader />}
      <div className="flex flex-col min-h-full bg-gray-50">
        {/* Header */}
        <div className="bg-purple-700 text-white">
          <div className="flex items-center justify-between px-4 h-14">
            <div className="flex items-center">
              <button onClick={() => router.back()} className="p-2 -ml-2">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <h1 className="text-[17px] font-medium ml-2">Pharmacy</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2">
                <CartIcon onClick={handleCartClick} />
              </div>
              <button className="p-2">
                <HelpCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="p-4 space-y-6 pb-24">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="search"
                placeholder="Search for medicine"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-5 bg-white"
              />
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <ActionButton icon={FileText} label="Upload your prescription" href="/pharmacy/upload-prescription" />
              <ActionButton
                icon={Pill}
                label="Order your medicine"
                sublabel="Type your required medicine"
                href="/pharmacy/order-medicine"
              />
            </div>

            {/* Categories */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[15px] font-semibold text-gray-900">Shop by Categories</h2>
                <button className="text-[13px] text-purple-700">See all</button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {categories.map((category) => (
                  <PharmacyCategoryCard key={category.title} title={category.title} href={category.href} />
                ))}
              </div>
            </div>

            {/* Popular Products */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[15px] font-semibold text-gray-900">Popular</h2>
                <button className="text-[13px] text-purple-700">See all</button>
              </div>
              <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4">
                <div className="flex gap-3 pb-4">
                  {popularProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      imageUrl={product.imageUrl}
                      price={product.price}
                      discount={product.discount}
                      href={product.href}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Baby Care Products */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[15px] font-semibold text-gray-900">Baby Care</h2>
                <button className="text-[13px] text-purple-700">See all</button>
              </div>
              <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4">
                <div className="flex gap-3 pb-4">
                  {babyCareProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      imageUrl={product.imageUrl}
                      originalPrice={product.originalPrice}
                      price={product.price}
                      unit={product.unit}
                      href={product.href}
                      variant="simple"
                      genericName={product.genericName}
                      type={product.type}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </MobileLayout>
  )
}
