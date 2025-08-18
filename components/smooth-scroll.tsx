"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function SmoothScrollProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Enable smooth scrolling for the entire page
    const lenis = () => {
      let currentScroll = 0
      let targetScroll = 0
      const ease = 0.1

      const updateScroll = () => {
        targetScroll = window.pageYOffset
        currentScroll += (targetScroll - currentScroll) * ease
        
        if (Math.abs(targetScroll - currentScroll) > 0.1) {
          window.scrollTo(0, currentScroll)
          requestAnimationFrame(updateScroll)
        }
      }

      // Override default scroll behavior
      let isScrolling = false
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault()
        targetScroll += e.deltaY
        targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight))
        
        if (!isScrolling) {
          isScrolling = true
          requestAnimationFrame(() => {
            updateScroll()
            isScrolling = false
          })
        }
      }

      document.addEventListener("wheel", handleWheel, { passive: false })
      
      return () => {
        document.removeEventListener("wheel", handleWheel)
      }
    }

    // Add CSS for smooth scrolling
    const style = document.createElement("style")
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      * {
        scroll-behavior: smooth;
      }
    `
    document.head.appendChild(style)

    // Add entrance animations for sections
    const animateOnScroll = () => {
      const sections = document.querySelectorAll("section")
      
      sections.forEach((section, index) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
              once: false,
            },
          }
        )

        // Add stagger animation for cards within sections
        const cards = section.querySelectorAll("[class*='Card'], .card, [class*='card']")
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            {
              opacity: 0,
              y: 40,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          )
        }

        // Add animation for buttons
        const buttons = section.querySelectorAll("button, .button, [class*='Button']")
        if (buttons.length > 0) {
          gsap.fromTo(
            buttons,
            {
              opacity: 0,
              scale: 0.8,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
              stagger: 0.1,
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          )
        }
      })

      // Add parallax effect to hero section
      const hero = document.querySelector("#hero, .hero, [class*='hero']")
      if (hero) {
        gsap.to(hero, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
      }
    }

    // Initialize animations after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      animateOnScroll()
    }, 100)

    // Cleanup
    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      if (style.parentNode) {
        style.parentNode.removeChild(style)
      }
    }
  }, [])

  return null
}
