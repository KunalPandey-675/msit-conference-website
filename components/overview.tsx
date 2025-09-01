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

        {/* Host Institute Information */}
        <div id="host-institute" className="mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white border-blue-200 shadow-lg">
              <CardHeader className="text-center pb-4">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4 text-xs sm:text-sm px-3 py-1 mx-auto w-fit">
                  Host Institute
                </Badge>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-blue-900">
                  Maharaja Surajmal Institute of Technology (MSIT)
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 sm:px-8 lg:px-12">
                <div className="prose prose-blue max-w-none">
                  <p className="text-base sm:text-lg text-blue-700 leading-relaxed mb-4">
                    Maharaja Surajmal Institute of Technology (MSIT), located in Janakpuri, New Delhi, is a premier private engineering institution established in 2001. Affiliated with Guru Gobind Singh Indraprastha University (GGSIPU) and approved by the All India Council for Technical Education (AICTE), MSIT has earned a reputation for academic excellence and robust infrastructure.
                  </p>
                  <ul className="list-disc pl-6 text-base sm:text-lg text-blue-700 leading-relaxed mb-4">
                    <li>
                      <strong>Establishment:</strong> Founded in 2001 under the aegis of the Surajmal Memorial Educational Society (SMES).
                    </li>
                    <li>
                      <strong>Accreditations:</strong>
                      <ul className="list-disc pl-6">
                        <li><strong>NAAC:</strong> Accredited with an 'A' grade, valid until September 20, 2027.</li>
                        <li><strong>NBA:</strong> Departments of Computer Science Engineering (CSE), Information Technology (IT), Electronics and Communication Engineering (ECE), and Electrical and Electronics Engineering (EEE) are accredited.</li>
                        <li><strong>ISO:</strong> Certified under ISO 9001:2015 standards.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Academic Programs:</strong> Offers undergraduate Bachelor of Technology (B.Tech) programs in:
                      <ul className="list-disc pl-6">
                        <li>Computer Science and Engineering (CSE)</li>
                        <li>Information Technology (IT)</li>
                        <li>Electronics and Communication Engineering (ECE)</li>
                        <li>Electrical and Electronics Engineering (EEE)</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Faculty:</strong> Comprises highly qualified and experienced educators dedicated to providing quality education and fostering research.
                    </li>
                    <li>
                      <strong>Placements:</strong> MSIT boasts a strong placement record, with students recruited by leading companies such as Google, Microsoft, Adobe, Infosys, Accenture, TCS, Amazon, and Samsung.
                    </li>
                    <li>
                      <strong>Location:</strong> Situated approximately 10 kilometers from Indira Gandhi International Airport, the institute is easily accessible and well-connected.
                    </li>
                    <li>
                      <strong>Significant Achievements:</strong>
                      <ol className="list-decimal pl-6">
                        <li>‘A’ Grade by Joint Assessment Committee, GGSIPU & Govt. of NCT of Delhi</li>
                        <li>Ranked 3rd Position in Delhi State in Top 175 Engineering Institutes of India and Ranked 1st in Delhi in Top 125 Private Engineering Colleges by “Times All India Times Engineering Institutes Ranking Survey 2024”.</li>
                        <li>Ranked 39th position in Top 70 Engineering Institutes and ranked 1st in Delhi State in Placement Category by “Times All India Engineering Institutes Ranking Survey 2024”.</li>
                        <li>Conferred with “Engineering Education Excellence Award 2021” by the Institute of Engineers (India), 26-28 Dec. 2021</li>
                        <li>“Outstanding Technical Institution Award” by NITTTR Chandigarh on Sept 07, 2015</li>
                        <li>Diamond Eye Award for quality commitment and excellence in education from OMAC, Paris in 2015</li>
                        <li>NIRF India Rankings 2017 and 2018: Engineering (Rank-Band: 151-200), NIRF India Rankings 2020: Engineering (Rank Band: 251-300), NIRF India Rankings 2021: Engineering (Rank Band: 251-300) and NIRF India Rankings 2024: Engineering (Rank Band: 200-300).</li>
                        <li>Highly Qualified & Experienced Faculty with Good SFR and highest Retention.</li>
                        <li>Industry Institute Collaboration (MOU): A financial grant of 18.5 lacs for setting up Center of Excellence Lab in AI, ML and IOT has been approved by ONGC. The lab will be used by the faculty and students for Research / Projects in the Institute.</li>
                        <li>International Collaboration MOU with Wentworth Institute of Technology, Boston, USA. MSIT has successfully organised 2nd International Conference on AI & Applications in association with Wentworth Institute of technology, Boston, USA on 19th and 20th March, 2024. The conference was successful and attended by Researchers, Professor from Boston, USA and UK.</li>
                      </ol>
                    </li>
                  </ul>
                  <p className="text-base sm:text-lg text-blue-700 leading-relaxed mb-2">
                    For more detailed information, please visit the official MSIT website:{" "}
                    <a
                      href="https://www.msit.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-blue-700 hover:text-blue-900"
                    >
                      www.msit.in
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ECE Department Information */}
        <div id="host-department" className="mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white border-blue-200 shadow-lg">
              <CardHeader className="text-center pb-4">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4 text-xs sm:text-sm px-3 py-1 mx-auto w-fit">
                  Host Department
                </Badge>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-blue-900">
                  Department of Electronics and Communication Engineering
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 sm:px-8 lg:px-12">
                <div className="prose prose-blue max-w-none">
                  <p className="text-base sm:text-lg text-blue-700 leading-relaxed mb-4">
                    Established in 2001, the Department of Electronics and Communication Engineering is committed to delivering quality education and fostering academic excellence. Since its inception, the department has maintained an outstanding academic record and continues to grow in strength and reputation.
                  </p>
                  <p className="text-base sm:text-lg text-blue-700 leading-relaxed mb-4">
                    We are proud to be accredited by the National Board of Accreditation (NBA) and the National Assessment and Accreditation Council (NAAC). The department is also actively associated with professional bodies such as the Indian Society for Technical Education (ISTE), enhancing our academic and professional environment.
                  </p>
                  <p className="text-base sm:text-lg text-blue-700 leading-relaxed mb-4">
                    A major strength of the department lies in its team of highly qualified and dedicated faculty members, who constantly strive to inspire and mentor students towards academic and professional success. The faculty are actively engaged in research and development, with many pursuing doctoral studies in their respective areas of expertise.
                  </p>
                  <p className="text-base sm:text-lg text-blue-700 leading-relaxed">
                    Our state-of-the-art laboratories, equipped with modern instrumentation, provide students with hands-on experience and practical exposure to complement their theoretical learning. In addition to the academic curriculum, we organize industrial visits, workshops, and technical seminars to bridge the gap between industry and academia.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
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