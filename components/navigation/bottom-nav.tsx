// "use client"

// import Link from "next/link"
// import { Home, Grid, Calendar, FileText, User } from "lucide-react"
// import { usePathname } from "next/navigation"
// import type React from "react"

// interface BottomNavItemProps {
//   icon: React.ReactNode
//   label: string
//   href: string
//   isActive: boolean
// }

// function BottomNavItem({ icon, label, href, isActive }: BottomNavItemProps) {
//   return (
//     <Link
//       href={href}
//       className={`flex flex-col items-center justify-center space-y-1 ${
//         isActive ? "text-purple-700" : "text-gray-500"
//       }`}
//     >
//       {icon}
//       <span className="text-[10px]">{label}</span>
//     </Link>
//   )
// }

// export function BottomNav() {
//   const pathname = usePathname()

//   return (
//     <div className="fixed bottom-0 left-0 right-0 h-16 bg-white bg-opacity-80 backdrop-blur-sm border-t border-gray-200 max-w-[430px] mx-auto">
//       <div className="px-2 py-2 flex justify-between items-center h-full">
//         <BottomNavItem icon={<Home size={18} />} label="Home" href="/home" isActive={pathname === "/home"} />
//         <BottomNavItem
//           icon={<Grid size={18} />}
//           label="Services"
//           href="/services"
//           isActive={pathname === "/services"}
//         />
//         <BottomNavItem
//           icon={<Calendar size={18} />}
//           label="Appointments"
//           href="/appointments"
//           isActive={pathname === "/appointments"}
//         />
//         <BottomNavItem
//           icon={<FileText size={18} />}
//           label="Reports"
//           href="/reports"
//           isActive={pathname === "/reports"}
//         />
//         <BottomNavItem icon={<User size={18} />} label="Account" href="/account" isActive={pathname === "/account"} />
//       </div>
//     </div>
//   )
// }



"use client"

import { Home, Grid, Calendar, FileText, User } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import type React from "react" // Added import for React
import { Loader } from "@/components/ui/loader"

interface BottomNavItemProps {
  icon: React.ReactNode
  label: string
  href: string
  isActive: boolean
  onClick: () => void
}

function BottomNavItem({ icon, label, href, isActive, onClick }: BottomNavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center space-y-1 ${
        isActive ? "text-purple-700" : "text-gray-500"
      }`}
    >
      {icon}
      <span className="text-[10px]">{label}</span>
    </button>
  )
}

export function BottomNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [loadingPath, setLoadingPath] = useState<string | null>(null)

  useEffect(() => {
    if (loadingPath && loadingPath !== pathname) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
        setLoadingPath(null)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [loadingPath, pathname])

  const handleNavigation = (href: string) => {
    if (href !== pathname) {
      setLoadingPath(href)
      router.push(href)
    }
  }

  return (
    <>
      {isLoading && <Loader />}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-white bg-opacity-80 backdrop-blur-sm border-t border-gray-200 max-w-[430px] mx-auto">
        <div className="px-2 py-2 flex justify-between items-center h-full">
          <BottomNavItem
            icon={<Home size={18} />}
            label="Home"
            href="/home"
            isActive={pathname === "/home"}
            onClick={() => handleNavigation("/home")}
          />
          <BottomNavItem
            icon={<Grid size={18} />}
            label="Services"
            href="/services"
            isActive={pathname === "/services"}
            onClick={() => handleNavigation("/services")}
          />
          <BottomNavItem
            icon={<Calendar size={18} />}
            label="Appointments"
            href="/appointments"
            isActive={pathname === "/appointments"}
            onClick={() => handleNavigation("/appointments")}
          />
          <BottomNavItem
            icon={<FileText size={18} />}
            label="Reports"
            href="/reports"
            isActive={pathname === "/reports"}
            onClick={() => handleNavigation("/reports")}
          />
          <BottomNavItem
            icon={<User size={18} />}
            label="Account"
            href="/account"
            isActive={pathname === "/account"}
            onClick={() => handleNavigation("/account")}
          />
        </div>
      </div>
    </>
  )
}


