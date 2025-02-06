"use client"
import { format, addDays, isSameDay } from "date-fns"
import { cn } from "@/lib/utils"

interface CalendarProps {
  onDateSelect: (date: Date) => void
  onTimeSelect: (time: string) => void
  selectedDate?: Date
  selectedTime?: string
}

export function Calendar({ onDateSelect, onTimeSelect, selectedDate, selectedTime }: CalendarProps) {
  const today = new Date()
  const dates = Array.from({ length: 5 }, (_, i) => addDays(today, i))

  // Hardcoded time slots for demonstration
  const timeSlots = ["11:00 - 13:00", "14:00 - 16:00", "17:00 - 19:00"]

  return (
    <div className="space-y-4">
      {/* Date Selection */}
      <div className="grid grid-cols-5 gap-1 text-center">
        {dates.map((date) => {
          const dayNum = format(date, "d")
          const dayName = format(date, "EEE")
          const isSelected = selectedDate && isSameDay(date, selectedDate)

          return (
            <button
              key={date.toISOString()}
              onClick={() => onDateSelect(date)}
              className={cn(
                "py-2 rounded-lg text-sm transition-colors",
                isSelected ? "bg-purple-700 text-white" : "hover:bg-purple-50",
              )}
            >
              <div className="font-medium">{dayNum}</div>
              <div className="text-xs">{dayName}</div>
            </button>
          )
        })}
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div className="flex flex-wrap gap-2">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => onTimeSelect(time)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm transition-colors",
                selectedTime === time
                  ? "bg-purple-700 text-white"
                  : "bg-white border border-gray-200 hover:border-purple-200",
              )}
            >
              {time}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

