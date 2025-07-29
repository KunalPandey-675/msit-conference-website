import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title:
    "NCI-TIDE-MSIT 2025 | National Conference on Innovation in Technology and Industrial Development in Engineering",
  description:
    "Join us for NCI-TIDE-MSIT 2025, a premier national conference on innovation in technology and industrial development in engineering, organized by the Department of Electronics and Communication Engineering, MSIT on November 13-14, 2025.",
  keywords:
    "NCI-TIDE, MSIT, conference, engineering, technology, innovation, industrial development, electronics, communication",
  authors: [{ name: "MSIT ECE Department" }],
  openGraph: {
    title: "NCI-TIDE-MSIT 2025",
    description: "National Conference on Innovation in Technology and Industrial Development in Engineering",
    url: "https://nci-tide-msit-2025.vercel.app",
    siteName: "NCI-TIDE-MSIT 2025",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "NCI-TIDE-MSIT 2025 Conference",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NCI-TIDE-MSIT 2025",
    description: "National Conference on Innovation in Technology and Industrial Development in Engineering",
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
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
