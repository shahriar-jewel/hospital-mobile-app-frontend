import Image from "next/image"
import { Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProfileSectionProps {
  name: string
  id: string
  imageUrl?: string
  onEditProfile: () => void
  onLanguageChange: () => void
}

export function ProfileSection({ name, id, imageUrl, onEditProfile, onLanguageChange }: ProfileSectionProps) {
  return (
    <div className="bg-purple-700 text-white px-4 pt-6 pb-8">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Image src={imageUrl || "/placeholder.svg"} alt={name} width={48} height={48} className="rounded-full" />
          </div>
          <div>
            <h2 className="text-[17px] font-medium">{name}</h2>
            <p className="text-[13px] text-purple-200">{id}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onLanguageChange}
          className="text-white hover:text-white hover:bg-purple-600 text-[13px] h-8"
        >
          বাংলা
        </Button>
      </div>
      <Button
        variant="secondary"
        size="sm"
        onClick={onEditProfile}
        className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-500 text-white border-none h-8"
      >
        <span className="text-[13px]">Edit Profile</span>
        <Pencil className="h-4 w-4" />
      </Button>
    </div>
  )
}

