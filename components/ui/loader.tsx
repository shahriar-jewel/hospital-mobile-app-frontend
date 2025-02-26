// import { Loader2 } from "lucide-react"

// export function Loader() {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
//       <Loader2 className="h-8 w-8 text-purple-700 animate-spin" />
//     </div>
//   )
// }


export function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 z-50">
      <div className="relative w-16 h-16">
        <svg className="animate-spin text-purple-700" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <div className="absolute inset-1 bg-purple-50 rounded-full"></div>
      </div>
      <p className="mt-4 text-purple-700 font-medium">Loading...</p>
    </div>
  )
}


