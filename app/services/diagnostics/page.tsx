"use client"

import { useState } from "react"
import { ArrowLeft, Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { Input } from "@/components/ui/input"
import { DiagnosticServiceItem } from "@/components/cards/diagnostic-service-item"
import { cn } from "@/lib/utils"
import { useCart } from "@/contexts/cart-context"
import { toast } from "@/components/ui/use-toast"
import { BottomNav } from "@/components/navigation/bottom-nav"

type ServiceCategory = "All" | "Lab" | "Imaging" | "Plan"

interface DiagnosticService {
    id: string
    title: string
    description: string
    category: "Lab" | "Imaging"
    price: number
}

const services: DiagnosticService[] = [
    {
        id: "1",
        title: "1Q (ATM) BY FISH - NCGM",
        description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
        category: "Lab",
        price: 1000,
    },
    {
        id: "2",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur.",
        description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
        category: "Lab",
        price: 1000,
    },
    {
        id: "3",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur.",
        description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
        category: "Imaging",
        price: 1000,
    },
    {
        id: "4",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur.",
        description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
        category: "Imaging",
        price: 1000,
    },
]

const categories: ServiceCategory[] = ["All", "Lab", "Imaging", "Plan"]

export default function DiagnosticsPage() {
    const router = useRouter()
    const [activeCategory, setActiveCategory] = useState<ServiceCategory>("All")
    const [searchQuery, setSearchQuery] = useState("")
    const { addItem, removeItem, state } = useCart()

    const filteredServices = services.filter((service) => {
        const matchesCategory = activeCategory === "All" || service.category === activeCategory
        const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const handleServiceSelect = (service: DiagnosticService) => {
        const isSelected = state.items.some((item) => item.id === service.id)

        if (isSelected) {
            removeItem(service.id)
            toast({
                title: "Service removed",
                description: "Service has been removed from your cart.",
            })
        } else {
            addItem({
                id: service.id,
                name: service.title,
                price: service.price,
                quantity: 1,
                category: "Diagnostics",
            })
            toast({
                title: "Service added",
                description: "Service has been added to your cart.",
            })
        }
    }

    return (
        <MobileLayout>
            <div className="flex flex-col min-h-full bg-gray-50">
                <div className="bg-purple-700 text-white">
                    <div className="flex items-center px-4 h-14">
                        <button onClick={() => router.back()} className="p-2 -ml-2">
                            <ArrowLeft className="h-6 w-6" />
                        </button>
                        <h1 className="text-lg font-medium ml-2">Diagnostics</h1>
                    </div>
                </div>

                <div className="p-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                            type="search"
                            placeholder="Search for lab services"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 py-5 bg-white"
                        />
                    </div>
                </div>

                <div className="px-4 flex space-x-2 border-b border-gray-100">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-4 py-2 text-[13px] font-medium rounded-full",
                                activeCategory === category
                                    ? "bg-purple-700 text-white"
                                    : "bg-transparent text-gray-600 hover:bg-gray-100",
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="flex-1 overflow-y-auto scrollbar-hide pb-20">
                    <div className="p-4">
                        {filteredServices.map((service) => (
                            <DiagnosticServiceItem
                                key={service.id}
                                title={service.title}
                                description={service.description}
                                category={service.category}
                                price={service.price}
                                isSelected={state.items.some((item) => item.id === service.id)}
                                onSelect={() => handleServiceSelect(service)}
                            />
                        ))}
                    </div>
                </div>
                {/* Bottom Navigation */}
                <BottomNav />
            </div>
        </MobileLayout>
    )
}
