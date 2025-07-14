"use client"

import { Package, Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmptyStateProps {
  type: "products" | "search" | "cart"
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
}

export default function EmptyStateGraphics({ type, title, description, actionLabel, onAction }: EmptyStateProps) {
  const getIcon = () => {
    switch (type) {
      case "products":
        return <Package className="h-16 w-16 text-gray-400" />
      case "search":
        return <Search className="h-16 w-16 text-gray-400" />
      case "cart":
        return <ShoppingCart className="h-16 w-16 text-gray-400" />
      default:
        return <Package className="h-16 w-16 text-gray-400" />
    }
  }

  const getEmoji = () => {
    switch (type) {
      case "products":
        return "📦"
      case "search":
        return "🔍"
      case "cart":
        return "🛒"
      default:
        return "📦"
    }
  }

  return (
    <div className="text-center py-16">
      <div className="mb-4">{getIcon()}</div>
      <div className="text-6xl mb-4">{getEmoji()}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} className="bg-orange-600 hover:bg-orange-700">
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
