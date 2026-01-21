import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import TransportServices from './pages/TransportServices'
import WarehousingServices from './pages/WarehousingServices'
import CommercialSpaces from './pages/CommercialSpaces'
import TrainingSpaces from './pages/TrainingSpaces'
import Equipment from './pages/Equipment'
import History from './pages/History'
import Contact from './pages/Contact'
import RequestQuote from './pages/RequestQuote'
import PrivacyPolicy from './pages/PrivacyPolicy'

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="kuljetuspalvelut" element={<TransportServices />} />
          <Route path="varastointipalvelut" element={<WarehousingServices />} />
          <Route path="liiketila" element={<CommercialSpaces />} />
          <Route path="koulutus" element={<TrainingSpaces />} />
          <Route path="kalusto" element={<Equipment />} />
          <Route path="historia" element={<History />} />
          <Route path="yhteystiedot" element={<Contact />} />
          <Route path="ota-yhteytta" element={<RequestQuote />} />
          <Route path="tietosuojaseloste" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
