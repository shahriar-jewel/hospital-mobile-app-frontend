

// import type { ReactNode } from "react"

// interface MobileLayoutProps {
//   children: ReactNode
// }

// export function MobileLayout({ children }: MobileLayoutProps) {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full h-full max-w-[430px] bg-white shadow-2xl overflow-hidden relative">
//         <div className="h-full overflow-y-auto scrollbar-hide">{children}</div>
//       </div>
//     </div>
//   )
// }


import type React from "react"
interface MobileLayoutProps {
  children: React.ReactNode
}

export function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full h-full min-h-screen max-w-[430px] bg-white shadow-2xl overflow-hidden relative flex flex-col">
        {children}
      </div>
    </div>
  )
}

