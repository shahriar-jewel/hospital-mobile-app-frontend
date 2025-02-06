"use client"

import { useState } from "react"
import Image from "next/image"
import { ProductDrawer } from "@/components/drawers/product-drawer"

interface ProductCardProps {
  id: string // Added id prop
  title: string
  imageUrl: string
  price: number
  originalPrice?: number
  discount?: number
  unit?: string
  href: string
  variant?: "default" | "simple"
  genericName?: string
  type?: string
}

export function ProductCard({
  id, // Added id to props
  title,
  imageUrl,
  price,
  originalPrice,
  discount,
  unit,
  href,
  variant = "default",
  genericName,
  type,
}: ProductCardProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDrawerOpen(true)
  }

  if (variant === "simple") {
    return (
      <>
        <button
          onClick={handleClick}
          className="block w-[120px] flex-shrink-0 bg-white rounded-lg border border-gray-100 overflow-hidden text-left"
        >
          <div className="relative h-[120px]">
            <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
            <div className="absolute bottom-2 right-2 bg-purple-700 rounded-full p-2">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-[13px] text-gray-900 line-clamp-2 min-h-[40px]">{title}</h3>
            {originalPrice && <p className="text-[11px] text-gray-400 line-through">TK {originalPrice}</p>}
            <p className="text-[13px] font-medium text-purple-700">
              TK {price} {unit && `/${unit}`}
            </p>
          </div>
        </button>

        <ProductDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          product={{
            id, // Added id to product object
            title,
            imageUrl,
            price,
            originalPrice,
            unit,
            discount,
            genericName,
            type,
          }}
        />
      </>
    )
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="block w-[140px] flex-shrink-0 bg-white rounded-lg border border-gray-100 overflow-hidden text-left"
      >
        <div className="relative">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={140}
            height={140}
            className="w-full object-cover"
          />
          {discount && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded">
              {discount}% off
            </div>
          )}
        </div>
        <div className="p-2">
          <h3 className="text-[13px] text-gray-900 line-clamp-2">{title}</h3>
          <p className="text-[13px] font-medium text-purple-700 mt-1">TK {price}</p>
        </div>
      </button>

      <ProductDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        product={{
          id, // Added id to product object
          title,
          imageUrl,
          price,
          originalPrice,
          unit,
          discount,
          genericName,
          type,
        }}
      />
    </>
  )
}
