// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { ArrowLeft, ChevronDown, Plus, Trash2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
// import { Input } from "@/components/ui/input"
// import { MobileLayout } from "@/components/layouts/mobile-layouts"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Checkbox } from "@/components/ui/checkbox"
// import { useCart } from "@/contexts/cart-context"
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// export default function CheckoutPage() {
//   const router = useRouter()
//   const { getTotal } = useCart()
//   const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false)
//   const [selectedPayment, setSelectedPayment] = useState<"digital" | "cash">("digital")
//   const [promoCode, setPromoCode] = useState("")
//   const [notes, setNotes] = useState("")
//   const [acceptedTerms, setAcceptedTerms] = useState(false)

//   const handleProceedToPayment = () => {
//     if (!acceptedTerms) {
//       // Show error message
//       return
//     }
//     // Handle payment processing
//     console.log("Processing payment...")
//   }

//   return (
//     <MobileLayout>
//       <div className="flex flex-col min-h-full bg-gray-50">
//         {/* Header */}
//         <div className="bg-purple-700 text-white">
//           <div className="flex items-center px-4 h-14">
//             <button onClick={() => router.back()} className="p-2 -ml-2">
//               <ArrowLeft className="h-5 w-5" />
//             </button>
//             <h1 className="text-[17px] font-medium ml-2">Checkout</h1>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="flex-1 overflow-y-auto">
//           <div className="p-4 space-y-6 pb-24">
//             {/* Order Summary */}
//             <Collapsible open={isOrderSummaryOpen} onOpenChange={setIsOrderSummaryOpen}>
//               <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg">
//                 <div className="flex items-center space-x-2">
//                   <span className="text-[15px] font-medium">Show order summary</span>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isOrderSummaryOpen ? "rotate-180" : ""}`} />
//                 </div>
//                 <span className="text-[15px] font-medium">{getTotal().toLocaleString()} BDT</span>
//               </CollapsibleTrigger>
//               <CollapsibleContent className="mt-2 bg-white rounded-lg p-4">
//                 {/* Order summary content */}
//                 <div className="space-y-4">{/* Add order items here */}</div>
//               </CollapsibleContent>
//             </Collapsible>

//             {/* Current Address */}
//             <div className="space-y-4">
//               <h2 className="text-[15px] font-medium">Current Address</h2>
//               <div className="bg-white p-4 rounded-lg">
//                 <div className="flex items-start justify-between">
//                   <p className="text-[13px] text-gray-600">ADABOR, Division: N/A, District: Dhaka, Upazila: Dhaka.</p>
//                   <button className="text-red-500">
//                     <Trash2 className="h-4 w-4" />
//                   </button>
//                 </div>
//               </div>
//               <div className="bg-white p-4 rounded-lg">
//                 <div className="flex items-start justify-between">
//                   <p className="text-[13px] text-gray-600">
//                     Miabari Division: Dhaka, District: Tangail, Upazila: Delduar.
//                   </p>
//                   <button className="text-red-500">
//                     <Trash2 className="h-4 w-4" />
//                   </button>
//                 </div>
//               </div>
//               <Button variant="outline" className="w-full" onClick={() => router.push("/checkout/add-address")}>
//                 <Plus className="h-4 w-4 mr-2" />
//                 Add New address
//               </Button>
//             </div>

//             {/* Add Notes */}
//             <div className="space-y-4">
//               <h2 className="text-[15px] font-medium">Add Notes</h2>
//               <Textarea
//                 placeholder="Type here"
//                 value={notes}
//                 onChange={(e) => setNotes(e.target.value)}
//                 className="bg-white"
//               />
//             </div>

//             {/* Promo Code */}
//             <div className="flex space-x-2">
//               <Input
//                 placeholder="Promo Code"
//                 value={promoCode}
//                 onChange={(e) => setPromoCode(e.target.value)}
//                 className="bg-white"
//               />
//               <Button className="bg-purple-700 hover:bg-purple-800 text-white px-6">Apply</Button>
//             </div>

//             {/* Payment */}
//             <div className="space-y-4">
//               <h2 className="text-[15px] font-medium">Payment</h2>
//               <p className="text-[13px] text-gray-600">All transactions are secure and encrypted.</p>
//               <RadioGroup
//                 value={selectedPayment}
//                 onValueChange={(value: "digital" | "cash") => setSelectedPayment(value)}
//               >
//                 <div className="space-y-3">
//                   <div className="flex items-center space-x-2 bg-white p-4 rounded-lg">
//                     <RadioGroupItem value="digital" id="digital" />
//                     <div className="flex-1">
//                       <label htmlFor="digital" className="text-[15px] font-medium block">
//                         Digital Payment
//                       </label>
//                       <div className="flex items-center space-x-2 mt-2">
//                         <div className="h-5 w-8 bg-blue-600 rounded flex items-center justify-center">
//                           <span className="text-white text-xs font-bold">VISA</span>
//                         </div>
//                         <div className="h-5 w-8 bg-[#eb001b] rounded flex items-center justify-center">
//                           <span className="text-white text-xs font-bold">MC</span>
//                         </div>
//                         <div className="h-5 w-8 bg-[#2e77bc] rounded flex items-center justify-center">
//                           <span className="text-white text-xs font-bold">AMEX</span>
//                         </div>
//                         <span className="text-[13px] text-gray-600">and more...</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-2 bg-white p-4 rounded-lg">
//                     <RadioGroupItem value="cash" id="cash" />
//                     <div className="flex items-center space-x-2">
//                       <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                         <span className="text-green-600 text-xs">৳</span>
//                       </div>
//                       <label htmlFor="cash" className="text-[15px] font-medium">
//                         Cash on delivery
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </RadioGroup>
//             </div>

//             {/* Terms and Conditions */}
//             <div className="flex items-start space-x-2">
//               <Checkbox
//                 id="terms"
//                 checked={acceptedTerms}
//                 onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
//               />
//               <label htmlFor="terms" className="text-[13px] text-gray-600">
//                 Upon clicking "make payment", I confirm I have read and acknowledge all{" "}
//                 <button className="text-purple-700 underline">terms and conditions</button>.
//               </label>
//             </div>
//           </div>
//         </div>

//         {/* Proceed to Payment Button */}
//         <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t max-w-[430px] mx-auto">
//           <Button
//             onClick={handleProceedToPayment}
//             disabled={!acceptedTerms}
//             className="w-full bg-purple-700 hover:bg-purple-800 text-white"
//             size="lg"
//           >
//             Proceed to Payment ({getTotal().toLocaleString()} BDT)
//           </Button>
//         </div>
//       </div>
//     </MobileLayout>
//   )
// }



"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, ChevronDown, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { MobileLayout } from "@/components/layouts/mobile-layouts"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useCart } from "@/contexts/cart-context"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function CheckoutPage() {
  const router = useRouter()
  const { state, getSubtotal, getVAT, getTotal } = useCart()
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState<"digital" | "cash">("digital")
  const [promoCode, setPromoCode] = useState("")
  const [notes, setNotes] = useState("")
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleProceedToPayment = () => {
    if (!acceptedTerms) {
      // Show error message
      return
    }
    // Handle payment processing
    console.log("Processing payment...")
  }

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-full bg-gray-50">
        {/* Header */}
        <div className="bg-purple-700 text-white">
          <div className="flex items-center px-4 h-14">
            <button onClick={() => router.back()} className="p-2 -ml-2">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-[17px] font-medium ml-2">Checkout</h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-6 pb-24">
            {/* Order Summary */}
            <Collapsible open={isOrderSummaryOpen} onOpenChange={setIsOrderSummaryOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-[15px] font-medium">Show order summary</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isOrderSummaryOpen ? "rotate-180" : ""}`} />
                </div>
                <span className="text-[15px] font-medium">{getTotal().toLocaleString()} BDT</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 bg-white rounded-lg p-4">
                <div className="space-y-4">
                  {/* Order Items */}
                  <div className="space-y-3">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center text-[13px]">
                        <div className="flex-1">
                          <span className="text-gray-900">{item.name}</span>
                          <span className="text-gray-500 ml-1">x{item.quantity}</span>
                        </div>
                        <span className="text-gray-900">BDT {(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100 my-3" />

                  {/* Summary Calculations */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-[13px]">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="text-gray-900">BDT {getSubtotal().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-[13px]">
                      <span className="text-gray-500">VAT (7%)</span>
                      <span className="text-gray-900">BDT {getVAT().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-[15px] font-medium">
                      <span>Total</span>
                      <span>BDT {getTotal().toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Current Address */}
            <div className="space-y-4">
              <h2 className="text-[15px] font-medium">Current Address</h2>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-start justify-between">
                  <p className="text-[13px] text-gray-600">ADABOR, Division: N/A, District: Dhaka, Upazila: Dhaka.</p>
                  <button className="text-red-500">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-start justify-between">
                  <p className="text-[13px] text-gray-600">
                    Miabari Division: Dhaka, District: Tangail, Upazila: Delduar.
                  </p>
                  <button className="text-red-500">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <Button variant="outline" className="w-full" onClick={() => router.push("/checkout/add-address")}>
                <Plus className="h-4 w-4 mr-2" />
                Add New address
              </Button>
            </div>

            {/* Add Notes */}
            <div className="space-y-4">
              <h2 className="text-[15px] font-medium">Add Notes</h2>
              <Textarea
                placeholder="Type here"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="bg-white"
              />
            </div>

            {/* Promo Code */}
            <div className="flex space-x-2">
              <Input
                placeholder="Promo Code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="bg-white"
              />
              <Button className="bg-purple-700 hover:bg-purple-800 text-white px-6">Apply</Button>
            </div>

            {/* Payment */}
            <div className="space-y-4">
              <h2 className="text-[15px] font-medium">Payment</h2>
              <p className="text-[13px] text-gray-600">All transactions are secure and encrypted.</p>
              <RadioGroup
                value={selectedPayment}
                onValueChange={(value: "digital" | "cash") => setSelectedPayment(value)}
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 bg-white p-4 rounded-lg">
                    <RadioGroupItem value="digital" id="digital" />
                    <div className="flex-1">
                      <label htmlFor="digital" className="text-[15px] font-medium block">
                        Digital Payment
                      </label>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="h-5 w-8 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">VISA</span>
                        </div>
                        <div className="h-5 w-8 bg-[#eb001b] rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">MC</span>
                        </div>
                        <div className="h-5 w-8 bg-[#2e77bc] rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">AMEX</span>
                        </div>
                        <span className="text-[13px] text-gray-600">and more...</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-white p-4 rounded-lg">
                    <RadioGroupItem value="cash" id="cash" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-xs">৳</span>
                      </div>
                      <label htmlFor="cash" className="text-[15px] font-medium">
                        Cash on delivery
                      </label>
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={acceptedTerms}
                onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
              />
              <label htmlFor="terms" className="text-[13px] text-gray-600">
                Upon clicking "make payment", I confirm I have read and acknowledge all{" "}
                <button className="text-purple-700 underline">terms and conditions</button>.
              </label>
            </div>
          </div>
        </div>

        {/* Proceed to Payment Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t max-w-[430px] mx-auto">
          <Button
            onClick={handleProceedToPayment}
            disabled={!acceptedTerms}
            className="w-full bg-purple-700 hover:bg-purple-800 text-white"
            size="lg"
          >
            Proceed to Payment ({getTotal().toLocaleString()} BDT)
          </Button>
        </div>
      </div>
    </MobileLayout>
  )
}

