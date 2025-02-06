import { Building2 } from "lucide-react"
import Link from "next/link"

export function PharmacySection() {
  return (
    <Link href="/pharmacy" className="block">
      <div className="bg-purple-100 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-700">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Praava Pharmacy</h3>
              <p className="text-sm text-gray-600">
                Send us your prescription and we will deliver it straight to your doorstep
              </p>
            </div>
          </div>
          <div className="text-purple-700">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}

