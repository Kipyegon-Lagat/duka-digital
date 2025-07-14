import { type NextRequest, NextResponse } from "next/server"

// Mock orders database
const orders = [
  {
    id: "ORD-001",
    customer: {
      name: "John Kamau",
      email: "john.kamau@email.com",
      phone: "+254 700 123 456",
    },
    items: [
      { productId: 1, name: "Kenyan AA Coffee Beans", quantity: 2, price: 1200 },
      { productId: 3, name: "Kikoy Beach Towel", quantity: 1, price: 800 },
    ],
    total: 3200,
    status: "completed",
    paymentStatus: "paid",
    shippingAddress: {
      street: "123 Kenyatta Avenue",
      city: "Nairobi",
      county: "Nairobi",
      postalCode: "00100",
    },
    createdAt: "2024-01-10T10:30:00Z",
    updatedAt: "2024-01-10T14:45:00Z",
  },
  {
    id: "ORD-002",
    customer: {
      name: "Mary Wanjiku",
      email: "mary.wanjiku@email.com",
      phone: "+254 722 456 789",
    },
    items: [{ productId: 2, name: "Maasai Beaded Jewelry Set", quantity: 1, price: 2500 }],
    total: 2500,
    status: "processing",
    paymentStatus: "paid",
    shippingAddress: {
      street: "456 Moi Avenue",
      city: "Kisumu",
      county: "Kisumu",
      postalCode: "40100",
    },
    createdAt: "2024-01-10T09:15:00Z",
    updatedAt: "2024-01-10T09:15:00Z",
  },
]

export async function GET() {
  return NextResponse.json(orders)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const newOrder = {
      id: `ORD-${String(orders.length + 1).padStart(3, "0")}`,
      ...body,
      status: "pending",
      paymentStatus: "pending",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    orders.push(newOrder)

    return NextResponse.json(newOrder, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create order" }, { status: 400 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, ...updateData } = body

    const orderIndex = orders.findIndex((o) => o.id === id)
    if (orderIndex === -1) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    orders[orderIndex] = {
      ...orders[orderIndex],
      ...updateData,
      updatedAt: new Date().toISOString(),
    }

    return NextResponse.json(orders[orderIndex])
  } catch (error) {
    return NextResponse.json({ error: "Failed to update order" }, { status: 400 })
  }
}
