"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, Search, TrendingUp, Package, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProductCard from "@/components/product-card"
import HeroGraphics from "@/components/hero-graphics"
import EmptyStateGraphics from "@/components/empty-state-graphics"

// Updated products to match the provided images
const products = [
  {
    id: 1,
    name: "Kenyan AA Coffee Beans",
    price: 1200,
    image: "/images/coffee-beans.jpg",
    category: "Food & Beverages",
    rating: 4.8,
    reviews: 124,
    inStock: 45,
    description:
      "Premium Kenyan AA coffee beans from Nyeri highlands with rich, full-bodied flavor and wine-like acidity",
  },
  {
    id: 2,
    name: "Handcraft Jewelry Making Kit",
    price: 2500,
    image: "/images/craft-supplies.jpg",
    category: "Art & Crafts",
    rating: 4.9,
    reviews: 89,
    inStock: 23,
    description:
      "Complete jewelry making kit with beads, gemstones, lace, and decorative elements for creating beautiful accessories",
  },
  {
    id: 3,
    name: "Adventure Hat",
    price: 1800,
    image: "/images/safari-hat.jpg",
    category: "Fashion & Accessories",
    rating: 4.7,
    reviews: 92,
    inStock: 34,
    description:
      "Authentic leather safari hat with decorative braided band, perfect for outdoor adventures and sun protection",
  },
  {
    id: 4,
    name: "Beach Lifestyle Set",
    price: 3200,
    image: "/images/beach-towel.jpg",
    category: "Home & Living",
    rating: 4.6,
    reviews: 156,
    inStock: 18,
    description:
      "Complete beach lifestyle set including striped towel, vintage camera, sunglasses, and woven basket for the perfect beach day",
  },
]

const stats = [
  { label: "Total Sales", value: "KES 2.4M", icon: TrendingUp, change: "+12%" },
  { label: "Products", value: "4", icon: Package, change: "+8%" },
  { label: "Customers", value: "3,456", icon: Users, change: "+15%" },
]

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [cartItems, setCartItems] = useState(0)
  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredProducts(filtered)
  }, [searchTerm])

  const addToCart = (productId: number) => {
    setCartItems((prev) => prev + 1)
    // In a real app, this would update the cart state/database
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-orange-600">duka Digital</h1>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                🇰🇪 Made in Kenya
              </Badge>
            </div>

            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search for Kenyan products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/admin">
                <Button variant="outline">Admin dashboard</Button>
              </Link>
              <Button className="relative bg-orange-600 hover:bg-orange-700">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">{cartItems}</Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 relative">
        <HeroGraphics />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Discover Authentic  African Products</h2>
          <p className="text-xl mb-8 opacity-90">
            From premium coffee to handcrafted accessories - supporting local artisans and businesses
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  <div className="text-sm text-green-600 font-medium">{stat.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Kenyan Products</h3>
            <p className="text-lg text-gray-600">
              Carefully curated items from local artisans and businesses across Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full">
                <EmptyStateGraphics
                  type="search"
                  title="No products found"
                  description={`Sorry, we couldn't find any products matching "${searchTerm}". Try adjusting your search or browse our categories.`}
                  actionLabel="Clear Search"
                  onAction={() => setSearchTerm("")}
                />
              </div>
            ) : (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-bold text-lg mb-4">Duka Digital</h5>
              <p className="text-gray-400">Supporting Kenyan artisans and businesses through digital commerce.</p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Quick Links</h6>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/products" className="hover:text-white">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:text-white">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Support</h6>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-white">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-white">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Contact</h6>
              <ul className="space-y-2 text-gray-400">
                <li>📧 hello@dukadigital.co.ke</li>
                <li>📱 +254 700 123 456</li>
                <li>📍 Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Duka Digital. Made with ❤️ in Kenya.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
