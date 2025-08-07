import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Overview } from "@/components/overview"
import { CallForPapers } from "@/components/call-for-papers"
import { ImportantDates } from "@/components/important-dates"
import { ConferenceTracks } from "@/components/conference-tracks"
import { Registration } from "@/components/registration"
import { Sponsors } from "@/components/sponsors"
import { Committees } from "@/components/committees"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import CMTAcknowledgment  from "../components/CMTAcknowledgment"
import { ImageGridSection } from "@/components/ImageGridSection"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Overview />
      <CallForPapers />
      <ConferenceTracks />
      <ImageGridSection title="Technology in Frames" />
      <ImportantDates />
      <Registration />
      <Sponsors />
      <Committees />
      <Contact />
      <CMTAcknowledgment />
      <Footer />
    </main>
  )
}
