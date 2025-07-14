import { type NextRequest, NextResponse } from "next/server"

// Mock database - in a real app, this would be MongoDB
const products = [
  {
    id: 1,
    name: "Kenyan AA Coffee Beans",
    price: 1200,
    category: "Food & Beverages",
    description: "Premium Kenyan AA coffee beans from Nyeri highlands",
    stock: 45,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Maasai Beaded Jewelry Set",
    price: 2500,
    category: "Fashion & Accessories",
    description: "Authentic handcrafted Maasai beaded necklace and bracelet",
    stock: 23,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 89,
  },
]

export async function GET() {
  return NextResponse.json(products)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const newProduct = {
      id: products.length + 1,
      ...body,
      rating: 0,
      reviews: 0,
    }

    products.push(newProduct)

    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create product" }, { status: 400 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, ...updateData } = body

    const productIndex = products.findIndex((p) => p.id === id)
    if (productIndex === -1) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    products[productIndex] = { ...products[productIndex], ...updateData }

    return NextResponse.json(products[productIndex])
  } catch (error) {
    return NextResponse.json({ error: "Failed to update product" }, { status: 400 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = Number.parseInt(searchParams.get("id") || "0")

    const productIndex = products.findIndex((p) => p.id === id)
    if (productIndex === -1) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    products.splice(productIndex, 1)

    return NextResponse.json({ message: "Product deleted successfully" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete product" }, { status: 400 })
  }
}
