import { Input } from "@/components/ui/input"

interface PhoneInputProps {
  value: string
  onChange: (value: string) => void
  countryCode?: string
}

export function PhoneInput({ value, onChange, countryCode = "+880" }: PhoneInputProps) {
  return (
    <div className="relative">
      <Input
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 py-5 w-full border-gray-300 rounded-lg"
        placeholder="1611054433"
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">{countryCode}</span>
    </div>
  )
}

