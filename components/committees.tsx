"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Crown,
  Users,
  FileText,
  DollarSign,
  BookOpen,
  Megaphone,
  Palette,
  Globe,
  UserCheck,
  Coffee,
  Building,
  PlayIcon as Stage,
  Network,
} from "lucide-react"

export function Committees() {
  const director = {
    name: "Prof. (Dr.) Archana Balyan",
    title: "Director, MSIT",
    image: "/placeholder-user.jpg",
    email: "director@msit.edu.in",
  }

  const leadership = [
    {
      name: "Prof. (Dr.) Neeru Rathee",
      title: "Convener",
      department: "Department of ECE, MSIT",
      image: "/placeholder-user.jpg",
      email: "neeru.rathee@msit.edu.in",
    },
    {
      name: "Prof. (Dr.) Pradeep Sangwan",
      title: "Co-Convener",
      department: "Department of ECE, MSIT",
      image: "/placeholder-user.jpg",
      email: "pradeep.sangwan@msit.edu.in",
    },
    {
      name: "Prof. (Dr.) Puneet Azad",
      title: "Co-Convener",
      department: "Department of ECE, MSIT",
      image: "/placeholder-user.jpg",
      email: "puneet.azad@msit.edu.in",
    },
  ]

  const committees = [
    {
      name: "Technical Program Committee",
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "blue",
      members: [
        "Prof. (Dr.) Neeru Rathee",
        "Prof. (Dr.) Pradeep Sangwan",
        "Prof. (Dr.) Puneet Azad",
        "Dr. Sudesh Pahal",
        "Dr. Meena Rao",
        "Dr. Shaifali M. Arora",
      ],
    },
    {
      name: "Finance Committee",
      icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "green",
      members: ["Dr. Neetu", "Dr. Suman Lata"],
    },
    {
      name: "Publication Committee",
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "purple",
      members: ["Prof. Meena Rao", "Dr. Neha Dhama", "Dr. Sakshi Rajput"],
    },
    {
      name: "Publicity Committee",
      icon: <Megaphone className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "orange",
      members: ["Dr. Aman Dahiya", "Dr. Jasmine Chikkara"],
    },
    {
      name: "Design and Printing Committee",
      icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "pink",
      members: ["Dr. Sudesh Pahal", "Mr. Deepak Goyal"],
    },
    {
      name: "Website Committee",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "indigo",
      members: ["Dr. Shaifali M. Arora", "Dr. Upma"],
    },
    {
      name: "Reception/Registration Committee",
      icon: <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "teal",
      members: ["Dr. Dinesh Sheoran", "Dr. Anjali Balyan", "Ms. Prinkle Talan", "Dr. Suman Lata"],
    },
    {
      name: "Hospitality Committee",
      icon: <Coffee className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "amber",
      members: ["Dr. Nishtha", "Dr. Anjali Baliyan", "Ms. Vishakha"],
    },
    {
      name: "Sponsorship Committee",
      icon: <Building className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "emerald",
      members: ["Dr. Garima", "Dr. Neelam Barak"],
    },
    {
      name: "Stage Committee",
      icon: <Stage className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "red",
      members: ["Dr. Deepti", "Dr. Himani", "Ms. Sonia"],
    },
    {
      name: "Collaboration Committee",
      icon: <Network className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "violet",
      members: ["Dr. Neelam Nehra", "Dr. Geetanjali Sharma"],
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      pink: "bg-pink-100 text-pink-600 border-pink-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
      teal: "bg-teal-100 text-teal-600 border-teal-200",
      amber: "bg-amber-100 text-amber-600 border-amber-200",
      emerald: "bg-emerald-100 text-emerald-600 border-emerald-200",
      red: "bg-red-100 text-red-600 border-red-200",
      violet: "bg-violet-100 text-violet-600 border-violet-200",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase()
  }

  return (
    <section id="committees" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4 sm:mb-6 text-xs sm:text-sm px-3 py-1">
            Organizing Team
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            Organizing Committee
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed px-4">
            Meet the dedicated team of faculty and staff members organizing NCI-TIDE-MSIT 2025
          </p>
        </div>

        {/* Director Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <Card className="bg-gradient-to-r from-blue-900 to-purple-900 text-white border-0 shadow-2xl max-w-2xl mx-auto">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-white/20 rounded-lg">
                  <Crown className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">Conference Patron</h3>
              </div>
              <Avatar className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 border-4 border-white/20">
                <AvatarImage src={director.image || "/placeholder.svg"} alt={director.name} />
                <AvatarFallback className="text-lg sm:text-xl font-bold bg-white/20 text-white">
                  {getInitials(director.name)}
                </AvatarFallback>
              </Avatar>
              <h4 className="text-xl sm:text-2xl font-bold mb-2">{director.name}</h4>
              <p className="text-base sm:text-lg text-blue-100 mb-2">{director.title}</p>
              <p className="text-sm sm:text-base text-blue-200">{director.email}</p>
            </CardContent>
          </Card>
        </div>

        {/* Leadership Team */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-8 sm:mb-12">
            Conference Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <Card
                key={index}
                className="bg-white border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <Avatar className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 border-2 border-blue-200">
                    <AvatarImage src={leader.image || "/placeholder.svg"} alt={leader.name} />
                    <AvatarFallback className="text-base sm:text-lg font-bold bg-blue-100 text-blue-600">
                      {getInitials(leader.name)}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2">{leader.name}</h4>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-2 sm:mb-3 text-xs sm:text-sm">
                    {leader.title}
                  </Badge>
                  <p className="text-xs sm:text-sm text-blue-700 mb-2">{leader.department}</p>
                  <p className="text-xs sm:text-sm text-blue-600">{leader.email}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Committee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {committees.map((committee, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full"
            >
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl">
                  <div className={`p-2 rounded-lg ${getColorClasses(committee.color)}`}>{committee.icon}</div>
                  <span className="text-blue-900 leading-tight">{committee.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 sm:space-y-3">
                  {committee.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="flex items-center gap-2 sm:gap-3">
                      <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-200">
                        <AvatarImage src="/placeholder-user.jpg" alt={member} />
                        <AvatarFallback className="text-xs sm:text-sm font-medium bg-gray-100 text-gray-600">
                          {getInitials(member)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm sm:text-base text-blue-700 font-medium">{member}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <Card className="bg-blue-50 border-blue-200 shadow-lg">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-900">Contact the Committee</h3>
              </div>
              <p className="text-base sm:text-lg text-blue-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                For any queries related to the conference, please feel free to contact the respective committee members
                or reach out to the organizing committee.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                  <h4 className="font-semibold text-base sm:text-lg text-blue-900 mb-2">General Inquiries</h4>
                  <p className="text-sm sm:text-base text-blue-700">nci-tide@msit.edu.in</p>
                </div>
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                  <h4 className="font-semibold text-base sm:text-lg text-blue-900 mb-2">Technical Support</h4>
                  <p className="text-sm sm:text-base text-blue-700">tech-support@msit.edu.in</p>
                </div>
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md sm:col-span-2 lg:col-span-1">
                  <h4 className="font-semibold text-base sm:text-lg text-blue-900 mb-2">Registration</h4>
                  <p className="text-sm sm:text-base text-blue-700">registration@msit.edu.in</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
