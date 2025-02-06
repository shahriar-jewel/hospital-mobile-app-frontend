import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
      <Input type="search" placeholder="Search for Doctors, Specialization" className="w-full pl-10 py-5 bg-gray-50" />
    </div>
  )
}

