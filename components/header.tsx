"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Calendar, MapPin, Users, FileText, Award, Phone, Mic } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Overview", href: "#overview", icon: <FileText className="w-4 h-4" />, external: false },
    { name: "MSIT", href: "#host-institute", icon: <FileText className="w-4 h-4" />, external: false },
    // { name: "ECE Department", href: "#host-department", icon: <FileText className="w-4 h-4" />, external: false },
    { name: "Call for Papers", href: "#call-for-papers", icon: <FileText className="w-4 h-4" />, external: false },
    { name: "Special Sessions", href: "#special-sessions", icon: <Mic className="w-4 h-4" />, external: false },
    { name: "Keynote Speakers", href: "#keynote-speakers", icon: <Mic className="w-4 h-4" />, external: false },
    { name: "Important Dates", href: "#important-dates", icon: <Calendar className="w-4 h-4" />, external: false },
    { name: "Registration", href: "#registration", icon: <Users className="w-4 h-4" />, external: false },
    { name: "Committees", href: "#committees", icon: <Users className="w-4 h-4" />, external: false },
    { name: "Sponsors", href: "#sponsors", icon: <Award className="w-4 h-4" />, external: false },
    { name: "Contact", href: "#contact", icon: <Phone className="w-4 h-4" />, external: false },
    { name: "Acknowledgments", href: "/acknowledgment", icon: <Award className="w-4 h-4" />, external: true },
  ]

  const handleNavigation = (href: string, external: boolean) => {
    if (external) {
      window.location.href = href
    } else {
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
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100"
          : "bg-white/90 backdrop-blur-sm"
      } rounded-b-xl`}
      style={{
        boxShadow: isScrolled
          ? "0 4px 24px 0 rgba(30, 64, 175, 0.08)"
          : "0 2px 8px 0 rgba(30, 64, 175, 0.04)",
        borderBottomLeftRadius: "1rem",
        borderBottomRightRadius: "1rem",
      }}
    >
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-900 leading-tight tracking-tight drop-shadow-sm">
                NCI-TIDE 2025
              </h1>
              <p className="text-xs sm:text-sm text-blue-600 hidden sm:block font-medium">
                Nov 18-19, 2025 | MSIT, Delhi
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-blue-700 hover:text-blue-900 hover:bg-blue-50 px-2 py-1 text-xs font-medium transition-colors rounded"
                onClick={() => handleNavigation(item.href, item.external)}
              >
                {item.name}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-blue-700 hover:text-blue-900 hover:bg-blue-50">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div>
                    <h2 className="text-lg font-bold text-blue-900">NCI-TIDE 2025</h2>
                    <p className="text-sm text-blue-600">Nov 18-19, 2025</p>
                  </div>
                </div>
              </div>

              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="w-full justify-start text-blue-700 hover:text-blue-900 hover:bg-blue-50 px-4 py-3 text-base font-medium rounded-md"
                    onClick={() => handleNavigation(item.href, item.external)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </Button>
                ))}
              </nav>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Conference Details</h3>
                <div className="space-y-2 text-sm text-blue-700">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>November 18-19, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>MSIT, Delhi</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
