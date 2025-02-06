"use client"

import { Calendar, FileText, ShoppingBag } from "lucide-react"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { ProfileHeader } from "@/components/header/profile-header"
import { SearchBar } from "@/components/search/search-bar"
import { ServiceCard } from "@/components/cards/service-card"
import { TopServicesSection } from "@/components/sections/top-services-section"
import { PharmacySection } from "@/components/sections/pharmacy-section"
import { OnDemandCareSection } from "@/components/sections/on-demand-care-section"
import { FeaturedPlansSection } from "@/components/sections/featured-plan-section"
import { BottomNav } from "@/components/navigation/bottom-nav"
import { useRouter } from "next/navigation"

function Separator() {
    return <div className="h-[3px] bg-gray-200 w-full my-6" />
}

export default function HomePage() {
    const router = useRouter()
    const handleCartClick = () => {
        router.push("/cart")
    }
    return (
        <MobileLayout>
            <div className="flex flex-col min-h-full">
                <ProfileHeader name="Noman" id="PI-BL0000456758" avatarUrl="/images/noman.jpg" onCartClick={handleCartClick} />

                <div className="flex-1 overflow-y-auto scrollbar-hide">
                    <div className="py-6 space-y-6 pb-24">
                        <div className="px-4">
                            <SearchBar />
                        </div>

                        <div className="px-4">
                            <h2 className="text-lg font-semibold mb-4">Select a Service</h2>
                            <div className="space-y-2">
                                <ServiceCard
                                    icon={<Calendar className="h-6 w-6" />}
                                    title="Book an appointment"
                                    description="Talk to a specialist today"
                                    href="/appointments/new"
                                />
                                <ServiceCard
                                    icon={<FileText className="h-6 w-6" />}
                                    title="Book a test"
                                    description="Book lab tests & view results here"
                                    href="/tests/new"
                                />
                                <ServiceCard
                                    icon={<ShoppingBag className="h-6 w-6" />}
                                    title="Order your medicine"
                                    description="We deliver to your doorstep"
                                    href="/medicine/order"
                                />
                            </div>
                        </div>

                        <Separator />

                        <div className="px-4">
                            <TopServicesSection />
                        </div>

                        <div className="px-4">
                            <PharmacySection />
                        </div>

                        <Separator />

                        <div className="px-4">
                            <OnDemandCareSection />
                        </div>

                        <Separator />

                        <div className="px-4">
                            <FeaturedPlansSection />
                        </div>
                    </div>
                </div>

                <BottomNav />
            </div>
        </MobileLayout>
    )
}


// "use client"

// import { Calendar, FileText, ShoppingBag } from "lucide-react"
// import { MobileLayout } from "@/components/layouts/mobile-layouts"
// import { ProfileHeader } from "@/components/header/profile-header"
// import { SearchBar } from "@/components/search/search-bar"
// import { ServiceCard } from "@/components/cards/service-card"
// import { TopServicesSection } from "@/components/sections/top-services-section"
// import { PharmacySection } from "@/components/sections/pharmacy-section"
// import { OnDemandCareSection } from "@/components/sections/on-demand-care-section"
// import { FeaturedPlansSection } from "@/components/sections/featured-plan-section"
// import { BottomNav } from "@/components/navigation/bottom-nav"
// import { useRouter } from "next/navigation"

// function Separator() {
//   return <div className="h-px bg-gray-200 w-full my-6" />
// }

// export default function HomePage() {
//   const router = useRouter()

//   const handleCartClick = () => {
//     router.push("/cart")
//   }

//   return (
//     <MobileLayout>
//       <div className="flex flex-col min-h-full">
//         <ProfileHeader name="Tasmir" id="PI-BL0000456758" onCartClick={handleCartClick} />

//         <div className="flex-1 overflow-y-auto scrollbar-hide">
//           <div className="py-6 space-y-6 pb-24">
//             <div className="px-4">
//               <SearchBar />
//             </div>

//             <Separator />

//             <div className="px-4">
//               <h2 className="text-lg font-semibold mb-4">Select a Service</h2>
//               <div className="space-y-2">
//                 <ServiceCard
//                   icon={<Calendar className="h-6 w-6" />}
//                   title="Book an appointment"
//                   description="Talk to a specialist today"
//                   href="/appointments/new"
//                 />
//                 <ServiceCard
//                   icon={<FileText className="h-6 w-6" />}
//                   title="Book a test"
//                   description="Book lab tests & view results here"
//                   href="/tests/new"
//                 />
//                 <ServiceCard
//                   icon={<ShoppingBag className="h-6 w-6" />}
//                   title="Order your medicine"
//                   description="We deliver to your doorstep"
//                   href="/medicine/order"
//                 />
//               </div>
//             </div>

//             <Separator />
//             <div className="px-4">
//               <TopServicesSection />
//             </div>

//             <Separator />

//             <div className="px-4">
//               <PharmacySection />
//             </div>

//             <Separator />

//             <div className="px-4">
//               <OnDemandCareSection />
//             </div>

//             <Separator />

//             <div className="px-4">
//               <FeaturedPlansSection />
//             </div>
//           </div>
//         </div>

//         <BottomNav />
//       </div>
//     </MobileLayout>
//   )
// }

