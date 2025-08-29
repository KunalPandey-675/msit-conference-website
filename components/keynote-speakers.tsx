"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mic, Award, Building2 } from "lucide-react"

export function KeynoteSpeakers() {
  const keynoteSpeakers = [
    {
      name: "Dr. Subhash Chander",
      title: "Scientist G",
      organization: "Solid State Physics Laboratory (SSPL)",
      affiliation: "DRDO, Delhi",
      image: "/placeholder-user.jpg",
      bio: "Distinguished scientist with expertise in solid state physics and advanced materials research.",
      expertise: ["Solid State Physics", "Materials Science", "Defense Research"]
    },
    {
      name: "Prof. Prerna Gaur",
      title: "Director",
      organization: "West Campus, NSUT",
      affiliation: "Netaji Subhas University of Technology",
      image: "/placeholder-user.jpg",
      bio: "Accomplished academic leader with extensive experience in engineering education and research.",
      expertise: ["Engineering Education", "Academic Leadership", "Research Management"]
    },
    {
      name: "Prof. (Dr.) Brahmjit Singh",
      title: "Professor",
      organization: "NIT Kurukshetra",
      affiliation: "National Institute of Technology",
      image: "/placeholder-user.jpg",
      bio: "Renowned professor with significant contributions to engineering research and education.",
      expertise: ["Engineering Research", "Technical Education", "Innovation"]
    }
  ]

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase()
  }

  return (
    <section id="keynote-speakers" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4 sm:mb-6 text-xs sm:text-sm px-3 py-1">
            Distinguished Speakers
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            Keynote Speakers
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed px-4">
            Learn from industry leaders and renowned experts who will share their insights and experiences in cutting-edge technologies and innovations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-7xl mx-auto">
          {keynoteSpeakers.map((speaker, index) => (
            <Card
              key={index}
              className="bg-white border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full"
            >
              <CardHeader className="text-center pb-4">
                <div className="relative mb-4">
                  <Avatar className="w-24 h-24 sm:w-28 sm:h-28 mx-auto border-4 border-blue-200 shadow-lg">
                    <AvatarImage src={speaker.image || "/placeholder.svg"} alt={speaker.name} />
                    <AvatarFallback className="text-xl sm:text-2xl font-bold bg-blue-100 text-blue-600">
                      {getInitials(speaker.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg">
                      <Mic className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                  {speaker.name}
                </CardTitle>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-2 text-sm">
                  {speaker.title}
                </Badge>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-900 text-sm">{speaker.organization}</p>
                      <p className="text-blue-700 text-sm">{speaker.affiliation}</p>
                    </div>
                  </div>
                  
                  {speaker.bio && (
                    <p className="text-blue-700 text-sm leading-relaxed">
                      {speaker.bio}
                    </p>
                  )}
                  
                  {speaker.expertise && speaker.expertise.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-blue-600" />
                        <span className="font-semibold text-blue-900 text-sm">Expertise:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {speaker.expertise.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="outline"
                            className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {keynoteSpeakers.length === 0 && (
          <div className="text-center py-12">
            <Mic className="w-16 h-16 text-blue-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">More Speakers Coming Soon</h3>
            <p className="text-blue-700">We're excited to announce our distinguished keynote speakers soon!</p>
          </div>
        )}
      </div>
    </section>
  )
}
