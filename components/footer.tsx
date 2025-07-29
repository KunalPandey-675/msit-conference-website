"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "About Conference", href: "#overview" },
    { name: "Call for Papers", href: "#call-for-papers" },
    { name: "Registration", href: "#registration" },
    { name: "Important Dates", href: "#important-dates" },
    { name: "Conference Tracks", href: "#conference-tracks" },
    { name: "Committees", href: "#committees" },
  ]

  const importantLinks = [
    { name: "Paper Submission", href: "#", external: true },
    { name: "Registration Portal", href: "#", external: true },
    { name: "Conference Proceedings", href: "#", external: true },
    { name: "Accommodation", href: "#", external: true },
    { name: "Travel Information", href: "#", external: true },
    { name: "Visa Information", href: "#", external: true },
  ]

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
    { name: "YouTube", icon: <Youtube className="w-5 h-5" />, href: "#" },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        const headerHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Conference Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">NCI-TIDE-MSIT 2025</h3>
                  <p className="text-sm sm:text-base text-blue-200">Nov 13-14, 2025</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed mb-4 sm:mb-6">
                National Conference on Innovation in Technology and Industrial Development in Engineering, organized by
                the Department of ECE, MSIT.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0" />
                  <span className="text-blue-100">MSIT, Janakpuri, New Delhi</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0" />
                  <span className="text-blue-100">+91-11-2559-1610</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0" />
                  <span className="text-blue-100">nci-tide@msit.edu.in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm sm:text-base text-blue-100 hover:text-white transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Important Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                {importantLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-blue-100 hover:text-white transition-colors duration-200 flex items-center gap-2"
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                    >
                      {link.name}
                      {link.external && <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Stay Updated</h4>
              <p className="text-sm sm:text-base text-blue-100 mb-4 sm:mb-6 leading-relaxed">
                Subscribe to our newsletter for the latest conference updates and announcements.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white/40 text-sm sm:text-base"
                />
                <Button className="w-full bg-white text-blue-900 hover:bg-blue-50 text-sm sm:text-base py-2 sm:py-3">
                  Subscribe
                </Button>
              </div>

              {/* Social Media Links */}
              <div className="mt-6 sm:mt-8">
                <h5 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Follow Us</h5>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center text-blue-200 hover:text-white hover:bg-white/20 transition-all duration-200"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Bottom Footer */}
        <div className="py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-center sm:text-left">
              <p className="text-sm sm:text-base text-blue-100">© 2025 NCI-TIDE-MSIT. All rights reserved.</p>
              <p className="text-xs sm:text-sm text-blue-200 mt-1">
                Organized by Department of Electronics and Communication Engineering, MSIT
              </p>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                Code of Conduct
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
