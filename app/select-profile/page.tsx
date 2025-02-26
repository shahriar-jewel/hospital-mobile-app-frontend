"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { ProfileCard } from "@/components/cards/profile-card"
import { Plus } from "lucide-react"
import Image from "next/image"

interface Profile {
  id: string
  name: string
  profileId: string
  imageUrl: string
}

const profiles: Profile[] = [
  {
    id: "1",
    name: "Tasmir",
    profileId: "PHBL0000456758",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Tasmir",
    profileId: "PHBL0000456758",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Tasmir",
    profileId: "PHBL0000456758",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "4",
    name: "Tasmir",
    profileId: "PHBL0000456758",
    imageUrl: "/placeholder.svg",
  },
]

export default function SelectProfilePage() {
  const router = useRouter()
  const [selectedProfile, setSelectedProfile] = useState(profiles[0].id)

  const handleDone = () => {
    router.push("/home")
  }

  const handleAddProfile = () => {
    router.push("/create-profile")
  }

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-full bg-white px-6 pt-8 pb-8">
        {/* Logo */}
        <div className="mb-8">
          <Image src="/placeholder.svg" alt="Praava Health" width={120} height={40} className="h-10 w-auto" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Select Profile</h1>

        {/* Profile Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              name={profile.name}
              profileId={profile.profileId}
              imageUrl={profile.imageUrl}
              isSelected={selectedProfile === profile.id}
              onSelect={() => setSelectedProfile(profile.id)}
              onEdit={() => router.push("/create-profile")}
            />
          ))}
        </div>

        {/* Helper Text */}
        <p className="text-sm text-gray-600 mb-4">You can also add profiles of your friends and family.</p>

        {/* Add Profile Button */}
        <button onClick={handleAddProfile} className="flex items-center text-purple-700 font-medium text-sm mb-6">
          <Plus className="w-4 h-4 mr-1" />
          Add New Profile
        </button>

        {/* Done Button */}
        <Button onClick={handleDone} className="w-full bg-purple-700 hover:bg-purple-800 text-white">
          Done
        </Button>
      </div>
    </MobileLayout>
  )
}

