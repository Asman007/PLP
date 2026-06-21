import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import ProductDetails from './components/ProductDetails'
import Downloads from './components/Downloads'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  // Activate scroll-reveal animations for feature, download, and team cards
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <ProductDetails />
        <Downloads />
      </main>
      <Footer />
    </>
  )
}
