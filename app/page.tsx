import AboutUs from '@/components/about-us'
import CaseStudies from '@/components/case-studies'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import OurServices from '@/components/our-services'
import Partners from '@/components/partners'
import Stats from '@/components/stats'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="*:py-20">
        <Hero />
        <AboutUs />
        <Stats />
        <OurServices />
        <CaseStudies />
        <Partners />
        <CTA />
      </div>
      <Footer />
    </main>
  )
}
