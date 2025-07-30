"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Users, GraduationCap, Building, Globe } from "lucide-react"

export function Registration() {
  const registrationCategories = [
    {
      category: "Students",
      icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "blue",
      earlyBird: "₹2,000",
      regular: "₹2,500",
      features: [
        "Access to all technical sessions",
        "Conference kit and materials",
        "Lunch and refreshments",
        "Certificate of participation",
        "Networking opportunities",
      ],
    },
    {
      category: "Academicians",
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "green",
      earlyBird: "₹3,500",
      regular: "₹4,000",
      features: [
        "Access to all technical sessions",
        "Conference proceedings",
        "Conference kit and materials",
        "Lunch and refreshments",
        "Certificate of participation",
        "Networking dinner",
      ],
    },
    {
      category: "Industry Professionals",
      icon: <Building className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "purple",
      earlyBird: "₹5,000",
      regular: "₹6,000",
      features: [
        "Access to all technical sessions",
        "Conference proceedings",
        "Premium conference kit",
        "Lunch and refreshments",
        "Certificate of participation",
        "Networking dinner",
        "Industry exhibition access",
      ],
    },
    {
      category: "International Delegates",
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "orange",
      earlyBird: "$150",
      regular: "$200",
      features: [
        "Access to all technical sessions",
        "Conference proceedings",
        "Premium conference kit",
        "Lunch and refreshments",
        "Certificate of participation",
        "Networking dinner",
        "Industry exhibition access",
        "Welcome reception",
      ],
    },
  ]

  const registrationProcess = [
    "Fill the online registration form",
    "Upload required documents",
    "Make payment through secure gateway",
    "Receive confirmation email",
    "Download registration certificate",
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  const getBorderColor = (color: string) => {
    const colorMap = {
      blue: "border-blue-200",
      green: "border-green-200",
      purple: "border-purple-200",
      orange: "border-orange-200",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section id="registration" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4 sm:mb-6 text-xs sm:text-sm px-3 py-1">
            Registration
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            Conference Registration
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed px-4">
            Join us at NCI-TIDE-MSIT 2025 and be part of the premier engineering innovation conference
          </p>
        </div>

        {/* Registration Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {registrationCategories.map((category, index) => (
            <Card
              key={index}
              className={`bg-white ${getBorderColor(category.color)} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full`}
            >
              <CardHeader className="text-center pb-4 sm:pb-6">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-r ${getColorClasses(category.color)} p-4 sm:p-5 text-white`}
                >
                  {category.icon}
                </div>
                <CardTitle className="text-xl sm:text-2xl text-blue-900">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col h-full">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="mb-2 sm:mb-3">
                    <span className="text-xs sm:text-sm text-blue-600 font-medium">Early Bird (Till Nov 8)</span>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-900">{category.earlyBird}</div>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-gray-600">Regular (Till Nov 10)</span>
                    <div className="text-lg sm:text-xl font-semibold text-gray-700">{category.regular}</div>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3 flex-1">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-blue-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className={`w-full mt-4 sm:mt-6 bg-gradient-to-r ${getColorClasses(category.color)} text-white hover:shadow-lg transition-all duration-300 text-sm sm:text-base py-2 sm:py-3`}
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Registration Process and Important Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <Card className="bg-white border-blue-200 shadow-lg">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-2xl sm:text-3xl text-blue-900 flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                Registration Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              {registrationProcess.map((step, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-sm sm:text-base text-blue-700 leading-relaxed pt-1 sm:pt-2">{step}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900 to-purple-900 text-white">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Important Information</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">Early Bird Discount</h4>
                  <p className="text-xs sm:text-sm text-blue-100">
                    Register before November 8, 2025 to avail special pricing
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">Group Registration</h4>
                  <p className="text-xs sm:text-sm text-blue-100">
                    Special discounts available for groups of 5 or more
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">Payment Methods</h4>
                  <p className="text-xs sm:text-sm text-blue-100">Credit/Debit cards, Net Banking, UPI accepted</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">Cancellation Policy</h4>
                  <p className="text-xs sm:text-sm text-blue-100">
                    50% refund till November 5, 2025. No refund thereafter
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact for Registration */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <Card className="bg-blue-50 border-blue-200 shadow-lg">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 sm:mb-6">
                Need Help with Registration?
              </h3>
              <p className="text-base sm:text-lg text-blue-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                Our registration team is here to assist you with any queries regarding the registration process,
                payment, or special requirements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                  <h4 className="font-semibold text-base sm:text-lg text-blue-900 mb-2">Registration Helpdesk</h4>
                  {/* <p className="text-sm sm:text-base text-blue-700">registration@msit.in</p> */}
                  <p className="text-sm sm:text-base text-blue-700">+91-011-45037193</p>
                </div>
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                  <h4 className="font-semibold text-base sm:text-lg text-blue-900 mb-2">Payment Support</h4>
                  {/* <p className="text-sm sm:text-base text-blue-700">payments@msit.edu.in</p> */}
                  <p className="text-sm sm:text-base text-blue-700">+91-011-45037193</p>
                </div>
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md sm:col-span-2 lg:col-span-1">
                  <h4 className="font-semibold text-base sm:text-lg text-blue-900 mb-2">Technical Support</h4>
                  {/* <p className="text-sm sm:text-base text-blue-700">tech-support@msit.edu.in</p> */}
                  <p className="text-sm sm:text-base text-blue-700">+91-011-45037193</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
