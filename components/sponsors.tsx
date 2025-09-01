"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, Star, Award, Users } from "lucide-react"
import { Mail, Phone } from "lucide-react"

export function Sponsors() {
  const sponsorTiers = [
    {
      title: "Platinum Sponsors",
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "purple",
      sponsors: [
        { name: "TechCorp Industries", logo: "/placeholder.svg?height=80&width=200" },
        { name: "Innovation Labs", logo: "/placeholder.svg?height=80&width=200" },
      ],
    },
    {
      title: "Gold Sponsors",
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "yellow",
      sponsors: [
        { name: "Digital Solutions Inc", logo: "/placeholder.svg?height=80&width=180" },
        { name: "Future Tech Systems", logo: "/placeholder.svg?height=80&width=180" },
        { name: "Smart Engineering Co", logo: "/placeholder.svg?height=80&width=180" },
      ],
    },
    {
      title: "Silver Sponsors",
      icon: <Building className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "gray",
      sponsors: [
        { name: "NextGen Technologies", logo: "/placeholder.svg?height=60&width=160" },
        { name: "Advanced Systems Ltd", logo: "/placeholder.svg?height=60&width=160" },
        { name: "Innovative Solutions", logo: "/placeholder.svg?height=60&width=160" },
        { name: "Tech Pioneers", logo: "/placeholder.svg?height=60&width=160" },
      ],
    },
  ]

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

        {/* Sponsor Tiers */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16 mb-8 sm:mb-12 lg:mb-16">
          {sponsorTiers.map((tier, index) => (
            <div key={index}>
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
                  <div className={`p-2 sm:p-3 rounded-lg ${getColorClasses(tier.color)}`}>{tier.icon}</div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900">{tier.title}</h3>
                </div>
              </div>

              <div
                className={`grid gap-4 sm:gap-6 lg:gap-8 ${
                  tier.sponsors.length <= 2
                    ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
                    : tier.sponsors.length <= 3
                      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                }`}
              >
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <Card
                    key={sponsorIndex}
                    className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-4 sm:p-6 text-center">
                      <img
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={sponsor.name}
                        className="w-full h-16 sm:h-20 object-contain mb-3 sm:mb-4"
                      />
                      <h4 className="text-sm sm:text-base font-semibold text-blue-900">{sponsor.name}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a Sponsor */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <Card className="bg-white border-blue-200 shadow-lg">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl text-blue-900 flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                Become a Sponsor
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-blue-700 leading-relaxed">
                Partner with NCI-TIDE 2025 and showcase your organization to leading researchers, academicians, and
                industry professionals in engineering and technology.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {sponsorshipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-blue-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-blue-200">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white flex-1 text-sm sm:text-base py-2 sm:py-3">
                  Sponsor Now
                </Button>
                <a
                  href="/confbrochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent flex-1 text-sm sm:text-base py-2 sm:py-3 rounded-md border transition-colors text-center inline-flex items-center justify-center"
                >
                  Download Brochure
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900 to-purple-900 text-white">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Sponsorship Packages</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-base sm:text-lg">Platinum Package</h4>
                    <span className="text-lg sm:text-xl font-bold">₹2,00,000</span>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-100">Premium branding & exhibition space</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-base sm:text-lg">Gold Package</h4>
                    <span className="text-lg sm:text-xl font-bold">₹1,00,000</span>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-100">Enhanced visibility & networking</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-base sm:text-lg">Silver Package</h4>
                    <span className="text-lg sm:text-xl font-bold">₹50,000</span>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-100">Standard branding opportunities</p>
                </div>
              </div>
              <div className="w-full mt-6 sm:mt-8">
                <div className="text-lg sm:text-xl font-semibold mb-4">Contact for Custom Package</div>
                <div className="text-sm sm:text-base space-y-4">
                  <div>
                    <div className="font-semibold">Dr. Neelam Barak</div>
                    <div>Assistant Professor, ECE Dept</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Mail className="w-4 h-4 text-blue-100" />
                      <a
                        href="mailto:neelam.barak@msit.in"
                        className="underline text-blue-100 hover:text-blue-200"
                      >
                        neelam.barak@msit.in
                      </a>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Phone className="w-4 h-4 text-blue-100" />
                      <a
                        href="tel:+919319963978"
                        className="underline text-blue-100 hover:text-blue-200"
                      >
                        +91 93199 63978
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Dr. Garima</div>
                    <div>Assistant Professor, ECE Dept</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Mail className="w-4 h-4 text-blue-100" />
                      <a
                        href="mailto:garima@msit.in"
                        className="underline text-blue-100 hover:text-blue-200"
                      >
                        garima@msit.in
                      </a>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Phone className="w-4 h-4 text-blue-100" />
                      <a
                        href="tel:+919582737935"
                        className="underline text-blue-100 hover:text-blue-200"
                      >
                        +91 95827 37935
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
