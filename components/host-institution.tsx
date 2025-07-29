"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Users, Award, BookOpen, Globe, MapPin, Phone, Mail } from "lucide-react"

export function HostInstitution() {
  const highlights = [
    {
      icon: Users,
      title: "5000+ Students",
      description: "Diverse student community across multiple disciplines",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: BookOpen,
      title: "Multiple Programs",
      description: "Engineering, Management, and Applied Sciences",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Award,
      title: "NAAC Accredited",
      description: "Quality education with industry recognition",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Globe,
      title: "Industry Partnerships",
      description: "Strong connections with leading companies",
      color: "from-orange-500 to-orange-600",
    },
  ]

  const facilities = [
    "State-of-the-art Conference Halls",
    "Modern Audio-Visual Equipment",
    "High-Speed Internet Connectivity",
    "Comfortable Accommodation",
    "Cafeteria and Dining Facilities",
    "Ample Parking Space",
    "Accessible Infrastructure",
    "Exhibition Areas",
  ]

  return (
    <section
      id="host-institution"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-blue-800 px-4">
            Host Institution
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-800 max-w-3xl mx-auto px-4">
            Maharaja Surajmal Institute of Technology - A premier institution fostering innovation and excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Institution Overview */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg">
                  <Building className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800">
                    MSIT, New Delhi
                  </CardTitle>
                  <Badge className="bg-blue-100 text-blue-800 text-xs sm:text-sm mt-1">Established 1998</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 lg:p-8 pt-0">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                Maharaja Surajmal Institute of Technology (MSIT) is a premier engineering institution located in
                Janakpuri, New Delhi. Established in 1998, MSIT has been at the forefront of technical education,
                research, and innovation. The institute is affiliated with Guru Gobind Singh Indraprastha University and
                is approved by AICTE.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                With a strong emphasis on academic excellence and industry collaboration, MSIT has consistently produced
                skilled engineers and technologists who contribute significantly to various sectors of the economy.
              </p>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 sm:p-6">
                <h4 className="font-bold text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Contact Information</h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>C-4, Janakpuri, New Delhi - 110058, India</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span>+91-11-2545-5663, +91-11-2545-5664</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0" />
                    <span>info@msit.in</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Institution Highlights */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 sm:mb-8 text-center lg:text-left px-4 lg:px-0">
              Why MSIT?
            </h3>
            <div className="grid gap-4 sm:gap-6">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white"
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div
                          className={`p-2 sm:p-3 bg-gradient-to-r ${highlight.color} rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                        >
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-bold text-base sm:text-lg text-gray-800 mb-1">{highlight.title}</h4>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* Conference Facilities */}
        <Card className="border-0 shadow-xl bg-white">
          <CardHeader className="text-center p-4 sm:p-6 lg:p-8">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-blue-800 mb-3 sm:mb-4">
              Conference Facilities
            </CardTitle>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              MSIT provides world-class facilities to ensure a successful and memorable conference experience
            </p>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 lg:p-8 pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{facility}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Location Advantages */}
        <Card className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-800 to-purple-800 text-white border-0 shadow-2xl">
          <CardContent className="p-6 sm:p-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Strategic Location</h3>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Located in the heart of New Delhi, MSIT offers excellent connectivity and accessibility. The campus is
              just 10 km from Indira Gandhi International Airport and well-connected to major transportation hubs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">10 km</div>
                <div className="text-xs sm:text-sm text-blue-200">From Airport</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">5 km</div>
                <div className="text-xs sm:text-sm text-blue-200">From Metro Station</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">15 km</div>
                <div className="text-xs sm:text-sm text-blue-200">From City Center</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
