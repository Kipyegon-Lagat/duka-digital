import { NextResponse } from "next/server"

// Mock analytics data
const analyticsData = {
  overview: {
    totalRevenue: 2400000,
    totalOrders: 1234,
    totalProducts: 247,
    totalCustomers: 3456,
    revenueGrowth: 12,
    ordersGrowth: 8,
    productsGrowth: 5,
    customersGrowth: 15,
  },
  salesByMonth: [
    { month: "Jan", sales: 450000, orders: 120 },
    { month: "Feb", sales: 520000, orders: 145 },
    { month: "Mar", sales: 480000, orders: 132 },
    { month: "Apr", sales: 610000, orders: 168 },
    { month: "May", sales: 550000, orders: 155 },
    { month: "Jun", sales: 670000, orders: 189 },
  ],
  salesByCategory: [
    { name: "Food & Beverages", value: 35, sales: 840000 },
    { name: "Fashion & Accessories", value: 28, sales: 672000 },
    { name: "Art & Crafts", value: 22, sales: 528000 },
    { name: "Home & Living", value: 15, sales: 360000 },
  ],
  topProducts: [
    {
      id: 1,
      name: "Kenyan AA Coffee Beans",
      sales: 234,
      revenue: 280800,
      stock: 45,
      category: "Food & Beverages",
    },
    {
      id: 2,
      name: "Maasai Beaded Jewelry Set",
      sales: 156,
      revenue: 390000,
      stock: 23,
      category: "Fashion & Accessories",
    },
    {
      id: 3,
      name: "Kikoy Beach Towel",
      sales: 189,
      revenue: 151200,
      stock: 67,
      category: "Home & Living",
    },
    {
      id: 4,
      name: "Safari Hat - Leather",
      sales: 98,
      revenue: 176400,
      stock: 34,
      category: "Fashion & Accessories",
    },
    {
      id: 5,
      name: "Wooden Giraffe Sculpture",
      sales: 67,
      revenue: 214400,
      stock: 12,
      category: "Art & Crafts",
    },
  ],
  customerMetrics: {
    totalCustomers: 3456,
    newCustomersThisMonth: 234,
    averageOrderValue: 1850,
    customerRetentionRate: 68,
    topCustomers: [
      { name: "John Kamau", orders: 12, totalSpent: 24500 },
      { name: "Mary Wanjiku", orders: 8, totalSpent: 15200 },
      { name: "Peter Ochieng", orders: 15, totalSpent: 32800 },
      { name: "Grace Akinyi", orders: 6, totalSpent: 11400 },
      { name: "David Kiprop", orders: 9, totalSpent: 18900 },
    ],
  },
  inventoryAlerts: [
    { productId: 5, name: "Wooden Giraffe Sculpture", stock: 12, threshold: 15 },
    { productId: 2, name: "Maasai Beaded Jewelry Set", stock: 23, threshold: 25 },
    { productId: 8, name: "Kenyan Honey", stock: 8, threshold: 20 },
  ],
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type")

  switch (type) {
    case "overview":
      return NextResponse.json(analyticsData.overview)
    case "sales":
      return NextResponse.json({
        byMonth: analyticsData.salesByMonth,
        byCategory: analyticsData.salesByCategory,
      })
    case "products":
      return NextResponse.json(analyticsData.topProducts)
    case "customers":
      return NextResponse.json(analyticsData.customerMetrics)
    case "inventory":
      return NextResponse.json(analyticsData.inventoryAlerts)
    default:
      return NextResponse.json(analyticsData)
  }
}
