"use client"

import { useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

interface ImageWithSkeletonProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function ImageWithSkeleton({ src, alt, width, height, className = "" }: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <div ref={ref} className={`relative ${className}`} style={{ aspectRatio: width / height }}>
      <div
        className={`absolute inset-0 bg-gray-200 rounded-lg transition-opacity duration-300 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      />
      {inView && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={`rounded-lg transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  )
}

