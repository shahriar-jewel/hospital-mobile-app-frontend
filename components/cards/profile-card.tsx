import Image from "next/image"
import { PenSquare } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProfileCardProps {
  name: string
  profileId: string
  imageUrl: string
  isSelected?: boolean
  onSelect: () => void
  onEdit: () => void
}

export function ProfileCard({ name, profileId, imageUrl, isSelected = false, onSelect, onEdit }: ProfileCardProps) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "w-full p-4 rounded-lg text-center transition-colors relative",
        isSelected ? "bg-purple-700 text-white" : "bg-gray-100 text-gray-900",
      )}
    >
      <div className="flex flex-col items-center">
        <div className="relative mb-2">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          {isSelected && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onEdit()
              }}
              className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md"
            >
              <PenSquare className="w-3 h-3 text-purple-700" />
            </button>
          )}
        </div>
        <div className="space-y-1">
          <h3 className={cn("text-sm font-medium", isSelected ? "text-white" : "text-gray-900")}>{name}</h3>
          <p className={cn("text-xs", isSelected ? "text-white/80" : "text-gray-500")}>{profileId}</p>
        </div>
      </div>
    </button>
  )
}

