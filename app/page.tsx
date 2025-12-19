import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import SmartSolutions from '@/components/SmartSolutions'
import BeforeAfter from '@/components/BeforeAfter'
import Portfolio from '@/components/Portfolio'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <section id="how-it-works">
        <Process />
      </section>
      <section id="services">
        <SmartSolutions />
      </section>
      <BeforeAfter />
      <section id="gallery">
        <Portfolio />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
