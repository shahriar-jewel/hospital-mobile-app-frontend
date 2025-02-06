"use client"

import { useRouter } from "next/navigation"
import { Wallet, Pill, FileText, FileCheck, Building2, Users } from "lucide-react"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { ProfileSection } from "@/components/profile/profile-section"
import { MenuItem } from "@/components/menu/menu-item"
import { BottomNav } from "@/components/navigation/bottom-nav"

export default function AccountPage() {
  const router = useRouter()

  const handleEditProfile = () => {
    router.push("/account/edit")
  }

  const handleLanguageChange = () => {
    console.log("Change language")
  }

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-full bg-white">
        <ProfileSection
          name="Tasmir Mahbub"
          id="PHBL0000456758"
          onEditProfile={handleEditProfile}
          onLanguageChange={handleLanguageChange}
        />

        <div className="flex-1 pb-24">
          <div className="py-4">
            <div className="px-4">
              <button className="w-full text-left py-3 text-[15px] text-purple-700 font-medium">Add Vitals</button>
            </div>

            <div className="border-t">
              <MenuItem icon={Wallet} label="Billing History" href="/account/billing" />
              <MenuItem icon={Pill} label="Medicine History" href="/account/medicine-history" />
              <MenuItem icon={FileText} label="Medical Reports" href="/reports" />
              <MenuItem icon={FileCheck} label="My Prescriptions" href="/account/prescriptions" />
              <MenuItem icon={Building2} label="Praava Pharmacy" href="/pharmacy" />
              <MenuItem icon={Users} label="Our Doctors" href="/doctors" />
            </div>
          </div>
        </div>

        <BottomNav />
      </div>
    </MobileLayout>
  )
}
