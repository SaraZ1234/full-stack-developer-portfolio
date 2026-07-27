import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Projects } from '@/components/Projects'
import { Testimonials } from '@/components/Testimonials'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import {WhyChooseMe} from '@/components/WhyChooseMe'
import {IndustriesSection} from '@/components/IndustriesSection'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <WhyChooseMe/>
        <IndustriesSection/>
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
