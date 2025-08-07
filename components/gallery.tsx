"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Users, Award, Building, Calendar, MapPin } from "lucide-react"

export function Gallery() {
  const galleryItems = [
    {
      title: "Previous Conference Highlights",
      category: "Conference 2024",
      image: "/placeholder.svg?height=300&width=400&text=Conference+Hall",
      description: "Main conference hall with distinguished speakers and participants",
    },
    {
      title: "Technical Sessions",
      category: "Research Presentations",
      image: "/placeholder.svg?height=300&width=400&text=Technical+Session",
      description: "Researchers presenting their innovative work and findings",
    },
    {
      title: "Networking Events",
      category: "Community Building",
      image: "/placeholder.svg?height=300&width=400&text=Networking+Event",
      description: "Industry professionals and academics connecting and collaborating",
    },
    {
      title: "Award Ceremony",
      category: "Recognition",
      image: "/placeholder.svg?height=300&width=400&text=Award+Ceremony",
      description: "Celebrating excellence in research and innovation",
    },
    {
      title: "Exhibition Area",
      category: "Technology Showcase",
      image: "/placeholder.svg?height=300&width=400&text=Exhibition",
      description: "Latest technologies and innovations on display",
    },
    {
      title: "Campus View",
      category: "Venue",
      image: "/placeholder.svg?height=300&width=400&text=MSIT+Campus",
      description: "Beautiful MSIT campus hosting the conference",
    },
  ]

  const stats = [
    { icon: Users, label: "Participants", value: "500+", color: "from-blue-500 to-blue-600" },
    { icon: Award, label: "Papers Presented", value: "150+", color: "from-purple-500 to-purple-600" },
    { icon: Building, label: "Institutions", value: "50+", color: "from-green-500 to-green-600" },
    { icon: Calendar, label: "Sessions", value: "20+", color: "from-orange-500 to-orange-600" },
  ]

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-blue-800 px-4">
            Conference Gallery
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-800 max-w-3xl mx-auto px-4">
            Glimpses from previous conferences and what to expect at NCI-TIDE 2025
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-r ${stat.color} rounded-xl p-3 sm:p-4`}
                  >
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <Badge className="bg-white/90 text-gray-800 text-xs sm:text-sm">{item.category}</Badge>
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-white">
                    <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium">View Details</span>
                  </div>
                </div>
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-800 to-purple-800 text-white border-0 shadow-2xl">
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
              <h3 className="text-2xl sm:text-3xl font-bold">Join Us at MSIT</h3>
            </div>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Be part of NCI-TIDE 2025 and create new memories while advancing engineering innovation. Experience the
              vibrant academic atmosphere at MSIT, New Delhi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 text-sm sm:text-base">
                Register Now
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors duration-300 text-sm sm:text-base">
                View Campus Map
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
