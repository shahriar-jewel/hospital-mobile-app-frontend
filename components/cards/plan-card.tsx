import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

interface PlanCardProps {
  title: string
  imageUrl: string
  price: number
  href: string
}

export function PlanCard({ title, imageUrl, price, href }: PlanCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100">
      <div className="relative h-[120px]">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-3 space-y-2">
        <h3 className="font-medium text-sm text-gray-900 line-clamp-2">{title}</h3>
        <Link href={`${href}/details`} className="text-xs text-purple-700 block">
          See details
        </Link>
        <div className="flex items-center justify-between pt-1">
          <div className="text-sm font-medium">TK {price.toLocaleString()}</div>
          <button className="flex items-center justify-center space-x-1 px-3 py-1.5 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition-colors">
            <span className="text-xs">Book Now</span>
            <ShoppingCart className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  )
}
