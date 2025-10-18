"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen,Newspaper } from "lucide-react"

export function PublicationBenefits() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const benefits = [
    {
      icon: <Award className="w-5 h-5" />,
      text: "Top selected papers related to Meteorology will be considered for publication in the MAPAN Journal",
      highlight: "MAPAN Journal"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      text: "A few selected papers will be considered for publication in the PES Journal, a recognized and Scopus-indexed publication",
      highlight: "PES Journal"
    },
    {
      icon: <Newspaper className="w-5 h-5" />,
      text: "The selected quality papers will be published as Satyam Journal Special Issue.",
      highlight: "Satyam Journal Special Issue"
    }

  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [benefits.length])

  return (
    <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-12">
      <div className="relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6">
        <div className="flex items-center justify-center mb-3">
          <Badge className="bg-yellow-500/20 text-yellow-200 border-yellow-400/30 text-xs sm:text-sm px-3 py-1">
            Publication Opportunities
          </Badge>
        </div>

        <div className="relative h-16 sm:h-12 flex items-center justify-center">
          <div
            className="flex transition-transform duration-700 ease-in-out w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex items-center justify-center text-center px-4"
              >
                <div className="flex items-start gap-3 max-w-3xl">
                  <div className="flex-shrink-0 mt-1 text-yellow-300">
                    {benefit.icon}
                  </div>
                  <p className="text-sm sm:text-base text-white leading-relaxed">
                    {benefit.text.split(benefit.highlight).map((part, i) => (
                      <span key={i}>
                        {part}
                        {i < benefit.text.split(benefit.highlight).length - 1 && (
                          <span className="font-semibold text-yellow-300 bg-yellow-500/20 px-2 py-1 rounded">
                            {benefit.highlight}
                          </span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {benefits.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "bg-yellow-300 w-6"
                  : "bg-white/30 hover:bg-white/50"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
