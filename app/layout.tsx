import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import { SmoothScrollProvider } from "@/components/smooth-scroll"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title:
    "NCI-TIDE 2025 | National Conference on Integrating Technologies, Ideas and Disciplines for Engineering Innovation (NCI-TIDE 2025)",
  description:
    "Join us for NCI-TIDE 2025, a premier National Conference on Integrating Technologies, Ideas and Disciplines for Engineering Innovation (NCI-TIDE 2025), organized by the Department of Electronics and Communication Engineering, MSIT on November 13-14, 2025.",
  keywords:
    "NCI-TIDE, MSIT, conference, engineering, technology, innovation, industrial development, electronics, communication",
  authors: [{ name: "MSIT ECE Department" }],
  openGraph: {
    title: "NCI-TIDE 2025",
    description: "National Conference on Integrating Technologies, Ideas and Disciplines for Engineering Innovation (NCI-TIDE 2025)",
    url: "https://nci-tide-msit-2025.vercel.app",
    siteName: "NCI-TIDE 2025",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "NCI-TIDE 2025 Conference",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NCI-TIDE 2025",
    description: "National Conference on Integrating Technologies, Ideas and Disciplines for Engineering Innovation (NCI-TIDE 2025)",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrollProvider />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
