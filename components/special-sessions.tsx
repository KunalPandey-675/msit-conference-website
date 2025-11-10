"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  CheckCircle, 
  Award, 
  Send, 
  Download,
  Calendar,
  Mail,
  FileText,
  Star
} from "lucide-react"

export function SpecialSessions() {
  const selectionCriteria = [
    "All the proposals will be carefully reviewed by the conference TPC committee and will be critically analysed before final selection.",
    "The person(s) conducting the special session will be entitled to be Session chair(s) for their respective sessions. However, there can be no more than two persons hosting the session.",
    "Session chair(s) must furnish the details of the reviewers (atleast 9-10) in the template, who will be reviewing the manuscripts.",
    "There must be at least 8 papers registered in the session for conducting special session."
  ]

  const sessionChairRoles = [
    "Session chairs will be responsible for inviting papers and getting reviews on them (at least two).",
    "Session chairs must ensure a good quality of submissions as the TPC committee may intervene and alter the decisions of Session chairs in case of a poor quality paper.",
    "Session chairs have to ensure the registration of the selected manuscripts at least 20 days before the conference date.",
    "All the submissions have to be made through CMT portal and the Session chairs must keep a track of the paper ids of the submissions."
  ]

  const benefits = [
    "Session chairs will be given a certificate.",
    "Session chairs will be given a free complementary registration as an attendee at the conference.",
    "Session chairs will be given local hospitality and honorarium."
  ]

  return (
    <section id="special-sessions" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4 sm:mb-6 text-xs sm:text-sm px-3 py-1">
            Special Sessions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            Call for Special Sessions
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed px-4">
            NCI-TIDE 2025 invites proposals to organize Special Sessions related to the conference theme and key topics within the conference scope.
          </p>
        </div>

        {/* Submission Info */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <Card className="bg-gradient-to-r from-blue-900 to-purple-900 text-white border-0 shadow-2xl">
            <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 sm:p-4 bg-white/20 rounded-lg">
                  <Send className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Submit Your Proposal</h3>
              </div>

              <div className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 max-w-3xl mx-auto leading-relaxed">
                <p className="mb-4">
                  Please send your special session proposals in the template to{" "}
                  <span className="font-semibold text-yellow-300">ncitide2025@msit.in</span>
                </p>
                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-yellow-300" />
                    <span className="font-semibold text-yellow-300">Important Date</span>
                  </div>
                  <p className="text-lg font-bold">Last date for special session proposal submission: September 22, 2025</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-lg mx-auto">
                <a
                  href="/SpecialSessionProposalTemplate.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-5 text-base font-semibold">
                    <Download className="w-5 mr-2" />
                    Download Template
                  </Button>
                </a>
                <a href="mailto:ncitide2025@msit.in">
                  <Button className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-5 text-base font-semibold">
                    <Mail className="w-5 mr-2" />
                    Send Proposal
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Selection Criteria */}
          <Card className="bg-white border-blue-200 shadow-lg">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-2xl sm:text-3xl text-blue-900 flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                Criteria for Selection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-5">
              {selectionCriteria.map((criteria, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-sm sm:text-base text-blue-700 leading-relaxed">{criteria}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Role of Session Chair */}
          <Card className="bg-white border-blue-200 shadow-lg">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-2xl sm:text-3xl text-blue-900 flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-green-100 rounded-lg">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                Role of Session Chair
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-5">
              {sessionChairRoles.map((role, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-sm sm:text-base text-blue-700 leading-relaxed">{role}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="bg-white border-blue-200 shadow-lg">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-2xl sm:text-3xl text-blue-900 flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-yellow-100 rounded-lg">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                </div>
                Benefits for Session Chair
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  </div>
                  <p className="text-sm sm:text-base text-blue-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="bg-blue-50 border-blue-200 shadow-lg">
          <CardContent className="p-6 sm:p-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 sm:mb-6">
              Need More Information?
            </h3>
            <p className="text-base sm:text-lg text-blue-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              For more information about special sessions or any queries, feel free to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-lg mx-auto">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                <h4 className="font-semibold text-base sm:text-lg text-blue-900 mb-2">Website</h4>
                <a 
                  href="https://www.ncitide-msit.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-blue-700 hover:text-blue-900 underline"
                >
                  www.ncitide-msit.in
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                <h4 className="font-semibold text-base sm:text-lg text-blue-900 mb-2">Email</h4>
                <a 
                  href="mailto:ncitide2025@msit.in"
                  className="text-sm sm:text-base text-blue-700 hover:text-blue-900 underline"
                >
                  ncitide2025@msit.in
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
