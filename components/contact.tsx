"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, Building } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Address",
      details: ["Maharaja Surajmal Institute of Technology", "C-4, Janakpuri, New Delhi - 110058", "India"],
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Phone",
      details: ["+91-011-45037193", "+91-011-45037193"],
    },
    // {
    //   icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
    //   title: "Email",
    //   details: ["nci-tide@msit.edu.in", "conference@msit.edu.in", "info@msit.edu.in"],
    // },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
    },
  ]

  const keyContacts = [
    {
      name: "Prof. (Dr.) Neeru Rathee",
      title: "Convener",
      // email: "neeru.rathee@msit.edu.in",
      // phone: "+91-98765-43210",
    },
    {
      name: "Prof. (Dr.) Pradeep Sangwan",
      title: "Co-Convener",
      // email: "pradeep.sangwan@msit.edu.in",
      // phone: "+91-98765-43211",
    },
    {
      name: "Prof. (Dr.) Puneet Azad",
      title: "Co-Convener",
      // email: "puneet.azad@msit.edu.in",
      // phone: "+91-98765-43212",
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4 sm:mb-6 text-xs sm:text-sm px-3 py-1">
            Contact Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">Get in Touch</h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed px-4">
            Have questions about NCI-TIDE-MSIT 2025? We're here to help. Reach out to us for any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          {/* Contact Form */}
          <Card className="bg-white border-blue-200 shadow-lg">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-2xl sm:text-3xl text-blue-900 flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                  <Send className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm sm:text-base font-medium text-blue-900">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    className="border-blue-200 focus:border-blue-500 text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm sm:text-base font-medium text-blue-900">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    className="border-blue-200 focus:border-blue-500 text-sm sm:text-base"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm sm:text-base font-medium text-blue-900">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="border-blue-200 focus:border-blue-500 text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm sm:text-base font-medium text-blue-900">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="Enter message subject"
                  className="border-blue-200 focus:border-blue-500 text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm sm:text-base font-medium text-blue-900">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message here..."
                  rows={5}
                  className="border-blue-200 focus:border-blue-500 text-sm sm:text-base resize-none"
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base py-2 sm:py-3">
                <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-white border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">{info.icon}</div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 sm:mb-3">{info.title}</h3>
                      <div className="space-y-1 sm:space-y-2">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm sm:text-base text-blue-700 leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Contacts */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-8 sm:mb-12">Key Contacts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {keyContacts.map((contact, index) => (
              <Card
                key={index}
                className="bg-white border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Building className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2">{contact.name}</h4>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-3 sm:mb-4 text-xs sm:text-sm">
                    {contact.title}
                  </Badge>
                  <div className="space-y-1 sm:space-y-2">
                    {/* <p className="text-sm sm:text-base text-blue-700">{contact.email}</p>
                    <p className="text-sm sm:text-base text-blue-700">{contact.phone}</p> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map and Directions */}
        <Card className="bg-gradient-to-r from-blue-900 to-purple-900 text-white border-0 shadow-2xl">
          <CardContent className="p-6 sm:p-8 lg:p-12">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Visit Our Campus</h3>
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                MSIT is conveniently located in Janakpuri, New Delhi, with easy access to public transportation and
                major landmarks.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white/10 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">How to Reach</h4>
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <p>
                    <strong>By Metro:</strong> Janakpuri West Metro Station (Blue Line) - 5 min walk
                  </p>
                  <p>
                    <strong>By Bus:</strong> Multiple DTC bus routes available
                  </p>
                  <p>
                    <strong>By Car:</strong> Ample parking space available on campus
                  </p>
                  <p>
                    <strong>From Airport:</strong> 45 minutes via Delhi Metro or taxi
                  </p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Nearby Landmarks</h4>
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <p>• Janakpuri District Centre - 2 km</p>
                  <p>• Pacific Mall - 3 km</p>
                  <p>• Rajouri Garden Metro Station - 4 km</p>
                  <p>• IGI Airport - 15 km</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-6 sm:mt-8">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 text-sm sm:text-base py-2 sm:py-3 px-6 sm:px-8">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View on Google Maps
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
