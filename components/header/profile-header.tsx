import { ShoppingCart, FileText, Bell } from "lucide-react"
import Image from "next/image"
import { CartIcon } from "../cart/cart-icon"

interface ProfileHeaderProps {
    name: string
    id: string
    avatarUrl?: string
    onCartClick: () => void
}

export function ProfileHeader({ name, id, avatarUrl, onCartClick }: ProfileHeaderProps) {
    return (
        <div className="bg-purple-700 text-white p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Image src={avatarUrl || "/placeholder.svg"} alt="Profile" width={40} height={40} className="rounded-full" />
                    <div>
                        <h1 className="font-medium">{name}</h1>
                        <p className="text-sm opacity-80">{id}</p>
                    </div>
                </div>
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


// import { CartIcon } from "@/components/cart/cart-icon"
// import { FileText } from "lucide-react"
// import Image from "next/image"

// interface ProfileHeaderProps {
//   name: string
//   id: string
//   avatarUrl?: string
//   onCartClick: () => void
// }

// export function ProfileHeader({ name, id, avatarUrl, onCartClick }: ProfileHeaderProps) {
//   return (
//     <div className="bg-purple-700 text-white p-4">
//       <div className="flex items-center space-x-3">
//         <Image src={avatarUrl || "/placeholder.svg"} alt="Profile" width={40} height={40} className="rounded-full" />
//         <div>
//           <h1 className="font-medium">{name}</h1>
//           <p className="text-sm opacity-80">{id}</p>
//         </div>
//         <div className="ml-auto flex items-center space-x-4">
//           <CartIcon onClick={onCartClick} />
//           <button className="p-2">
//             <FileText className="h-6 w-6" />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

