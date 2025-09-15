import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Overview } from "@/components/overview"
import { CallForPapers } from "@/components/call-for-papers"
import { ImportantDates } from "@/components/important-dates"
import { ConferenceTracks } from "@/components/conference-tracks"
import { KeynoteSpeakers } from "@/components/keynote-speakers"
import { Registration } from "@/components/registration"
import { Sponsors } from "@/components/sponsors"
import { Committees } from "@/components/committees"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import CMTAcknowledgment  from "../components/CMTAcknowledgment"
import { ImageGridSection } from "@/components/ImageGridSection"
import { PreviousConferences } from "@/components/PreviousConferences"
import { SpecialSessions } from "@/components/special-sessions"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Overview />
      <CallForPapers />
      <SpecialSessions />
      <ConferenceTracks />
      <KeynoteSpeakers />
      <ImageGridSection title="Technology in Frames" />
      <ImportantDates />
      <Registration />
      <Sponsors />
      <PreviousConferences/>
      <Committees />
      <Contact />
      <CMTAcknowledgment />
      <Footer />
    </main>
  )
}
