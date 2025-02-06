// import { Manrope } from "next/font/google"
// import "./globals.css"
// import type React from "react" // Import React

// const manrope = Manrope({
//   subsets: ["latin"],
//   // Include all weights we need
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-manrope",
// })

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={`${manrope.variable}`}>
//       <body className="font-manrope antialiased">{children}</body>
//     </html>
//   )
// }



import { Manrope } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import type React from "react"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body className="font-manrope antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}

