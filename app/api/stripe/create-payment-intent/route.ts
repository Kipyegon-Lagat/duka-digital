import { type NextRequest, NextResponse } from "next/server"

// Mock Stripe integration - in a real app, you'd use the actual Stripe SDK
export async function POST(request: NextRequest) {
  try {
    const { amount, currency = "kes", metadata = {} } = await request.json()

    // Mock payment intent creation
    const paymentIntent = {
      id: `pi_${Math.random().toString(36).substr(2, 9)}`,
      amount: amount,
      currency: currency.toLowerCase(),
      status: "requires_payment_method",
      client_secret: `pi_${Math.random().toString(36).substr(2, 9)}_secret_${Math.random().toString(36).substr(2, 9)}`,
      metadata: metadata,
      created: Math.floor(Date.now() / 1000),
    }

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntent: paymentIntent,
    })
  } catch (error) {
    console.error("Error creating payment intent:", error)
    return NextResponse.json({ error: "Failed to create payment intent" }, { status: 500 })
  }
}
