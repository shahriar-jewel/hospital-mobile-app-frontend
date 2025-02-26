import { FileText, Bell, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CartIcon } from "../cart/cart-icon"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

interface Profile {
  id: string
  name: string
  avatarUrl?: string
}

interface ProfileHeaderProps {
  name: string
  id: string
  avatarUrl?: string
  onCartClick: () => void
  profiles?: Profile[]
}

export function ProfileHeader({ name, id, avatarUrl, onCartClick, profiles = [] }: ProfileHeaderProps) {
  return (
    <div className="bg-purple-700 text-white p-4">
      <div className="flex items-center justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-3 focus:outline-none">
            <Image
              src={avatarUrl || "/placeholder.svg"}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="flex items-center space-x-1">
                <h1 className="font-medium">{name}</h1>
                <ChevronDown className="h-4 w-4 opacity-75" />
              </div>
              <p className="text-sm opacity-80">{id}</p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[280px] p-0">
            {profiles.map((profile, index) => (
              <DropdownMenuItem key={profile.id} className="focus:bg-purple-50 focus:text-purple-700 cursor-pointer">
                <Link href={`/switch-profile/${profile.id}`} className="flex items-center space-x-3 px-3 py-2 w-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={profile.avatarUrl || "/placeholder.svg"} alt={profile.name} />
                    <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{profile.name}</p>
                    <p className="text-xs text-gray-500">{profile.id}</p>
                  </div>
                </Link>
              </DropdownMenuItem>
            ))}
            <Separator className="my-2" />
            <DropdownMenuItem className="focus:bg-purple-50 focus:text-purple-700">
              <Link href="/appointments/new" className="flex items-center space-x-2 px-3 py-2 w-full">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-purple-700" />
                </div>
                <span className="text-sm font-medium text-gray-900">Book an appointment</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center space-x-2">
          <div className="ml-auto flex items-center space-x-4">
            <CartIcon onClick={onCartClick} />
            <button className="p-2">
              <Bell className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

