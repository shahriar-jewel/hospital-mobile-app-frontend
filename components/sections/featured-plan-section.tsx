"use client"

import { useRef, useState } from "react"
import { PlanCard } from "@/components/cards/plan-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const featuredPlans = [
  {
    id: 1,
    title: "Cardiac & Hypertension Plan 2003",
    imageUrl: "/images/plan-1.png",
    price: 2300.0,
    href: "/plans/cardiac-hypertension-2003",
  },
  {
    id: 2,
    title: "Cardiac & Hypertension Plan 2003",
    imageUrl: "/images/service-1.png",
    price: 2300.0,
    href: "/plans/cardiac-hypertension-2003",
  },
  {
    id: 3,
    title: "Diabetes Management Plan",
    imageUrl: "/placeholder.svg",
    price: 1800.0,
    href: "/plans/diabetes-management",
  },
  {
    id: 4,
    title: "Annual Health Checkup",
    imageUrl: "/placeholder.svg",
    price: 3500.0,
    href: "/plans/annual-checkup",
  },
]

export function FeaturedPlansSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(featuredPlans.length / 2)

  const scrollToPage = (pageIndex: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = container.offsetWidth * pageIndex
      container.scrollTo({ left: scrollAmount, behavior: "smooth" })
      setCurrentPage(pageIndex)
    }
  }

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      scrollToPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      scrollToPage(currentPage - 1)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Featured Plans</h2>
        <button className="text-sm text-purple-700">See all</button>
      </div>
      <div className="relative">
        <div ref={scrollContainerRef} className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="flex-shrink-0 w-full snap-start">
              <div className="grid grid-cols-2 gap-4">
                {featuredPlans.slice(pageIndex * 2, pageIndex * 2 + 2).map((plan) => (
                  <PlanCard
                    key={plan.id}
                    title={plan.title}
                    imageUrl={plan.imageUrl}
                    price={plan.price}
                    href={plan.href}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        {currentPage > 0 && (
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-1 shadow-md"
          >
            <ChevronLeft className="w-6 h-6 text-purple-700" />
          </button>
        )}
        {currentPage < totalPages - 1 && (
          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-1 shadow-md"
          >
            <ChevronRight className="w-6 h-6 text-purple-700" />
          </button>
        )}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full focus:outline-none ${
              index === currentPage ? "bg-purple-700" : "bg-gray-300"
            }`}
            onClick={() => scrollToPage(index)}
          />
        ))}
      </div>
    </div>
  )
}
