"use client"

export default function HeroGraphics() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-green-400 rotate-45 opacity-20 animate-bounce"></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-red-400 rounded-full opacity-15 animate-pulse delay-1000"></div>

      {/* Kenyan flag colors pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-black via-red-600 to-green-600 opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-orange-400 to-yellow-400 opacity-10 rounded-full blur-xl"></div>

      {/* Safari silhouettes */}
      <div className="absolute top-1/2 right-10 text-6xl opacity-10 animate-pulse">🦒</div>
      <div className="absolute bottom-20 left-20 text-4xl opacity-10 animate-bounce delay-500">🐘</div>
    </div>
  )
}
