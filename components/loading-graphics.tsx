"use client"

export default function LoadingGraphics() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="text-center">
        {/* Animated Kenyan flag colors */}
        <div className="flex space-x-2 mb-4">
          <div className="w-4 h-4 bg-black rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce delay-100"></div>
          <div className="w-4 h-4 bg-green-600 rounded-full animate-bounce delay-200"></div>
        </div>

        {/* Loading text */}
        <div className="text-2xl font-bold text-orange-600 mb-2">Duka Digital</div>
        <div className="text-gray-600">Loading your Kenyan marketplace...</div>

        {/* Safari animals animation */}
        <div className="mt-4 text-4xl animate-pulse">🦒 🐘 🦁</div>
      </div>
    </div>
  )
}
