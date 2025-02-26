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

