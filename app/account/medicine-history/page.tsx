// "use client"

// import { useState, useEffect } from "react"
// import { ArrowLeft } from "lucide-react"
// import { useRouter } from "next/navigation"
// import { MobileLayout } from "@/components/layouts/mobile-layouts"
// import { OrderHistoryItem } from "@/components/cards/order-history-item"
// import { BottomNav } from "@/components/navigation/bottom-nav"
// import { toast } from "@/components/ui/use-toast"
// import { Loader } from "@/components/ui/loader"

// // This would typically come from an API
// const fetchOrders = async () => {
//   // Simulate API delay
//   await new Promise((resolve) => setTimeout(resolve, 1000))

//   return [
//     {
//       id: "1",
//       orderNumber: "Order 01",
//       date: "18 Feb, 2023",
//     },
//     {
//       id: "2",
//       orderNumber: "Order 02",
//       date: "18 Feb, 2023",
//     },
//   ]
// }

// export default function MedicineHistoryPage() {
//   const router = useRouter()
//   const [orders, setOrders] = useState<Array<{ id: string; orderNumber: string; date: string }>>([])
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     const loadOrders = async () => {
//       try {
//         const data = await fetchOrders()
//         setOrders(data)
//       } catch (error) {
//         console.error("Error loading orders:", error)
//         toast({
//           title: "Error",
//           description: "Failed to load medicine history. Please try again.",
//           variant: "destructive",
//         })
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     loadOrders()
//   }, [])

//   const handleDelete = (orderId: string) => {
//     setOrders(orders.filter((order) => order.id !== orderId))
//     toast({
//       title: "Order deleted",
//       description: "The order has been removed from your history.",
//     })
//   }

//   const handleReOrder = (orderId: string) => {
//     // In a real app, this would initiate the re-order process
//     toast({
//       title: "Re-ordering",
//       description: "Processing your re-order request...",
//     })
//     router.push("/pharmacy")
//   }

//   return (
//     <MobileLayout>
//       <div className="flex flex-col min-h-full bg-gray-50">
//         <div className="bg-purple-700 text-white">
//           <div className="flex items-center px-4 h-14">
//             <button onClick={() => router.back()} className="p-2 -ml-2">
//               <ArrowLeft className="h-6 w-6" />
//             </button>
//             <h1 className="text-lg font-medium ml-2">Medicine History</h1>
//           </div>
//         </div>

//         <div className="flex-1 p-4 pb-24">
//           {isLoading ? (
//             <div className="flex justify-center items-center h-full">
//               <Loader />
//             </div>
//           ) : orders.length === 0 ? (
//             <div className="text-center py-8">
//               <p className="text-gray-500">No orders in your history</p>
//             </div>
//           ) : (
//             orders.map((order) => (
//               <OrderHistoryItem
//                 key={order.id}
//                 orderNumber={order.orderNumber}
//                 date={order.date}
//                 onDelete={() => handleDelete(order.id)}
//                 onReOrder={() => handleReOrder(order.id)}
//               />
//             ))
//           )}
//         </div>

//         <BottomNav />
//       </div>
//     </MobileLayout>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { OrderHistoryItem } from "@/components/cards/order-history-item"
import { BottomNav } from "@/components/navigation/bottom-nav"
import { toast } from "@/components/ui/use-toast"
import { Loader } from "@/components/ui/loader"

// This would typically come from an API
const fetchOrders = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    {
      id: "1",
      orderNumber: "Order 01",
      date: "18 Feb, 2023",
    },
    {
      id: "2",
      orderNumber: "Order 02",
      date: "18 Feb, 2023",
    },
  ]
}

export default function MedicineHistoryPage() {
  const router = useRouter()
  const [orders, setOrders] = useState<Array<{ id: string; orderNumber: string; date: string }>>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await fetchOrders()
        setOrders(data)
      } catch (error) {
        console.error("Error loading orders:", error)
        toast({
          title: "Error",
          description: "Failed to load medicine history. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadOrders()
  }, [])

  const handleDelete = (orderId: string) => {
    setOrders(orders.filter((order) => order.id !== orderId))
    toast({
      title: "Order deleted",
      description: "The order has been removed from your history.",
    })
  }

  const handleReOrder = (orderId: string) => {
    // In a real app, this would initiate the re-order process
    toast({
      title: "Re-ordering",
      description: "Processing your re-order request...",
    })
    router.push(`/account/medicine-history/${orderId}`)
  }

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-full bg-gray-50">
        <div className="bg-purple-700 text-white">
          <div className="flex items-center px-4 h-14">
            <button onClick={() => router.back()} className="p-2 -ml-2">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-medium ml-2">Medicine History</h1>
          </div>
        </div>

        <div className="flex-1 p-4 pb-24">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <Loader />
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No orders in your history</p>
            </div>
          ) : (
            orders.map((order) => (
              <OrderHistoryItem
                key={order.id}
                orderNumber={order.orderNumber}
                date={order.date}
                onDelete={() => handleDelete(order.id)}
                onReOrder={() => handleReOrder(order.id)}
              />
            ))
          )}
        </div>

        <BottomNav />
      </div>
    </MobileLayout>
  )
}

