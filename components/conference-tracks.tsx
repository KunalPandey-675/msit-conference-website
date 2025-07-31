"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Wifi, Zap, Shield, Brain, Smartphone, Radio, Satellite, CircuitBoard } from "lucide-react"
import {
  Stethoscope,
  Image,
  Ruler,
  BrainCircuit,
  BookOpenCheck,
} from "lucide-react";

export function ConferenceTracks() {
 const tracks = [
  {
    title: "Smart Embedded Systems and Real-Time Applications",
    icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "blue",
    topics: [],
  },
  {
    title: "Communication, Computing, and Cybersecurity",
    icon: <Wifi className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "green",
    topics: [],
  },
  {
    title: "Technology for Defence and National Security",
    icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "red",
    topics: [],
  },
  {
    title: "Sustainable Energy and Green Technology",
    icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "yellow",
    topics: [],
  },
  {
    title: "Healthcare in Engineering Applications",
    icon: <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "teal",
    topics: [],
  },
  {
    title: "Multi-domain Applications of Signal and Image Processing",
    icon: <Image className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "purple",
    topics: [],
  },
  {
    title: "Digital Metrology and Data-Driven Measurement Systems",
    icon: <Ruler className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "indigo",
    topics: [],
  },
  {
    title: "Soft Computing in Uncertain and Dynamic Environments",
    icon: <BrainCircuit className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "pink",
    topics: [],
  },
  {
    title: "Engineering Innovations for Transforming Modern Education",
    icon: <BookOpenCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "orange",
    topics: [],
  },
];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      yellow: "bg-yellow-100 text-yellow-600 border-yellow-200",
      red: "bg-red-100 text-red-600 border-red-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
      pink: "bg-pink-100 text-pink-600 border-pink-200",
      teal: "bg-teal-100 text-teal-600 border-teal-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section id="conference-tracks" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4 sm:mb-6 text-xs sm:text-sm px-3 py-1">
            Conference Tracks
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">Technical Tracks</h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed px-4">
            NCI-TIDE-MSIT 2025 covers diverse areas of engineering and technology innovation across multiple specialized
            tracks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tracks.map((track, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full"
            >
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl">
                  <div className={`p-2 sm:p-3 rounded-lg ${getColorClasses(track.color)}`}>{track.icon}</div>
                  <span className="text-blue-900 leading-tight">{track.title}</span>
                </CardTitle>
              </CardHeader>
              {/* <CardContent className="pt-0">
                <div className="space-y-0 sm:space-y-0">
                  {track.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-blue-700 leading-relaxed">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent> */}
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <Card className="bg-blue-50 border-blue-200 shadow-lg">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 sm:mb-6">
                Don't See Your Research Area?
              </h3>
              <p className="text-base sm:text-lg text-blue-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                We welcome interdisciplinary research and innovative approaches that bridge multiple domains. If your
                research doesn't fit exactly into one track, we encourage you to submit to the most relevant category.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-md mx-auto">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2 text-sm sm:text-base">
                  Interdisciplinary Research Welcome
                </Badge>
                <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2 text-sm sm:text-base">
                  Cross-Domain Innovation
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
