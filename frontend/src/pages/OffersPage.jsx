import { Link } from 'react-router-dom'
import { offers } from '../data/siteContent'
import { usePageTitle } from '../hooks/usePageTitle'
import { StructuredData } from '../components/StructuredData'

export default function OffersPage() {
  usePageTitle('Offres & tarifs')

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Offres de coaching commercial intensif',
    serviceType: 'Coaching vente B2B',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Programmes Laurent Serre',
      itemListElement: offers.map((offer) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: offer.title,
          description: offer.description,
        },
        price: offer.price,
        priceCurrency: 'EUR',
      })),
    },
  }

  return (
    <div className="page offers-page">
      <StructuredData data={structuredData} />
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Offres & tarifs</p>
          <h1>Choisissez le parcours qui correspond à vos ambitions commerciales</h1>
          <p>
            Des formats hybrides pour aligner vos commerciaux, accélérer votre pipeline et renforcer le management de la
            performance.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid">
          {offers.map((offer) => (
            <article key={offer.slug} className="offer-card offer-card--detailed">
              <header>
                <h2>{offer.title}</h2>
                <p className="offer-tagline">{offer.tagline}</p>
                <p className="offer-price">{offer.price}</p>
              </header>
              <p>{offer.description}</p>
              <div className="offer-columns">
                <div>
                  <h3>Modules clés</h3>
                  <ul>
                    {offer.modules.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Livrables & outils</h3>
                  <ul>
                    {offer.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {offer.options.length > 0 && (
                <div className="offer-options">
                  <h3>Options populaires</h3>
                  <ul>
                    {offer.options.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              <footer className="offer-footer">
                <Link className="button secondary" to="/diagnostic">
                  Programmer un diagnostic
                </Link>
                <p className="note">Financement OPCO/CPF possible • Sessions sur Montpellier, Paris ou visio</p>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted">
        <div className="container split">
          <div>
            <h2>Pas sûr du format ?</h2>
            <p>
              Le diagnostic gratuit permet d’évaluer vos KPIs actuels, de dimensionner le programme et de sécuriser les
              financements.
            </p>
          </div>
          <Link className="button primary" to="/diagnostic">
            Réserver un diagnostic
          </Link>
        </div>
      </section>
    </div>
  )
}
