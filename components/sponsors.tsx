"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, Star, Award, Users } from "lucide-react"
import { Mail, Phone } from "lucide-react"

export function Sponsors() {
  const sponsors = [
    { name: "Dwarka Motors", logo: "/images/sponsors/sponserDM.jpg" },
    { name: "Mikronix Associate", logo: "/images/sponsors/sponsorMA.jpg" },
    { name: "Elegancespark Innovations", logo: "/images/sponsors/sponsorEI.jpg" },
    { name: "DRDO", logo: "/images/sponsors/sponsorDRDO.jpg" },
  ];

  const sponsorshipBenefits = [
    "Brand visibility to 500+ participants",
    "Logo placement on conference materials",
    "Exhibition space at the venue",
    "Speaking opportunities",
    "Networking with industry leaders",
    "Access to research presentations",
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      yellow: "bg-yellow-100 text-yellow-600 border-yellow-200",
      gray: "bg-gray-100 text-gray-600 border-gray-200",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.gray
  }

  return (
    <section id="sponsors" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4 sm:mb-6 text-xs sm:text-sm px-3 py-1">
            Our Sponsors
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">Conference Partners</h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed px-4">
            We are grateful to our sponsors and partners who make NCI-TIDE 2025 possible. Their support enables us
            to bring together the best minds in engineering innovation.
          </p>
        </div>

        {/* Sponsors Grid Only */}
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          {sponsors.map((sponsor, sponsorIndex) => (
            <Card
              key={sponsorIndex}
              className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-16 sm:h-20 object-contain mb-3 sm:mb-4"
                />
                <h4 className="text-sm sm:text-base font-semibold text-blue-900">{sponsor.name}</h4>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ...existing code... */}
      </div>
    </section>
  )
}
