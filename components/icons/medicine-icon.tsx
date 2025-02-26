interface MedicineIconProps {
    className?: string
  }
  
  export function MedicineIcon({ className }: MedicineIconProps) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" />
        <path d="M9 12H15" />
        <path d="M12 9L12 15" />
      </svg>
    )
  }
  