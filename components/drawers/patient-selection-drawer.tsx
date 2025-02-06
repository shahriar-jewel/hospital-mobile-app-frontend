"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface Patient {
  id: string
  name: string
  patientId: string
  imageUrl: string
}

interface PatientSelectionDrawerProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (patient: Patient) => void
  selectedPatient?: Patient
}

const patients: Patient[] = [
  {
    id: "1",
    name: "Tasmir",
    patientId: "PHBL0000456758",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "2",
    name: "John Doe",
    patientId: "PHBL0000456759",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Jane Smith",
    patientId: "PHBL0000456760",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "4",
    name: "Alice Johnson",
    patientId: "PHBL0000456761",
    imageUrl: "/placeholder.svg",
  },
]

export function PatientSelectionDrawer({ isOpen, onClose, onSelect, selectedPatient }: PatientSelectionDrawerProps) {
  const router = useRouter()
  const [localSelectedPatient, setLocalSelectedPatient] = useState<Patient | undefined>(selectedPatient)

  const handlePatientSelect = (patient: Patient) => {
    setLocalSelectedPatient(patient)
    onSelect(patient)
  }

  const handleDone = () => {
    if (localSelectedPatient) {
      onClose()
      router.push("/appointments/confirmation")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="fixed inset-x-0 bottom-0 p-0 rounded-t-xl w-full max-w-[430px] mx-auto h-[50vh] bg-white data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Select patient</h2>
              <p className="text-sm text-gray-500">For whom do you want to make an appointment?</p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Patient Grid */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-2 gap-3">
              {patients.map((patient) => (
                <button
                  key={patient.id}
                  onClick={() => handlePatientSelect(patient)}
                  className={`p-4 rounded-lg text-left transition-colors ${
                    localSelectedPatient?.id === patient.id
                      ? "bg-purple-700 text-white"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <Image
                      src={patient.imageUrl || "/placeholder.svg"}
                      alt={patient.name}
                      width={64}
                      height={64}
                      className="rounded-full mb-2"
                    />
                    <div className="text-center">
                      <div
                        className={`font-medium ${
                          localSelectedPatient?.id === patient.id ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {patient.name}
                      </div>
                      <div className={localSelectedPatient?.id === patient.id ? "text-purple-200" : "text-gray-500"}>
                        {patient.patientId}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t bg-white mt-auto">
            <Button
              className="w-full bg-purple-700 hover:bg-purple-800 text-white"
              size="lg"
              onClick={handleDone}
              disabled={!localSelectedPatient}
            >
              Done
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
