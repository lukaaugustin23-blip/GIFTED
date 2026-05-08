import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import HowItWorksPage from './pages/HowItWorksPage'
import ImpactPage from './pages/ImpactPage'
import GetInvolvedPage from './pages/GetInvolvedPage'
import DonatePage from './pages/DonatePage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  const { pathname } = useLocation()
  const isDonate = pathname === '/donate'

  return (
    <>
      <ScrollToTop />
      {!isDonate && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/donate" element={<DonatePage />} />
        </Routes>
      </main>
      {!isDonate && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
