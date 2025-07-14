"use client"

interface ProductVisualProps {
  productName: string
  category: string
  className?: string
}

export default function ProductVisual({ productName, category, className = "" }: ProductVisualProps) {
  const getProductVisual = () => {
    const name = productName.toLowerCase()

    if (name.includes("coffee")) {
      return (
        <div
          className={`w-full h-64 bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center relative overflow-hidden ${className}`}
        >
          {/* Coffee beans pattern */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-8 h-12 bg-gradient-to-br from-amber-800 to-amber-900 rounded-full transform rotate-12"
                style={{
                  left: `${20 + (i % 4) * 20}%`,
                  top: `${20 + Math.floor(i / 4) * 25}%`,
                  transform: `rotate(${i * 30}deg)`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-1 h-8 bg-amber-600 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            ))}
          </div>
          <div className="relative z-10 text-center">
            <div className="text-4xl mb-2">☕</div>
            <div className="text-sm font-medium text-amber-800">Premium Coffee Beans</div>
          </div>
        </div>
      )
    }

    if (name.includes("jewelry") || name.includes("beaded")) {
      return (
        <div
          className={`w-full h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative overflow-hidden ${className}`}
        >
          {/* Beaded pattern */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, row) => (
              <div key={row} className="flex justify-center" style={{ marginTop: `${row * 25}px` }}>
                {[...Array(6)].map((_, col) => (
                  <div
                    key={col}
                    className={`w-6 h-6 rounded-full mx-1 ${
                      (row + col) % 3 === 0 ? "bg-red-500" : (row + col) % 3 === 1 ? "bg-blue-500" : "bg-yellow-500"
                    }`}
                    style={{
                      opacity: 0.7,
                      transform: `scale(${0.8 + Math.sin(row + col) * 0.2})`,
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
          <div className="relative z-10 text-center">
            <div className="text-4xl mb-2">💎</div>
            <div className="text-sm font-medium text-purple-800">Handcrafted Jewelry</div>
          </div>
        </div>
      )
    }

    if (name.includes("towel") || name.includes("kikoy")) {
      return (
        <div
          className={`w-full h-64 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center relative overflow-hidden ${className}`}
        >
          {/* Kikoy stripes pattern */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-full h-4 ${
                  i % 4 === 0 ? "bg-blue-500" : i % 4 === 1 ? "bg-white" : i % 4 === 2 ? "bg-red-500" : "bg-green-500"
                }`}
                style={{ top: `${i * 8}%`, opacity: 0.8 }}
              ></div>
            ))}
          </div>
          <div className="relative z-10 text-center">
            <div className="text-4xl mb-2">🏖️</div>
            <div className="text-sm font-medium text-blue-800">Traditional Kikoy</div>
          </div>
        </div>
      )
    }

    if (name.includes("hat") || name.includes("safari")) {
      return (
        <div
          className={`w-full h-64 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center relative overflow-hidden ${className}`}
        >
          {/* Safari hat silhouette */}
          <div className="relative">
            {/* Hat brim */}
            <div className="w-32 h-4 bg-gradient-to-r from-amber-700 to-amber-800 rounded-full"></div>
            {/* Hat crown */}
            <div className="w-20 h-16 bg-gradient-to-b from-amber-600 to-amber-700 rounded-t-full mx-auto -mt-2"></div>
            {/* Hat band */}
            <div className="w-20 h-2 bg-amber-900 mx-auto -mt-8 relative z-10"></div>
          </div>
          <div className="absolute bottom-8 text-center">
            <div className="text-4xl mb-2">🎩</div>
            <div className="text-sm font-medium text-amber-800">Safari Adventure</div>
          </div>
        </div>
      )
    }

    if (name.includes("tea")) {
      return (
        <div
          className={`w-full h-64 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center relative overflow-hidden ${className}`}
        >
          {/* Tea leaves pattern */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-6 h-10 bg-gradient-to-b from-green-600 to-green-700 rounded-full transform"
                style={{
                  left: `${10 + (i % 5) * 18}%`,
                  top: `${10 + Math.floor(i / 5) * 20}%`,
                  transform: `rotate(${i * 24}deg)`,
                  opacity: 0.7,
                }}
              >
                <div className="absolute top-1/2 left-1/2 w-0.5 h-8 bg-green-800 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            ))}
          </div>
          <div className="relative z-10 text-center">
            <div className="text-4xl mb-2">🍃</div>
            <div className="text-sm font-medium text-green-800">Premium Tea Blend</div>
          </div>
        </div>
      )
    }

    if (name.includes("giraffe") || name.includes("sculpture")) {
      return (
        <div
          className={`w-full h-64 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center relative overflow-hidden ${className}`}
        >
          {/* Giraffe pattern spots */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-orange-400 rounded-full opacity-60"
                style={{
                  width: `${15 + Math.random() * 20}px`,
                  height: `${15 + Math.random() * 20}px`,
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                }}
              ></div>
            ))}
          </div>
          {/* Stylized giraffe silhouette */}
          <div className="relative z-10">
            <div className="w-8 h-32 bg-gradient-to-b from-orange-600 to-orange-700 rounded-t-full mx-auto"></div>
            <div className="w-16 h-20 bg-gradient-to-b from-orange-500 to-orange-600 rounded-lg mx-auto -mt-4"></div>
            <div className="w-6 h-12 bg-gradient-to-b from-orange-600 to-orange-700 mx-auto -mt-2"></div>
          </div>
          <div className="absolute bottom-8 text-center">
            <div className="text-4xl mb-2">🦒</div>
            <div className="text-sm font-medium text-orange-800">Wooden Sculpture</div>
          </div>
        </div>
      )
    }

    if (name.includes("soap") || name.includes("shea")) {
      return (
        <div
          className={`w-full h-64 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center relative overflow-hidden ${className}`}
        >
          {/* Soap bubbles */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full opacity-60 animate-pulse"
                style={{
                  width: `${10 + Math.random() * 30}px`,
                  height: `${10 + Math.random() * 30}px`,
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              ></div>
            ))}
          </div>
          <div className="relative z-10 text-center">
            <div className="text-4xl mb-2">🧼</div>
            <div className="text-sm font-medium text-pink-800">Natural Soap</div>
          </div>
        </div>
      )
    }

    if (name.includes("honey")) {
      return (
        <div
          className={`w-full h-64 bg-gradient-to-br from-yellow-100 to-amber-100 flex items-center justify-center relative overflow-hidden ${className}`}
        >
          {/* Honeycomb pattern */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, row) => (
              <div key={row} className="flex justify-center" style={{ marginTop: `${row * 30}px` }}>
                {[...Array(4)].map((_, col) => (
                  <div
                    key={col}
                    className="w-8 h-8 bg-yellow-400 mx-1 transform rotate-45 opacity-70"
                    style={{
                      clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
          <div className="relative z-10 text-center">
            <div className="text-4xl mb-2">🍯</div>
            <div className="text-sm font-medium text-amber-800">Pure Honey</div>
          </div>
        </div>
      )
    }

    if (name.includes("basket") || name.includes("sisal")) {
      return (
        <div
          className={`w-full h-64 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center relative overflow-hidden ${className}`}
        >
          {/* Woven pattern */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div key={i}>
                <div className="absolute w-full h-2 bg-amber-600 opacity-60" style={{ top: `${i * 12}%` }}></div>
                <div className="absolute h-full w-2 bg-amber-700 opacity-60" style={{ left: `${i * 12}%` }}></div>
              </div>
            ))}
          </div>
          <div className="relative z-10 text-center">
            <div className="text-4xl mb-2">🧺</div>
            <div className="text-sm font-medium text-amber-800">Handwoven Basket</div>
          </div>
        </div>
      )
    }

    if (name.includes("blanket") || name.includes("shuka")) {
      return (
        <div
          className={`w-full h-64 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center relative overflow-hidden ${className}`}
        >
          {/* Maasai plaid pattern */}
          <div className="absolute inset-0">
            {/* Vertical stripes */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`v-${i}`}
                className={`absolute h-full w-8 ${i % 2 === 0 ? "bg-red-500" : "bg-blue-500"} opacity-70`}
                style={{ left: `${i * 16}%` }}
              ></div>
            ))}
            {/* Horizontal stripes */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`h-${i}`}
                className={`absolute w-full h-8 ${i % 2 === 0 ? "bg-green-500" : "bg-yellow-500"} opacity-50`}
                style={{ top: `${i * 16}%` }}
              ></div>
            ))}
          </div>
          <div className="relative z-10 text-center">
            <div className="text-4xl mb-2">🏺</div>
            <div className="text-sm font-medium text-red-800">Traditional Shuka</div>
          </div>
        </div>
      )
    }

    // Default fallback for any other products
    return (
      <div
        className={`w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden ${className}`}
      >
        <div className="text-center">
          <div className="text-6xl mb-4">🇰🇪</div>
          <div className="text-sm font-medium text-gray-700">Kenyan Product</div>
          <div className="text-xs text-gray-600 mt-1">{category}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative group">
      {getProductVisual()}
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-t-lg flex items-center justify-center">
        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          <div className="text-sm font-medium">View Details</div>
        </div>
      </div>
    </div>
  )
}
