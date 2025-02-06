"use client"

import { ArrowLeft, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { CategoryCard } from "@/components/cards/category-card"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { BottomNav } from "@/components/navigation/bottom-nav"
import { useRouter } from "next/navigation"

const categories = [
  {
    id: 1,
    title: "Consultations",
    description: "Our doctors treat you with the respect and empathy you deserve",
    imageUrl: "/images/service-4.png",
    href: "/services/consultations",
  },
  {
    id: 2,
    title: "Diagnostics",
    description: "Our internationally accredited lab can meet all your testing needs",
    imageUrl: "/images/service-5.png",
    href: "/services/diagnostics",
  },
  {
    id: 3,
    title: "Beauty & Wellness",
    description: "Our personalized treatments promote your physical and mental well-being",
    imageUrl: "/images/service-3.png",
    href: "/services/beauty-wellness",
  },
  {
    id: 4,
    title: "Membership Plans",
    description: "Start a lifelong relationship with Praava",
    imageUrl: "/images/service-1.png",
    href: "/services/membership",
  },
]

export default function ServicesPage() {
  const router = useRouter()

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-full">
        {/* Header */}
        <div className="bg-purple-700 text-white">
          <div className="flex items-center px-4 h-14">
            <button onClick={() => router.back()} className="p-2 -ml-2">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-medium ml-2">Praava Services</h1>
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
                placeholder="Search for your required service"
                className="w-full pl-10 py-5 bg-gray-50"
              />
            </div>

            {/* Service Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  title={category.title}
                  description={category.description}
                  imageUrl={category.imageUrl}
                  href={category.href}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </MobileLayout>
  )
}

