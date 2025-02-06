import { Loader2 } from "lucide-react"

export function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <Loader2 className="h-8 w-8 text-purple-700 animate-spin" />
    </div>
  )
}
