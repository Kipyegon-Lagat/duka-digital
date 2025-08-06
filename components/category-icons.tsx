"use client"

import { Coffee, Shirt, Palette, Home, Sparkles, BookOpen } from "lucide-react"

interface CategoryIconProps {
  category: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function CategoryIcon({ category, size = "md", className = "" }: CategoryIconProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  }

  const iconClass = `${sizeClasses[size]} ${className}`

  switch (category.toLowerCase()) {
    case "food & beverages":
      return <Coffee className={iconClass} />
    case "fashion & accessories":
      return <Shirt className={iconClass} />
    case "art & crafts":
      return <Palette className={iconClass} />
    case "home & living":
      return <Home className={iconClass} />
    case "beauty & personal care":
      return <Sparkles className={iconClass} />
    case "books & media":
      return <BookOpen className={iconClass} />
    default:
      return <div className={`${iconClass} bg-gray-300 rounded`}></div>
  }
}
