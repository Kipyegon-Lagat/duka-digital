"use client"

import { CreditCard, Smartphone } from "lucide-react"

interface PaymentMethodGraphicsProps {
  method: "card" | "mpesa"
  isSelected: boolean
  onClick: () => void
}

export default function PaymentMethodGraphics({ method, isSelected, onClick }: PaymentMethodGraphicsProps) {
  if (method === "card") {
    return (
      <div
        className={`border rounded-lg p-4 cursor-pointer transition-colors ${
          isSelected ? "border-orange-500 bg-orange-50" : "border-gray-200"
        }`}
        onClick={onClick}
      >
        <div className="flex items-center space-x-3">
          <div className="relative">
            <CreditCard className="h-6 w-6 text-blue-600" />
            {/* Credit card graphic */}
            <div className="absolute -top-1 -right-1 w-3 h-2 bg-yellow-400 rounded-sm"></div>
          </div>
          <div>
            <p className="font-medium">Credit/Debit Card</p>
            <p className="text-sm text-gray-600">Visa, Mastercard accepted</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
        isSelected ? "border-orange-500 bg-orange-50" : "border-gray-200"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Smartphone className="h-6 w-6 text-green-600" />
          {/* M-Pesa logo representation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        <div>
          <p className="font-medium">M-Pesa</p>
          <p className="text-sm text-gray-600">Pay with your mobile money</p>
        </div>
        {/* Kenyan flag colors accent */}
        <div className="ml-auto flex space-x-1">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
