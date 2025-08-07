"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import clsx from "clsx"

interface ImageGridSectionProps {
  title: string
}

export function ImageGridSection({ title }: ImageGridSectionProps) {
   const totalVisible = 6

   const images = [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
      "/images/5.jpg",
      "/images/6.jpg",
      "/images/7.jpg",
      "/images/8.jpg",
      "/images/9.jpg",
      "/images/10.jpg",
   ]

   const getRandomImage = (exclude: string[]) => {
      const available = images.filter((img) => !exclude.includes(img))
      return available[Math.floor(Math.random() * available.length)]
   }

   const [visibleImages, setVisibleImages] = useState<string[]>([])

   useEffect(() => {
      // Initial setup
      const initialImages = [...images].sort(() => 0.5 - Math.random()).slice(0, totalVisible)
      setVisibleImages(initialImages)

      const interval = setInterval(() => {
         setVisibleImages((prevImages) => {
         const indexToUpdate = Math.floor(Math.random() * totalVisible)
         const newImage = getRandomImage(prevImages)

         const updated = [...prevImages]
         updated[indexToUpdate] = newImage
         return updated
         })
      }, 1000) // update one image every second

      return () => clearInterval(interval)
   }, [])

   return (
      <section className="bg-gradient-to-b from-white to-blue-50">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">{title}</h2>
            <p className="text-base sm:text-lg text-blue-700 max-w-2xl mx-auto">
               A visual tribute to the ideas and tech shaping the future.
            </p>
         </div>

         {/* Grid: 3x2 mobile, 2x3 desktop */}
         <div className="grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 gap-4">
            {visibleImages.map((src, index) => (
               <Card
               key={index}
               className="overflow-hidden hover:scale-[1.03] shadow-md transition duration-300"
               >
               <CardContent className="p-0">
                  <img
                     key={src} // force re-render when src changes
                     src={src}
                     alt={`Image ${index}`}
                     className={clsx(
                     "w-full h-full object-cover aspect-video",
                     
                     
                     )}
                     onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
                  />
               </CardContent>
               </Card>
            ))}
         </div>
         </div>
      </section>
   )
}
