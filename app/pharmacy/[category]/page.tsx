"use client"

import { useRouter, useParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { BottomNav } from "@/components/navigation/bottom-nav"
import { MedicineIcon } from "@/components/icons/medicine-icon"
import { useEffect, useState } from "react"
import { Loader } from "@/components/ui/loader"

// This would typically come from an API
const categoryData: Record<
  string,
  {
    title: string
    subcategories: Array<{
      id: number
      title: string
      slug: string
    }>
  }
> = {
  "common-conditions": {
    title: "Common Condition",
    subcategories: [
      { id: 1, title: "Cough, Cold & Flu", slug: "cough-cold-flu" },
      { id: 2, title: "All Meds", slug: "all-meds" },
      { id: 3, title: "Fever & Pain", slug: "fever-pain" },
      { id: 4, title: "Baby Care", slug: "baby-care" },
      { id: 5, title: "Diabetes", slug: "diabetes" },
      { id: 6, title: "Skin & Hair", slug: "skin-hair" },
    ],
  },
  "baby-care": {
    title: "Baby Care",
    subcategories: [
      { id: 1, title: "Baby\nFood", slug: "baby-food" },
      { id: 2, title: "Diapers", slug: "diapers" },
      // Add more subcategories as needed
    ],
  },
  // Add more categories as needed
}

export default function CategoryPage() {
  const router = useRouter()
  const params = useParams()
  const category = params.category as string
  const [isLoading, setIsLoading] = useState(true)
    
      useEffect(() => {
        const loadData = async () => {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1500))
          setIsLoading(false)
        }
    
        loadData()
      }, [])

  // Get category data or show 404
  const data = categoryData[category]
  if (!data) {
    return <div>Category not found</div>
  }

  return (
    <MobileLayout>
      {isLoading && <Loader />}
      <div className="flex flex-col min-h-full bg-white">
        {/* Header */}
        <div className="bg-purple-700 text-white">
          <div className="flex items-center px-4 h-12">
            <button onClick={() => router.back()} className="p-2 -ml-2">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <h1 className="text-sm font-medium ml-2">{data.title}</h1>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="px-4 py-2 text-xs border-b">
          <div className="flex items-center text-gray-600">
            <span>Medicines</span>
            <span className="mx-1">{">"}</span>
            <span className="text-gray-900">{data.title}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4">
          <div className="grid grid-cols-3 gap-4">
            {data.subcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                onClick={() => router.push(`/pharmacy/${category}/${subcategory.slug}`)}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-2 relative">
                  <div className="w-12 h-12 rounded-full border-2 border-purple-700 flex items-center justify-center">
                    <MedicineIcon className="w-6 h-6 text-purple-700" />
                  </div>
                </div>
                <span className="text-xs text-gray-900 whitespace-pre-line">{subcategory.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </MobileLayout>
  )
}

