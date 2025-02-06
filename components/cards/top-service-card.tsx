import Image from "next/image"
import Link from "next/link"

interface TopServiceCardProps {
  title: string
  imageUrl: string;
  href: string
  isFirst?: boolean
  className?: string
}

export function TopServiceCard({ title, imageUrl, href, isFirst = false, className = "" }: TopServiceCardProps) {
  return (
    <Link href={href} className={`block flex-shrink-0 ${isFirst ? "w-[85%]" : "w-64"} ${className}`}>
      <div className="relative rounded-lg overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={320}
          height={200}
          className="w-full h-40 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-white text-base font-medium">{title}</h3>
        </div>
      </div>
    </Link>
  )
}

