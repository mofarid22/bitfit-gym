import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Programs from './components/Programs'
import BmiCalculator from './components/BmiCalculator'
import Plans from './components/Plans'
import JoinForm from './components/JoinForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="wrap">
      <Navbar />
      <main id="top">
        <Hero />
        <Stats />
        <Programs />
        <BmiCalculator />
        <Plans />
        <JoinForm />
      </main>
      <Footer />
    </div>
  )
}
