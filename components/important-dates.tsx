"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react"

export function ImportantDates() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const timelineItems = timelineRef.current?.querySelectorAll(".timeline-item")
    timelineItems?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const dates = [
    {
      date: "August 1, 2025",
      event: "Call for Papers Announcement",
      description: "Official announcement and paper submission portal opens",
      status: "completed",
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      date: "September 15, 2025",
      event: "Paper Submission Deadline",
      description: "Last date for submitting full papers",
      status: "upcoming",
      icon: <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      date: "September 30, 2025",
      event: "Review Process Completion",
      description: "Peer review process completed and results announced",
      status: "upcoming",
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      date: "October 15, 2025",
      event: "Camera Ready Submission",
      description: "Final version of accepted papers due",
      status: "upcoming",
      icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    
    {
      date: "October 25, 2025",
      event: "Final Registration Deadline",
      description: "Last date for conference registration",
      status: "upcoming",
      icon: <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      date: "November 20-21, 2025",
      event: "Conference Days",
      description: "Main conference event at MSIT, Delhi",
      status: "conference",
      icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "upcoming":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "conference":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getCardColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-200 bg-green-50/50"
      case "upcoming":
        return "border-blue-200 bg-blue-50/50"
      case "conference":
        return "border-purple-200 bg-purple-50/50"
      default:
        return "border-gray-200 bg-gray-50/50"
    }
  }

  return (
    <section id="important-dates" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4 sm:mb-6 text-xs sm:text-sm px-3 py-1">
            Timeline
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">Important Dates</h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed px-4">
            Mark your calendar with these crucial dates for NCI-TIDE-MSIT 2025
          </p>
        </div>

        <div ref={timelineRef} className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            <div className="space-y-6 sm:space-y-8">
              {dates.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item opacity-0 transform translate-y-4 transition-all duration-700 delay-${index * 100}`}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Timeline Dot */}
                    <div
                      className={`relative z-10 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
                        item.status === "completed"
                          ? "bg-green-500 text-white"
                          : item.status === "conference"
                            ? "bg-purple-500 text-white"
                            : "bg-blue-500 text-white"
                      } shadow-lg`}
                    >
                      {item.icon}
                    </div>

                    {/* Content */}
                    <Card
                      className={`flex-1 ${getCardColor(item.status)} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
                    >
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                          <h3 className="text-lg sm:text-xl font-bold text-blue-900">{item.event}</h3>
                          <Badge className={`${getStatusColor(item.status)} text-xs sm:text-sm px-2 py-1 w-fit`}>
                            {item.date}
                          </Badge>
                        </div>
                        <p className="text-sm sm:text-base text-blue-700 leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <Card className="bg-gradient-to-r from-blue-900 to-purple-900 text-white border-0 shadow-2xl">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Quick Reference</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">Paper Submission Start's</h4>
                  <p className="text-sm sm:text-base text-blue-100">August 1, 2025</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">Early Bird Registration Deadline</h4>
                  <p className="text-sm sm:text-base text-blue-100">October 6, 2025</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">Conference Dates</h4>
                  <p className="text-sm sm:text-base text-blue-100">November 20-21, 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
