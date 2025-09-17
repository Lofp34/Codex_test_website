import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import OffersPage from './pages/OffersPage'
import MethodPage from './pages/MethodPage'
import CasesPage from './pages/CasesPage'
import AboutPage from './pages/AboutPage'
import ResourcesPage from './pages/ResourcesPage'
import BlogPage from './pages/BlogPage'
import WebinarsPage from './pages/WebinarsPage'
import FinancingPage from './pages/FinancingPage'
import DiagnosticPage from './pages/DiagnosticPage'
import MontpellierPage from './pages/MontpellierPage'
import ParisPage from './pages/ParisPage'
import MentionsPage from './pages/MentionsPage'
import ConfidentialitePage from './pages/ConfidentialitePage'
import CookiesPage from './pages/CookiesPage'
import NotFoundPage from './pages/NotFoundPage'
import { ScrollToTop } from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="offres" element={<OffersPage />} />
          <Route path="methode-roi" element={<MethodPage />} />
          <Route path="cas" element={<CasesPage />} />
          <Route path="laurent-serre" element={<AboutPage />} />
          <Route path="ressources" element={<ResourcesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="webinaires" element={<WebinarsPage />} />
          <Route path="financements" element={<FinancingPage />} />
          <Route path="diagnostic" element={<DiagnosticPage />} />
          <Route path="montpellier" element={<MontpellierPage />} />
          <Route path="paris" element={<ParisPage />} />
          <Route path="mentions" element={<MentionsPage />} />
          <Route path="confidentialite" element={<ConfidentialitePage />} />
          <Route path="cookies" element={<CookiesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
