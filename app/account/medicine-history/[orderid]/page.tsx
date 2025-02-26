// "use client"

// import { useState, useEffect } from "react"
// import { ArrowLeft, Plus } from "lucide-react"
// import { useRouter, useParams } from "next/navigation"
// import { MobileLayout } from "@/components/layouts/mobile-layouts"
// import { MedicineOrderItem } from "@/components/cards/medicine-order-item"
// import { Button } from "@/components/ui/button"
// import { Loader } from "@/components/ui/loader"
// import { toast } from "@/components/ui/use-toast"

// interface Medicine {
//   id: string
//   name: string
//   price: number
//   quantity: number
// }

// // This would typically come from an API
// const fetchOrderDetails = async (orderId: string): Promise<Medicine[]> => {
//   // Simulate API delay
//   await new Promise((resolve) => setTimeout(resolve, 1000))

//   return [
//     {
//       id: "1",
//       name: "Napa Extend",
//       price: 100,
//       quantity: 1,
//     },
//     {
//       id: "2",
//       name: "Alatrol",
//       price: 500,
//       quantity: 2,
//     },
//     {
//       id: "3",
//       name: "Maxpro",
//       price: 800,
//       quantity: 3,
//     },
//   ]
// }

// export default function ReOrderPage() {
//   const router = useRouter()
//   const params = useParams()
//   const orderId = params.orderId as string
//   const [medicines, setMedicines] = useState<Medicine[]>([])
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     const loadOrderDetails = async () => {
//       try {
//         const data = await fetchOrderDetails(orderId)
//         setMedicines(data)
//       } catch (error) {
//         console.error("Error loading order details:", error)
//         toast({
//           title: "Error",
//           description: "Failed to load order details. Please try again.",
//           variant: "destructive",
//         })
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     loadOrderDetails()
//   }, [orderId])

//   const handleIncrease = (medicineId: string) => {
//     setMedicines((prev) =>
//       prev.map((medicine) =>
//         medicine.id === medicineId ? { ...medicine, quantity: medicine.quantity + 1 } : medicine,
//       ),
//     )
//   }

//   const handleDecrease = (medicineId: string) => {
//     setMedicines((prev) =>
//       prev.map((medicine) =>
//         medicine.id === medicineId && medicine.quantity > 1
//           ? { ...medicine, quantity: medicine.quantity - 1 }
//           : medicine,
//       ),
//     )
//   }

//   const handleDelete = (medicineId: string) => {
//     setMedicines((prev) => prev.filter((medicine) => medicine.id !== medicineId))
//     toast({
//       title: "Medicine removed",
//       description: "The medicine has been removed from your order.",
//     })
//   }

//   const handleAddNewMedicine = () => {
//     router.push("/pharmacy")
//   }

//   const handlePlaceOrder = () => {
//     if (medicines.length === 0) {
//       toast({
//         title: "No medicines",
//         description: "Please add at least one medicine to place an order.",
//         variant: "destructive",
//       })
//       return
//     }

//     // In a real app, this would submit the order to an API
//     toast({
//       title: "Order placed",
//       description: "Your order has been placed successfully.",
//     })
//     router.push("/account/medicine-history")
//   }

//   return (
//     <MobileLayout>
//       <div className="flex flex-col min-h-full bg-gray-50">
//         <div className="bg-purple-700 text-white">
//           <div className="flex items-center px-4 h-14">
//             <button onClick={() => router.back()} className="p-2 -ml-2">
//               <ArrowLeft className="h-6 w-6" />
//             </button>
//             <h1 className="text-lg font-medium ml-2">Order {orderId}</h1>
//           </div>
//         </div>

//         <div className="flex-1">
//           {isLoading ? (
//             <div className="flex justify-center items-center h-full">
//               <Loader />
//             </div>
//           ) : (
//             <>
//               <div className="bg-white px-4">
//                 {medicines.map((medicine) => (
//                   <MedicineOrderItem
//                     key={medicine.id}
//                     name={medicine.name}
//                     price={medicine.price}
//                     quantity={medicine.quantity}
//                     onIncrease={() => handleIncrease(medicine.id)}
//                     onDecrease={() => handleDecrease(medicine.id)}
//                     onDelete={() => handleDelete(medicine.id)}
//                   />
//                 ))}
//               </div>

//               <div className="p-4">
//                 <p className="text-sm text-gray-500 mb-3">You can also add new medicine</p>
//                 <button
//                   onClick={handleAddNewMedicine}
//                   className="flex items-center text-[15px] font-medium text-purple-700 mb-6"
//                 >
//                   <Plus className="w-5 h-5 mr-1" />
//                   Add New Medicine
//                 </button>

//                 <Button onClick={handlePlaceOrder} className="w-full bg-purple-700 hover:bg-purple-800">
//                   Place Order
//                 </Button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </MobileLayout>
//   )
// }



"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Plus } from "lucide-react"
import { useRouter, useParams } from "next/navigation"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { MedicineOrderItem } from "@/components/cards/medicine-order-item"
import { Button } from "@/components/ui/button"
import { Loader } from "@/components/ui/loader"
import { toast } from "@/components/ui/use-toast"
import { useCart } from "@/contexts/cart-context"

interface Medicine {
  id: string
  name: string
  price: number
  quantity: number
}

// This would typically come from an API
const fetchOrderDetails = async (orderId: string): Promise<Medicine[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    {
      id: "1",
      name: "Napa Extend",
      price: 100,
      quantity: 1,
    },
    {
      id: "2",
      name: "Alatrol",
      price: 500,
      quantity: 2,
    },
    {
      id: "3",
      name: "Maxpro",
      price: 800,
      quantity: 3,
    },
  ]
}

export default function ReOrderPage() {
  const router = useRouter()
  const params = useParams()
  const orderId = params.orderId as string
  const [medicines, setMedicines] = useState<Medicine[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { addItem } = useCart()

  useEffect(() => {
    const loadOrderDetails = async () => {
      try {
        const data = await fetchOrderDetails(orderId)
        setMedicines(data)
      } catch (error) {
        console.error("Error loading order details:", error)
        toast({
          title: "Error",
          description: "Failed to load order details. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadOrderDetails()
  }, [orderId])

  const handleIncrease = (medicineId: string) => {
    setMedicines((prev) =>
      prev.map((medicine) =>
        medicine.id === medicineId ? { ...medicine, quantity: medicine.quantity + 1 } : medicine,
      ),
    )
  }

  const handleDecrease = (medicineId: string) => {
    setMedicines((prev) =>
      prev.map((medicine) =>
        medicine.id === medicineId && medicine.quantity > 1
          ? { ...medicine, quantity: medicine.quantity - 1 }
          : medicine,
      ),
    )
  }

  const handleDelete = (medicineId: string) => {
    setMedicines((prev) => prev.filter((medicine) => medicine.id !== medicineId))
    toast({
      title: "Medicine removed",
      description: "The medicine has been removed from your order.",
    })
  }

  const handleAddNewMedicine = () => {
    router.push("/pharmacy")
  }

  const handleAddToCart = () => {
    if (medicines.length === 0) {
      toast({
        title: "No medicines",
        description: "Please add at least one medicine to add to cart.",
        variant: "destructive",
      })
      return
    }

    // Add all medicines to cart
    medicines.forEach((medicine) => {
      addItem({
        id: medicine.id,
        name: medicine.name,
        price: medicine.price,
        quantity: medicine.quantity,
        category: 'Medicine'
      })
    })

    toast({
      title: "Added to cart",
      description: "All medicines have been added to your cart.",
    })

    // Navigate to cart page
    router.push("/cart")
  }

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-full bg-gray-50">
        <div className="bg-purple-700 text-white">
          <div className="flex items-center px-4 h-14">
            <button onClick={() => router.back()} className="p-2 -ml-2">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-medium ml-2">Order {orderId}</h1>
          </div>
        </div>

        <div className="flex-1">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <Loader />
            </div>
          ) : (
            <>
              <div className="bg-white px-4">
                {medicines.map((medicine) => (
                  <MedicineOrderItem
                    key={medicine.id}
                    name={medicine.name}
                    price={medicine.price}
                    quantity={medicine.quantity}
                    onIncrease={() => handleIncrease(medicine.id)}
                    onDecrease={() => handleDecrease(medicine.id)}
                    onDelete={() => handleDelete(medicine.id)}
                  />
                ))}
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-500 mb-3">You can also add new medicine</p>
                <button
                  onClick={handleAddNewMedicine}
                  className="flex items-center text-[15px] font-medium text-purple-700 mb-6"
                >
                  <Plus className="w-5 h-5 mr-1" />
                  Add New Medicine
                </button>

                <Button onClick={handleAddToCart} className="w-full bg-purple-700 hover:bg-purple-800">
                  Items Add to Cart
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </MobileLayout>
  )
}

