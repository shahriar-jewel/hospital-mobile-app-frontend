// "use client"

// import { useRouter } from "next/navigation"
// import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { MobileLayout } from "@/components/layouts/mobile-layouts"
// import { useCart } from "@/contexts/cart-context"
// import { EmptyCart } from "@/components/cart/empty-cart"

// export default function CartPage() {
//   const router = useRouter()
//   const { state, updateQuantity, removeItem, getSubtotal, getVAT, getTotal } = useCart()

//   const isCartEmpty = state.items.length === 0

//   return (
//     <MobileLayout>
//       <div className="flex flex-col min-h-full bg-white">
//         {/* Header */}
//         <div className="bg-purple-700 text-white">
//           <div className="flex items-center px-4 h-14">
//             <button onClick={() => router.back()} className="p-2 -ml-2">
//               <ArrowLeft className="h-5 w-5" />
//             </button>
//             <h1 className="text-[17px] font-medium ml-2">Cart</h1>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="flex-1 overflow-y-auto">
//           {isCartEmpty ? (
//             <EmptyCart />
//           ) : (
//             <div className="p-4 space-y-6 pb-32">
//               {/* Medicines Section */}
//               <div>
//                 <h2 className="text-[15px] font-medium mb-4">Medicines</h2>
//                 <div className="space-y-4 divide-y divide-gray-100">
//                   {state.items.map((item) => (
//                     <div key={item.id} className="pt-4 first:pt-0">
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <h3 className="text-[15px] text-gray-900">{item.name}</h3>
//                           <p className="text-[13px] text-gray-600">BDT {item.price}</p>
//                         </div>
//                         <div className="flex items-center gap-3">
//                           <div className="flex items-center gap-3">
//                             <button
//                               onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
//                               className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200"
//                             >
//                               <Minus className="w-4 h-4 text-gray-600" />
//                             </button>
//                             <span className="text-[15px] font-medium w-4 text-center">{item.quantity}</span>
//                             <button
//                               onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                               className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200"
//                             >
//                               <Plus className="w-4 h-4 text-gray-600" />
//                             </button>
//                           </div>
//                           <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-600">
//                             <Trash2 className="w-5 h-5" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Summary and Checkout */}
//         {!isCartEmpty && (
//           <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 space-y-4 max-w-[430px] mx-auto">
//             <div className="space-y-2">
//               <div className="flex justify-between text-[15px]">
//                 <span className="text-gray-600">Subtotal Total</span>
//                 <span className="font-medium">BDT {getSubtotal().toLocaleString()}</span>
//               </div>
//               <div className="flex justify-between text-[15px]">
//                 <span className="text-gray-600">VAT</span>
//                 <span className="font-medium">BDT {getVAT().toLocaleString()}</span>
//               </div>
//               <div className="flex justify-between text-[15px] font-medium">
//                 <span>Total</span>
//                 <span>BDT {getTotal().toLocaleString()}</span>
//               </div>
//             </div>
//             <Button
//               onClick={() => router.push("/checkout")}
//               className="w-full bg-purple-700 hover:bg-purple-800 text-white"
//               size="lg"
//             >
//               Proceed to Checkout ({getTotal().toLocaleString()} BDT)
//             </Button>
//           </div>
//         )}
//       </div>
//     </MobileLayout>
//   )
// }




"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { useCart } from "@/contexts/cart-context"
import { EmptyCart } from "@/components/cart/empty-cart"

export default function CartPage() {
  const router = useRouter()
  const { state, updateQuantity, removeItem, getSubtotal, getVAT, getTotal } = useCart()

  const isCartEmpty = state.items.length === 0

  // Group items by category
  const groupedItems = state.items.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, typeof state.items>,
  )

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-full bg-white">
        {/* Header */}
        <div className="bg-purple-700 text-white">
          <div className="flex items-center px-4 h-14">
            <button onClick={() => router.back()} className="p-2 -ml-2">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-[17px] font-medium ml-2">Cart</h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {isCartEmpty ? (
            <EmptyCart />
          ) : (
            <div className="p-4 space-y-6 pb-60">
              {Object.entries(groupedItems).map(([category, items]) => (
                <div key={category}>
                  <h2 className="text-[15px] font-medium mb-4">{category}</h2>
                  <div className="space-y-4 divide-y divide-gray-100">
                    {items.map((item) => (
                      <div key={item.id} className="pt-4 first:pt-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-[15px] text-gray-900">{item.name}</h3>
                            <p className="text-[13px] text-gray-600">BDT {item.price}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200"
                              >
                                <Minus className="w-4 h-4 text-gray-600" />
                              </button>
                              <span className="text-[15px] font-medium w-4 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200"
                              >
                                <Plus className="w-4 h-4 text-gray-600" />
                              </button>
                            </div>
                            <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-600">
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary and Checkout */}
        {!isCartEmpty && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 space-y-4 max-w-[430px] mx-auto">
            <div className="space-y-2">
              <div className="flex justify-between text-[15px]">
                <span className="text-gray-600">Subtotal Total</span>
                <span className="font-medium">BDT {getSubtotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[15px]">
                <span className="text-gray-600">VAT</span>
                <span className="font-medium">BDT {getVAT().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[15px] font-medium">
                <span>Total</span>
                <span>BDT {getTotal().toLocaleString()}</span>
              </div>
            </div>
            <Button
              onClick={() => router.push("/checkout")}
              className="w-full bg-purple-700 hover:bg-purple-800 text-white"
              size="lg"
            >
              Proceed to Checkout ({getTotal().toLocaleString()} BDT)
            </Button>
          </div>
        )}
      </div>
    </MobileLayout>
  )
}

