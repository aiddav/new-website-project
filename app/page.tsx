import Header from './components/Header'
import Hero from './components/Hero'
import Logos from './components/Logos'
import WhatWeDo from './components/WhatWeDo'
import HowWeWork from './components/HowWeWork'
import WhoWeAre from './components/WhoWeAre'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Logos />
        <WhatWeDo />
        <HowWeWork />
        <WhoWeAre />
      </main>
      <Footer />
    </div>
  )
}