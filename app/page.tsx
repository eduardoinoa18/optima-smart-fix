import Header from '@/components/Header'
import Hero from '@/components/Hero'
import BeforeAfter from '@/components/BeforeAfter'
import SmartSolutions from '@/components/SmartSolutions'
import Portfolio from '@/components/Portfolio'
import Process from '@/components/Process'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BeforeAfter />
      <SmartSolutions />
      <Portfolio />
      <Process />
      <ContactForm />
      <Footer />
    </main>
  )
}
