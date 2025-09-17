import { Link } from 'react-router-dom'
import { localHighlights, caseStudies, partners } from '../data/siteContent'
import { usePageTitle } from '../hooks/usePageTitle'
import { StructuredData } from '../components/StructuredData'

const highlight = localHighlights.montpellier

export default function MontpellierPage() {
  usePageTitle('Coach vente Montpellier')

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: highlight.title,
    areaServed: 'Montpellier, Occitanie',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '120 Rue Raymond Recouly',
      addressLocality: 'Montpellier',
      postalCode: '34000',
      addressCountry: 'FR',
    },
  }

  const localCases = caseStudies.filter((cas) => cas.location.includes('Montpellier') || cas.location.includes('Occitanie'))

  return (
    <div className="page local-page">
      <StructuredData data={structuredData} />
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Montpellier & Occitanie</p>
          <h1>{highlight.title}</h1>
          <p>{highlight.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-columns">
          <div>
            <h2>Secteurs accompagnés</h2>
            <ul className="checklist">
              {highlight.focusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="note">Sessions sur site à Montpellier, Béziers, Nîmes et en visio pour vos équipes distantes.</p>
          </div>
          <div>
            <h2>Écosystème local</h2>
            <p>{highlight.localProof}</p>
            <ul className="partner-list">
              {partners.slice(0, 2).map((partner) => (
                <li key={partner}>{partner}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container card-grid">
          {localCases.map((cas) => (
            <article key={cas.title} className="case-card">
              <h3>{cas.title}</h3>
              <p className="case-challenge">{cas.challenge}</p>
              <p className="case-result">{cas.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container map-section">
          <div className="map-wrapper">
            <iframe
              title="Laurent Serre Montpellier"
              src={highlight.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="map-content">
            <h2>Rencontrons-nous à Montpellier</h2>
            <p>Sessions présentielles chez vous ou dans les espaces partenaires (Lez Work, Cap Omega, BIC Montpellier...).</p>
            <Link className="button primary" to="/diagnostic">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
