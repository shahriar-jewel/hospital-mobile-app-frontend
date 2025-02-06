import Image from "next/image"
import Link from "next/link"

interface CategoryCardProps {
  title: string
  description: string
  imageUrl: string
  href: string
}

export function CategoryCard({ title, description, imageUrl, href }: CategoryCardProps) {
  return (
    <Link href={href} className="block h-[280px]">
      {" "}
      {/* Fixed height container */}
      <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col">
        <div className="relative h-[140px] flex-shrink-0">
          {" "}
          {/* Fixed height for image */}
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-medium text-gray-900 line-clamp-1 mb-1">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2 flex-1">{description}</p>
          <div className="flex items-center text-purple-700 mt-2">
            <span className="text-sm font-medium">See Details</span>
            <svg className="h-5 w-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}

