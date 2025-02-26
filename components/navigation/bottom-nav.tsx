// "use client"

// import { Home, Grid, Calendar, FileText, User } from "lucide-react"
// import { usePathname, useRouter } from "next/navigation"
// import { useState, useEffect } from "react"
// import type React from "react" // Added import for React
// import { Loader } from "@/components/ui/loader"

// interface BottomNavItemProps {
//   icon: React.ReactNode
//   label: string
//   href: string
//   isActive: boolean
//   onClick: () => void
// }

// function BottomNavItem({ icon, label, href, isActive, onClick }: BottomNavItemProps) {
//   return (
//     <button
//       onClick={onClick}
//       className={`flex flex-col items-center justify-center space-y-1 ${
//         isActive ? "text-purple-700" : "text-gray-500"
//       }`}
//     >
//       {icon}
//       <span className="text-[10px]">{label}</span>
//     </button>
//   )
// }

// export function BottomNav() {
//   const pathname = usePathname()
//   const router = useRouter()
//   const [isLoading, setIsLoading] = useState(false)
//   const [loadingPath, setLoadingPath] = useState<string | null>(null)

//   useEffect(() => {
//     if (loadingPath && loadingPath !== pathname) {
//       setIsLoading(true)
//       const timer = setTimeout(() => {
//         setIsLoading(false)
//         setLoadingPath(null)
//       }, 1000)
//       return () => clearTimeout(timer)
//     }
//   }, [loadingPath, pathname])

//   const handleNavigation = (href: string) => {
//     if (href !== pathname) {
//       setLoadingPath(href)
//       router.push(href)
//     }
//   }

//   return (
//     <>
//       {isLoading && <Loader />}
//       <div className="fixed bottom-0 left-0 right-0 h-16 bg-white bg-opacity-80 backdrop-blur-sm border-t border-gray-200 max-w-[430px] mx-auto z-30">
//         <div className="px-2 py-2 flex justify-between items-center h-full">
//           <BottomNavItem
//             icon={<Home size={18} />}
//             label="Home"
//             href="/home"
//             isActive={pathname === "/home"}
//             onClick={() => handleNavigation("/home")}
//           />
//           <BottomNavItem
//             icon={<Grid size={18} />}
//             label="Services"
//             href="/services"
//             isActive={pathname === "/services"}
//             onClick={() => handleNavigation("/services")}
//           />
//           <BottomNavItem
//             icon={<Calendar size={18} />}
//             label="Appointments"
//             href="/appointments"
//             isActive={pathname === "/appointments"}
//             onClick={() => handleNavigation("/appointments")}
//           />
//           <BottomNavItem
//             icon={<FileText size={18} />}
//             label="Reports"
//             href="/reports"
//             isActive={pathname === "/reports"}
//             onClick={() => handleNavigation("/reports")}
//           />
//           <BottomNavItem
//             icon={<User size={18} />}
//             label="Account"
//             href="/account"
//             isActive={pathname === "/account"}
//             onClick={() => handleNavigation("/account")}
//           />
//         </div>
//       </div>
//     </>
//   )
// }


"use client"

import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import type React from "react"
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
      className={`flex flex-col items-center justify-center space-y-1 ${isActive ? "text-[#8A2061]" : "text-gray-500"}`}
    >
      {icon}
      <span className="text-[10px]">{label}</span>
    </button>
  )
}

interface IconProps {
  svgContent: string
  isActive: boolean
}

const Icon: React.FC<IconProps> = ({ svgContent, isActive }) => {
  const color = isActive ? "#8A2061" : "#A39DAD"
  const updatedSvgContent = svgContent.replace(/fill="[^"]*"/g, `fill="${color}"`)

  return <div dangerouslySetInnerHTML={{ __html: updatedSvgContent }} className="w-6 h-6" />
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

  const navItems = [
    {
      label: "Home",
      href: "/home",
      svgContent: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.828 8.01002L14.278 2.77002C12.998 1.75002 10.998 1.74002 9.72801 2.76002L3.17801 8.01002C2.23801 8.76002 1.66801 10.26 1.86801 11.44L3.12801 18.98C3.41801 20.67 4.98801 22 6.69801 22H17.298C18.988 22 20.588 20.64 20.878 18.97L22.138 11.43C22.318 10.26 21.748 8.76002 20.828 8.01002ZM12.748 18C12.748 18.41 12.408 18.75 11.998 18.75C11.588 18.75 11.248 18.41 11.248 18V15C11.248 14.59 11.588 14.25 11.998 14.25C12.408 14.25 12.748 14.59 12.748 15V18Z" fill=""/>
        </svg>`,
    },
    {
      label: "Services",
      href: "/services",
      svgContent: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.67 2H16.77C14.59 2 13.44 3.15 13.44 5.33V7.23C13.44 9.41 14.59 10.56 16.77 10.56H18.67C20.85 10.56 22 9.41 22 7.23V5.33C22 3.15 20.85 2 18.67 2ZM7.24 13.43H5.34C3.15 13.43 2 14.58 2 16.76V18.66C2 20.85 3.15 22 5.33 22H7.23C9.41 22 10.56 20.85 10.56 18.67V16.77C10.57 14.58 9.42 13.43 7.24 13.43ZM6.29 10.58C6.85337 10.58 7.41123 10.469 7.93171 10.2534C8.4522 10.0379 8.92513 9.72185 9.32349 9.32349C9.72185 8.92513 10.0379 8.4522 10.2534 7.93171C10.469 7.41123 10.58 6.85337 10.58 6.29C10.58 5.72663 10.469 5.16878 10.2534 4.64829C10.0379 4.1278 9.72185 3.65488 9.32349 3.25651C8.92513 2.85815 8.4522 2.54215 7.93171 2.32656C7.41123 2.11096 6.85337 2 6.29 2C5.15222 2 4.06104 2.45198 3.25651 3.25651C2.45198 4.06104 2 5.15222 2 6.29C2 7.42778 2.45198 8.51896 3.25651 9.32349C4.06104 10.128 5.15222 10.58 6.29 10.58ZM17.71 22.002C18.8478 22.002 19.939 21.55 20.7435 20.7455C21.548 19.941 22 18.8498 22 17.712C22 16.5742 21.548 15.483 20.7435 14.6785C19.939 13.874 18.8478 13.422 17.71 13.422C16.5722 13.422 15.481 13.874 14.6765 14.6785C13.872 15.483 13.42 16.5742 13.42 17.712C13.42 18.8498 13.872 19.941 14.6765 20.7455C15.481 21.55 16.5722 22.002 17.71 22.002Z" fill=""/>
</svg>
`,
    },
    {
      label: "Appointments",
      href: "/appointments",
      svgContent: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.75 3.56V2C16.75 1.59 16.41 1.25 16 1.25C15.59 1.25 15.25 1.59 15.25 2V3.5H8.75V2C8.75 1.59 8.41 1.25 8 1.25C7.59 1.25 7.25 1.59 7.25 2V3.56C4.55 3.81 3.24 5.42 3.04 7.81C3.02 8.1 3.26 8.34 3.54 8.34H20.46C20.75 8.34 20.99 8.09 20.96 7.81C20.76 5.42 19.45 3.81 16.75 3.56ZM20 9.84H4C3.45 9.84 3 10.29 3 10.84V17C3 20 4.5 22 8 22H16C19.5 22 21 20 21 17V10.84C21 10.29 20.55 9.84 20 9.84ZM9.21 18.21C9.11 18.3 9 18.37 8.88 18.42C8.76 18.47 8.63 18.5 8.5 18.5C8.37 18.5 8.24 18.47 8.12 18.42C8 18.37 7.89 18.3 7.79 18.21C7.61 18.02 7.5 17.76 7.5 17.5C7.5 17.24 7.61 16.98 7.79 16.79C7.89 16.7 8 16.63 8.12 16.58C8.36346 16.48 8.63654 16.48 8.88 16.58C9 16.63 9.11 16.7 9.21 16.79C9.39 16.98 9.5 17.24 9.5 17.5C9.5 17.76 9.39 18.02 9.21 18.21ZM9.42 14.38C9.37 14.5 9.3 14.61 9.21 14.71C9.11 14.8 9 14.87 8.88 14.92C8.76 14.97 8.63 15 8.5 15C8.37 15 8.24 14.97 8.12 14.92C8 14.87 7.89 14.8 7.79 14.71C7.7 14.61 7.63 14.5 7.58 14.38C7.52863 14.2598 7.50145 14.1307 7.5 14C7.5 13.87 7.53 13.74 7.58 13.62C7.63 13.5 7.7 13.39 7.79 13.29C7.89 13.2 8 13.13 8.12 13.08C8.36346 12.98 8.63654 12.98 8.88 13.08C9 13.13 9.11 13.2 9.21 13.29C9.3 13.39 9.37 13.5 9.42 13.62C9.47 13.74 9.5 13.87 9.5 14C9.5 14.13 9.47 14.26 9.42 14.38ZM12.71 14.71C12.61 14.8 12.5 14.87 12.38 14.92C12.26 14.97 12.13 15 12 15C11.87 15 11.74 14.97 11.62 14.92C11.5 14.87 11.39 14.8 11.29 14.71C11.11 14.52 11 14.26 11 14C11 13.74 11.11 13.48 11.29 13.29C11.39 13.2 11.5 13.13 11.62 13.08C11.86 12.97 12.14 12.97 12.38 13.08C12.5 13.13 12.61 13.2 12.71 13.29C12.89 13.48 13 13.74 13 14C13 14.26 12.89 14.52 12.71 14.71Z" fill=""/>
</svg>
`,
    },
    {
      label: "Reports",
      href: "/reports",
      svgContent: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3478 2H9.64781C8.60781 2 7.75781 2.84 7.75781 3.88V4.82C7.75781 5.86 8.59781 6.7 9.63781 6.7H14.3478C15.3878 6.7 16.2278 5.86 16.2278 4.82V3.88C16.2378 2.84 15.3878 2 14.3478 2Z" fill=""/>
<path d="M17.2391 4.81949C17.2391 6.40949 15.9391 7.70949 14.3491 7.70949H9.64906C8.05906 7.70949 6.75906 6.40949 6.75906 4.81949C6.75906 4.25949 6.15906 3.90949 5.65906 4.16949C4.94282 4.55091 4.34385 5.12003 3.92635 5.81587C3.50885 6.5117 3.28856 7.30802 3.28906 8.11949V17.5295C3.28906 19.9895 5.29906 21.9995 7.75906 21.9995H16.2391C18.6991 21.9995 20.7091 19.9895 20.7091 17.5295V8.11949C20.7091 6.40949 19.7491 4.91949 18.3391 4.16949C17.8391 3.90949 17.2391 4.25949 17.2391 4.81949ZM12.3791 16.9495H7.99906C7.58906 16.9495 7.24906 16.6095 7.24906 16.1995C7.24906 15.7895 7.58906 15.4495 7.99906 15.4495H12.3791C12.7891 15.4495 13.1291 15.7895 13.1291 16.1995C13.1291 16.6095 12.7891 16.9495 12.3791 16.9495ZM14.9991 12.9495H7.99906C7.58906 12.9495 7.24906 12.6095 7.24906 12.1995C7.24906 11.7895 7.58906 11.4495 7.99906 11.4495H14.9991C15.4091 11.4495 15.7491 11.7895 15.7491 12.1995C15.7491 12.6095 15.4091 12.9495 14.9991 12.9495Z" fill=""/>
</svg>
`,
    },
    {
      label: "Account",
      href: "/account",
      svgContent: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9963 12C13.3223 12 14.5941 11.4732 15.5318 10.5355C16.4695 9.59785 16.9963 8.32608 16.9963 7C16.9963 5.67392 16.4695 4.40215 15.5318 3.46447C14.5941 2.52678 13.3223 2 11.9963 2C10.6702 2 9.3984 2.52678 8.46072 3.46447C7.52303 4.40215 6.99625 5.67392 6.99625 7C6.99625 8.32608 7.52303 9.59785 8.46072 10.5355C9.3984 11.4732 10.6702 12 11.9963 12ZM11.9963 14.5C6.98625 14.5 2.90625 17.86 2.90625 22C2.90625 22.28 3.12625 22.5 3.40625 22.5H20.5863C20.8663 22.5 21.0863 22.28 21.0863 22C21.0863 17.86 17.0063 14.5 11.9963 14.5Z" fill=""/>
</svg>
`,
    },
  ]

  return (
    <>
      {isLoading && <Loader />}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-white bg-opacity-80 backdrop-blur-sm border-t border-gray-200 max-w-[430px] mx-auto z-30">
        <div className="px-2 py-2 flex justify-between items-center h-full">
          {navItems.map((item) => (
            <BottomNavItem
              key={item.href}
              icon={<Icon svgContent={item.svgContent} isActive={pathname === item.href} />}
              label={item.label}
              href={item.href}
              isActive={pathname === item.href}
              onClick={() => handleNavigation(item.href)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

