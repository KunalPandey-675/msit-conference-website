"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Lightbulb, Users, Globe, Zap, BookOpen } from "lucide-react"

export function Overview() {
  const objectives = [
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Innovation Focus",
      description: "Promote cutting-edge research and innovation in engineering and technology domains",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Industry Collaboration",
      description: "Foster collaboration between academia and industry for practical solutions",
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Knowledge Exchange",
      description: "Facilitate knowledge sharing among researchers, academicians, and professionals",
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Technology Transfer",
      description: "Bridge the gap between research outcomes and industrial applications",
    },
  ]

  const highlights = [
    "Keynote speeches by renowned industry experts",
    "Technical paper presentations across multiple tracks",
    "Panel discussions on emerging technologies",
    "Networking opportunities with industry leaders",
    // "Publication in IEEE proceedings",
    "Awards for best papers and presentations",
    <>
      Top selected papers related to Meteorology will be considered for publication in the{" "}
      <a
        href="https://link.springer.com/journal/12647/updates"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-700 hover:text-blue-900"
      >
        MAPAN Journal
      </a>
      , a peer-reviewed and reputed journal published by the Indian National Academy of Engineering (INAE). This opportunity is extended to high-quality submissions that demonstrate originality, scientific rigor, and relevance to current challenges and innovations in Meteorology.
    </>,
    <>
      A few selected papers will be considered for publication in the{" "}
      <a
        href="https://pesjournal.net/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-700 hover:text-blue-900"
      >
        PES Journal
      </a>
      , a recognized and Scopus-indexed publication. Submitted papers will undergo a thorough peer-review process to ensure they meet the journal’s academic and quality standards.
    </>,
    "This presents an excellent opportunity for researchers to showcase their work in a reputed international journal. We encourage researchers, academicians, and professionals in the field to take advantage of this opportunity to publish in a well-regarded scientific journal."
  ]

  return (
    <section id="overview" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4 sm:mb-6 text-xs sm:text-sm px-3 py-1">
            Conference Overview
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            About NCI-TIDE 2025
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed px-4">
            The National Conference on Integrating Technologies, Ideas and Disciplines for Engineering Innovation (NCI-TIDE 2025) is a premier platform for researchers, academicians, and industry professionals to showcase their
            latest innovations and discuss emerging trends in engineering and technology.
          </p>
        </div>

        {/* Conference Objectives */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-8 sm:mb-12">
            Conference Objectives
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {objectives.map((objective, index) => (
              <Card
                key={index}
                className="bg-white border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full"
              >
                <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-blue-600">
                    {objective.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-blue-900 mb-3 sm:mb-4">{objective.title}</h4>
                  <p className="text-sm sm:text-base text-blue-700 leading-relaxed flex-1">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conference Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <Card className="bg-white border-blue-200 shadow-lg">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-2xl sm:text-3xl text-blue-900 flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                  <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                Conference Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-blue-700 leading-relaxed">{highlight}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900 to-purple-900 text-white">
            <CardContent className="p-3 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-white/20 rounded-lg">
                  <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-2xl sm:text-2xl font-bold">Authors’ Expectations of Attending</h3>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">Meaningful Feedback</h4>
                  <p className="text-xs sm:text-sm text-blue-100">
                    Authors anticipate insightful reviews that help refine their research and methodology.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">Broader Visibility</h4>
                  <p className="text-xs sm:text-sm text-blue-100">
                    An opportunity to showcase their work to a wider academic and industrial audience.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">Collaborative Opportunities</h4>
                  <p className="text-xs sm:text-sm text-blue-100">
                    Engage with like-minded researchers to explore interdisciplinary collaborations.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">Academic Recognition</h4>
                  <p className="text-xs sm:text-sm text-blue-100">
                    Strengthen academic profile through participation in a reputed conference.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}