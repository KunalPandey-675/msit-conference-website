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
  const patrons = [
    {
      name: "Sh. Kaptan Singh",
      title: "President, SMES, New Delhi",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Ms. Esha Jakhar",
      title: "Sr. Vice President, SMES, New Delhi",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Sh. Y.P.S. Verma",
      title: "Vice President, SMES, New Delhi",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Mr. Ajit Singh Chaudhary",
      title: "Secretary, SMES, New Delhi",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Mr. Raj Pal Solanki",
      title: "Treasurer, SMES, New Delhi",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Sh. S.S. Solanki",
      title: "Joint Secretary, SMES, New Delhi",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Sh. Brahm Pal Singh",
      title: "Patron, SMES, New Delhi",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Sh. Shiv Ram Tewatia",
      title: "Joint Secretary, SMES, New Delhi",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Sh. Karnal Singh",
      title: "IPS, Former Director - Enforcement Directorate",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Prof. Prem Vrat",
      title: "Pro-Chancellor, North Cap University, Gurgaon",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Dr. Tejbir Singh Rana",
      title: "Convener/Member Secretary, SMES, New Delhi",
      image: "/placeholder-user.jpg",
    },
  ]

  const OrganizingChair = [
    {
      name: "Prof. Archana Balyan",
      title: "Organizing Chair",
      image: "/placeholder-user.jpg",
      email: "archana.balyan@msit.in",
    }
  ]
  const leadership = [
    {
      name: "Prof. (Dr.) Neeru Rathee",
      title: "Convener & Professor ECE Dept",
      department: "Department of ECE, MSIT",
      image: "/placeholder-user.jpg",
      email: "neeru_rathee@msit.in",
    },
    {
      name: "Prof. (Dr.) Pradeep Sangwan",
      title: "Co-Convener & Professor ECE Dept",
      department: "Department of ECE, MSIT",
      image: "/placeholder-user.jpg",
      email: "sangwanpardeep@msit.in",
    },
    {
      name: "Prof. (Dr.) Puneet Azad",
      title: "Co-Convener & Professor ECE Dept",
      department: "Department of ECE, MSIT",
      image: "/placeholder-user.jpg",
      email: "puneet.azad@msit.in",
    },
  ]

  const committees = [
    {
      name: "Technical Program Committee",
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "blue",
      members: [
        "Prof. (Dr.) Neeru Rathee - Professor, ECE Dept",
        "Prof. (Dr.) Pradeep Sangwan - Professor, ECE Dept",
        "Prof. (Dr.) Puneet Azad - Professor, ECE Dept",
        "Dr. Sudesh Pahal - Associate Professor, ECE Dept",
        "Dr. Meena Rao - Associate Professor, ECE Dept",
        "Dr. Shaifali M. Arora - Associate Professor, ECE Dept",
        "Dr. Aman Dahiya - Associate Professor, ECE Dept",
        "Dr. Deepti",
      ],
    },
    {
      name: "Finance Committee",
      icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "green",
      members: ["Dr. Neetu - Assistant Professor, ECE Dept", "Dr. Suman Lata - Assistant Professor, ECE Dept"],
    },
    {
      name: "Publication Committee",
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "purple",
      members: ["Prof. Meena Rao - Associate Professor, ECE Dept", "Dr. Neha Dhama - Assistant Professor, ECE Dept", "Dr. Sakshi Rajput - Assistant Professor, ECE Dept"],
    },
    {
      name: "Publicity Committee",
      icon: <Megaphone className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "orange",
      members: ["Dr. Aman Dahiya - Associate Professor, ECE Dept", "Ms. Jasmine Chikkara - Assistant Professor, ECE Dept"],
    },
    {
      name: "Design and Printing Committee",
      icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "pink",
      members: ["Dr. Sudesh Pahal - Associate Professor, ECE Dept", "Mr. Deepak Goyal - Assistant Professor, ECE Dept"],
    },
    {
      name: "Website Committee",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "indigo",
      members: ["Dr. Shaifali M. Arora - Associate Professor, ECE Dept", "Dr. Upma Singh - Assistant Professor, ECE Dept"],
    },
    {
      name: "Reception/Registration Committee",
      icon: <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "teal",
      members: ["Dr. Dinesh Sheoran - Associate Professor, ECE Dept", "Dr. Anjali Balyan - Assistant Professor, ECE Dept", "Ms. Prinkle Talan  - Assistant Professor, ECE Dept", "Dr. Suman Lata - Assistant Professor, ECE Dept"],
    },
    {
      name: "Hospitality Committee",
      icon: <Coffee className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "amber",
      members: ["Dr. Nishtha - Assistant Professor, ECE Dept", "Dr. Anjali Baliyan - Assistant Professor, ECE Dept", "Ms. Vishakha Tomar - Assistant Professor, ECE Dept"],
    },
    {
      name: "Sponsorship Committee",
      icon: <Building className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "emerald",
      members: ["Dr. Garima - Assistant Professor, ECE Dept", "Dr. Neelam Barak - Assistant Professor, ECE Dept"],
    },
    {
      name: "Stage Committee",
      icon: <Stage className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "red",
      members: ["Dr. Deepti - Assistant Professor, ECE Dept", "Dr. Himani - Assistant Professor, ECE Dept", "Ms. Sonia - Assistant Professor, ECE Dept"],
    },
    {
      name: "Collaboration Committee",
      icon: <Network className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "violet",
      members: ["Dr. Neelam Nehra - Assistant Professor, ECE Dept", "Dr. Geetanjali Sharma - Assistant Professor, ECE Dept"],
    },
  ]

  // Add this data above Committees function
  const advisoryCommittee = [
    {
      name: "Dr. Sanjay Yadav",
      affiliation: "Chief Scientist (Former), National Physical Laboratory",
      email: "",
      referredBy: ""
    },
    {
      name: "Prof. Aarti Singh",
      affiliation: "Carnegie Mellon University, Pittsburgh, Pennsylvania",
      email: "",
      referredBy: ""
    },
    {
      name: "Prof. Deepak Kumar",
      affiliation: "Professor, IIT Delhi",
      email: "",
      referredBy: ""
    },
    {
      name: "Prof. Bharat Singh Rajpurohit",
      affiliation: "Professor, IIT Jodhpur",
      email: "",
      referredBy: ""
    },
    {
      name: "Prof. Rahul Vaish",
      affiliation: "Professor, IIT Mandi",
      email: "",
      referredBy: ""
    },
    {
      name: "Prof. Brahmjit Singh",
      affiliation: "Professor, NIT Kurukshetra",
      email: "",
      referredBy: ""
    },
    {
      name: "Prof. Alok Prakash Mittal",
      affiliation: "Emeritus Professor, NSUT",
      email: "",
      referredBy: ""
    },
    {
      name: "Prof. Ashok De",
      affiliation: "Professor, DTU",
      email: "",
      referredBy: ""
    },
    {
      name: "Prof. Narender Kumar",
      affiliation: "Professor, DTU",
      email: "",
      referredBy: ""
    },
    {
      name: "Prof. Navin Rajpal",
      affiliation: "Professor, GGSIPU",
      email: "",
      referredBy: ""
    },
    {
      name: "Prof. Amit Prakash",
      affiliation: "Professor, GGSIPU",
      email: "",
      referredBy: ""
    },
    {
      name: "Prof. Vijender Singh",
      affiliation: "Professor, NSUT",
      email: "",
      referredBy: ""
    },
    {
      name: "Dr. Sushil Chandra",
      affiliation: "Dean and Professor, School of Psychology and Education and Former Scientist ‘G’, DRDO",
      email: "",
      referredBy: ""
    },
    {
      name: "Mr. Suchit Lepcha",
      affiliation: "System Engineering Manager, NXP Semiconductors",
      email: "",
      referredBy: ""
    },
    {
      name: "Mr. Atul Bhargava",
      affiliation: "Sr. Group Manager, ST Microelectronics",
      email: "",
      referredBy: ""
    },
    {
      name: "Prof. H.S. Rawat",
      affiliation: "Director T&P, SMES",
      email: "",
      referredBy: ""
    },
    {
      name: "Dr. A K Balyan",
      affiliation: "Former MD & CEO, Petronet LNG Ltd; Former CEO (Oil & Gas), Reliance Group; Former Director BD/HR, ONGC",
      email: "",
      referredBy: ""
    },
    {
      name: "Prof. R. S. Nirjhar",
      affiliation: "Former Chairman of the All India Council for Technical Education (AICTE)",
      email: "",
      referredBy: ""
    },
    {
      name: "Prof. K. P. Singh",
      affiliation: "Former Vice-Chancellor of Mahatma Jyotiba Phule Rohilkhand University (MJPRU), Bareilly, Uttar Pradesh",

      email: "",
      referredBy: ""
    }, {
      name: "K. P. Chaudhary Sir",
      affiliation: "Former Chief Scientist NPL",
      
      email: "",
      referredBy: ""
    }, {
      name: "Dr N.K.Gupta",
      affiliation: "National Executive Council Member, ISTE, New Delhi",
      email: "",
      referredBy: ""
    }
  ];



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

  // Extract organizing chair from leadership
  const organizingChair = leadership.find((l) => l.title === "Organizing Chair")
  const otherLeadership = leadership.filter((l) => l.title !== "Organizing Chair")

  return (
    <section id="committees" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Patrons Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-8 sm:mb-12">
            Patrons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {patrons.map((patron, index) => (
              <Card
                key={index}
                className="bg-white border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <Avatar className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 border-2 border-blue-200">
                    <AvatarImage src={patron.image || "/placeholder.svg"} alt={patron.name} />
                    <AvatarFallback className="text-base sm:text-lg font-bold bg-blue-100 text-blue-600">
                      {getInitials(patron.name)}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2">{patron.name}</h4>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-2 sm:mb-3 text-xs sm:text-sm">
                    {patron.title}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4 sm:mb-6 text-xs sm:text-sm px-3 py-1">
            Organizing Team
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            Organizing Committee
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed px-4">
            Meet the dedicated team of faculty and staff members organizing NCI-TIDE 2025
          </p>
        </div>



        {/* Organizing Chair Section */}
        {OrganizingChair.length > 0 && (
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-8 sm:mb-12">
              Organizing Chair
            </h3>
            <div className="flex justify-center">
              <Card className="bg-white border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full max-w-sm">
                <CardContent className="p-4 sm:p-6 text-center">
                  <Avatar className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 border-2 border-blue-200">
                    <AvatarImage src={OrganizingChair[0].image || "/placeholder.svg"} alt={OrganizingChair[0].name} />
                    <AvatarFallback className="text-base sm:text-lg font-bold bg-blue-100 text-blue-600">
                      {getInitials(OrganizingChair[0].name)}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2">{OrganizingChair[0].name}</h4>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-2 sm:mb-3 text-xs sm:text-sm">
                    {OrganizingChair[0].title}
                  </Badge>
                  <p className="text-xs sm:text-sm text-blue-600">{OrganizingChair[0].email}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Leadership Team */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-8 sm:mb-12">
            Conference Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {otherLeadership.map((leader, index) => (
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  {committee.members.map((member, memberIndex) => {
                    const [name, designation] = member.split(' - ');
                    return (
                      <div key={memberIndex} className="flex items-start gap-2 sm:gap-3">
                        <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-200 mt-1">
                          <AvatarImage src="/placeholder-user.jpg" alt={name} />
                          <AvatarFallback className="text-xs sm:text-sm font-medium bg-gray-100 text-gray-600">
                            {getInitials(name)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-sm sm:text-base text-blue-900 font-semibold">{name}</span>
                          <span className="text-xs sm:text-sm text-blue-600">{designation}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advisory Committee Section */}
        <div className="mt-24">

          <h2 className="text-3xl  sm:text-4xl lg:text-5xl text-center font-bold text-blue-900 mb-7 sm:mb-16">
            Advisory Committee
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {advisoryCommittee.map((member, index) => (
              <Card
                key={index}
                className="bg-white border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <Avatar className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 border-2 border-blue-200">
                    <AvatarImage src="/placeholder-user.jpg" alt={member.name} />
                    <AvatarFallback className="text-base sm:text-lg font-bold bg-blue-100 text-blue-600">
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2">{member.name}</h4>
                  <p className="text-xs sm:text-sm text-blue-700 mb-1">{member.affiliation}</p>
                  {member.email && <p className="text-xs sm:text-sm text-blue-600">{member.email}</p>}
                  {member.referredBy && member.referredBy !== "-" && (
                    <p className="text-xs sm:text-sm text-gray-500">Referred by: {member.referredBy}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
