import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import About from '../components/About'
import Footer from '../components/Footer'
import SettingsForm from '../components/SettingsForm'

function LandingPage() {
  return (
    <div className="page" id="top">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <SettingsForm />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
