import { Input } from "@/components/ui/input"
import type React from "react" // Added import for React

interface OtpInputProps {
  length?: number
  value: string[]
  onChange: (index: number, value: string) => void
  onKeyDown: (index: number, e: React.KeyboardEvent<HTMLInputElement>) => void
}

export function OtpInput({ length = 6, value, onChange, onKeyDown }: OtpInputProps) {
  return (
    <div className="grid grid-cols-6 gap-2">
      {Array.from({ length }).map((_, index) => (
        <Input
          key={index}
          id={`otp-${index}`}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={value[index]}
          onChange={(e) => onChange(index, e.target.value)}
          onKeyDown={(e) => onKeyDown(index, e)}
          className="w-full aspect-square text-center text-2xl p-0"
        />
      ))}
    </div>
  )
}
