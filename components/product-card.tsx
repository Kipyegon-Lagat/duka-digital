"use client"

import { useState } from "react"
import { Star, ShoppingCart, Package } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  rating: number
  reviews: number
  inStock: number
  description: string
}

interface ProductCardProps {
  product: Product
  onAddToCart: (productId: number) => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [imageError, setImageError] = useState(false)

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "food & beverages":
        return "☕"
      case "fashion & accessories":
        return "👗"
      case "art & crafts":
        return "🎨"
      case "home & living":
        return "🏠"
      case "beauty & personal care":
        return "✨"
      default:
        return "📦"
    }
  }

  const ProductImage = () => {
    if (imageError) {
      return (
        <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-t-lg">
          <div className="text-center">
            <div className="text-6xl mb-4">🇰🇪</div>
            <div className="text-sm font-medium text-gray-700">Image not available</div>
          </div>
        </div>
      )
    }

    return (
      <Image
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        width={400}
        height={300}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        onError={() => setImageError(true)}
        priority={product.id <= 2} // Priority loading for first 2 products
      />
    )
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-t-lg">
        <ProductImage />
        <Badge className="absolute top-2 right-2 bg-green-600 shadow-lg">
          <Package className="h-3 w-3 mr-1" />
          {product.inStock} in stock
        </Badge>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {getCategoryIcon(product.category)} {product.category}
          </Badge>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>

        <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-600 transition-colors">{product.name}</h4>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-600">KES {product.price.toLocaleString()}</span>
          <Button
            onClick={() => onAddToCart(product.id)}
            className="bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all duration-200"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
