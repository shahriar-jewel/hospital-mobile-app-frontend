import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileHeaderProps {
  onBack?: () => void
  languageText?: string
  onLanguageChange?: () => void
}

export function MobileHeader({ onBack, languageText = "বাংলা", onLanguageChange }: MobileHeaderProps) {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200">
      <button onClick={onBack} className="text-gray-600 hover:text-gray-900 transition-colors">
        <ArrowLeft className="h-6 w-6" />
      </button>
      <Button
        variant="outline"
        onClick={onLanguageChange}
        className="px-3 py-1 text-sm rounded-full border-purple-700 text-purple-700 hover:bg-purple-50"
      >
        {languageText}
      </Button>
    </div>
  )
}

