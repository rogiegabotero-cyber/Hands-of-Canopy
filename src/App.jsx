import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { HowWeHelp } from './pages/HowWeHelp'
import { WhatWeAccept } from './pages/WhatWeAccept'
import { WaysToHelp } from './pages/WaysToHelp'
import { Contact } from './pages/Contact'
import { PlaceholderLegalPage } from './pages/PlaceholderLegalPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-we-help" element={<HowWeHelp />} />
          <Route path="/what-we-accept" element={<WhatWeAccept />} />
          <Route path="/ways-to-help" element={<WaysToHelp />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/privacy-policy"
            element={<PlaceholderLegalPage title="Privacy Policy" />}
          />
          <Route path="/terms" element={<PlaceholderLegalPage title="Terms of Use" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
