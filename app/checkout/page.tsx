"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Truck, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import PaymentMethodGraphics from "@/components/payment-method-graphics"

// Updated cart items to match the new products
const cartItems = [
  {
    id: 1,
    name: "Kenyan AA Coffee Beans",
    price: 1200,
    quantity: 2,
    image: "/images/coffee-beans.jpg",
  },
  {
    id: 2,
    name: "Safari Adventure Hat",
    price: 1800,
    quantity: 1,
    image: "/images/safari-hat.jpg",
  },
]

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 200
  const tax = Math.round(subtotal * 0.16) // 16% VAT in Kenya
  const total = subtotal + shipping + tax

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Mock payment processing
    setTimeout(() => {
      setIsProcessing(false)
      alert("Order placed successfully! You will receive a confirmation email shortly.")
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-lg font-semibold text-orange-600">Duka Digital</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-green-600 border-green-600">
                Secure Checkout
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
                <CardDescription>Where should we deliver your Kenyan treasures?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Kamau" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.kamau@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+254 700 123 456" />
                </div>
                <div>
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" placeholder="123 Kenyatta Avenue" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Nairobi" />
                  </div>
                  <div>
                    <Label htmlFor="county">County</Label>
                    <Input id="county" placeholder="Nairobi" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input id="postalCode" placeholder="00100" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Choose your preferred payment method</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <PaymentMethodGraphics
                    method="card"
                    isSelected={paymentMethod === "card"}
                    onClick={() => setPaymentMethod("card")}
                  />
                  <PaymentMethodGraphics
                    method="mpesa"
                    isSelected={paymentMethod === "mpesa"}
                    onClick={() => setPaymentMethod("mpesa")}
                  />
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "mpesa" && (
                  <div className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="mpesaNumber">M-Pesa Number</Label>
                      <Input id="mpesaNumber" placeholder="254700123456" />
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-800">
                        You will receive an M-Pesa prompt on your phone to complete the payment.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <form onSubmit={handleSubmit}>
              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-6"
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : `Place Order - KES ${total.toLocaleString()}`}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">KES {(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>KES {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>KES {shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>VAT (16%)</span>
                    <span>KES {tax.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>KES {total.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Free Shipping</p>
                      <p className="text-sm text-gray-600">On orders over KES 2,000</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Secure Payment</p>
                      <p className="text-sm text-gray-600">Your payment info is protected</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
