import { Link } from 'react-router-dom'
import { localHighlights, caseStudies, partners } from '../data/siteContent'
import { usePageTitle } from '../hooks/usePageTitle'
import { StructuredData } from '../components/StructuredData'

const highlight = localHighlights.paris

export default function ParisPage() {
  usePageTitle('Coach vente Paris')

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: highlight.title,
    areaServed: 'Paris, Île-de-France',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '40 Rue du Louvre',
      addressLocality: 'Paris',
      postalCode: '75001',
      addressCountry: 'FR',
    },
  }

  const localCases = caseStudies.filter((cas) => cas.location.includes('Paris'))

  return (
    <div className="page local-page">
      <StructuredData data={structuredData} />
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Paris & Île-de-France</p>
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
            <p className="note">Possibilité d’intervenir dans vos locaux ou espaces partenaires (Les Halles, Station F...).</p>
          </div>
          <div>
            <h2>Réseau francilien</h2>
            <p>{highlight.localProof}</p>
            <ul className="partner-list">
              {partners.slice(1).map((partner) => (
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
              title="Laurent Serre Paris"
              src={highlight.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="map-content">
            <h2>Sessions à Paris ou en visio</h2>
            <p>Calendrier dédié pour les équipes franciliennes : slots matin/soir, possibilité de format roadshow.</p>
            <Link className="button primary" to="/diagnostic">
              Réserver un créneau
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
