import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import {
  offers,
  proofMetrics,
  processSteps,
  testimonials,
  caseStudies,
  faqs,
  blogArticles,
  webinarSeries,
  partners,
  contactInfo,
} from '../data/siteContent'
import { usePageTitle } from '../hooks/usePageTitle'
import { StructuredData } from '../components/StructuredData'
import { HeroMotionVisual } from '../components/HeroMotionVisual'

export default function HomePage() {
  usePageTitle('Accueil')

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness'],
        '@id': 'https://laurent-serre.fr#organization',
        name: 'Laurent Serre Coaching intensif à la vente',
        url: 'https://laurent-serre.fr',
        telephone: contactInfo.phone,
        email: contactInfo.email,
        areaServed: [
          { '@type': 'City', name: 'Montpellier' },
          { '@type': 'City', name: 'Paris' },
          { '@type': 'State', name: 'Occitanie' },
          { '@type': 'State', name: 'Île-de-France' },
        ],
        address: [
          {
            '@type': 'PostalAddress',
            streetAddress: '120 Rue Raymond Recouly',
            addressLocality: 'Montpellier',
            postalCode: '34000',
            addressCountry: 'FR',
          },
          {
            '@type': 'PostalAddress',
            streetAddress: '40 Rue du Louvre',
            addressLocality: 'Paris',
            postalCode: '75001',
            addressCountry: 'FR',
          },
        ],
        sameAs: [
          'https://www.linkedin.com/in/laurentserre',
          'https://www.youtube.com/@laurentserre',
        ],
      },
      {
        '@type': 'Service',
        name: 'Coaching commercial intensif',
        areaServed: ['Montpellier', 'Paris', 'Occitanie', 'Île-de-France'],
        provider: { '@id': 'https://laurent-serre.fr#organization' },
        serviceType: 'Coaching vente B2B',
        description:
          "Coaching intensif hybride pour les PME B2B qui souhaitent accélérer leurs ventes en 1 à 3 mois.",
        offers: offers.map((offer) => ({
          '@type': 'Offer',
          name: offer.title,
          price: offer.priceValue ? offer.priceValue.toString() : undefined,
          priceCurrency: 'EUR',
          description: offer.description,
        })),
      },
      {
        '@type': 'Product',
        name: 'Programme Sprint 1 mois',
        description:
          "Bootcamp de vente hybride : 3 sessions distancielles + 1 journée présentielle + suivi 30 jours.",
        offers: {
          '@type': 'Offer',
          price: offers.find((offer) => offer.slug === 'sprint')?.priceValue?.toString() || '5000',
          priceCurrency: 'EUR',
          eligibleRegion: ['Montpellier', 'Paris'],
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  }

  return (
    <div className="page home-page">
      <StructuredData data={structuredData} />
      <section className="hero">
        <HeroMotionVisual />
        <div className="container hero-grid">
          <Motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <p className="eyebrow">Coaching intensif à la vente pour PME B2B</p>
            <h1>
              3 sessions en visio + 1 journée présentielle pour accélérer vos ventes en 1 à 3 mois.
            </h1>
            <p className="hero-subtitle">
              Programme sur-mesure, ROI mesurable, suivi inclus. Basé à Montpellier & Paris.
            </p>
            <div className="cta-group">
              <Link className="button primary" to="/diagnostic">
                Demander un diagnostic gratuit
              </Link>
              <a className="button ghost" href="#programme">
                Télécharger le programme
              </a>
            </div>
            <ul className="hero-benefits">
              <li>Format hybride : distanciel + présentiel</li>
              <li>Éligible OPCO / Qualiopi</li>
              <li>ROI suivi 30-90 jours</li>
            </ul>
          </Motion.div>
          <Motion.div
            className="hero-card"
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          >
            <h2>Diagnostic offert</h2>
            <p>
              45 minutes pour cartographier vos objectifs 2025, identifier les frictions commerciales et construire votre plan
              d&apos;accélération.
            </p>
            <ul className="hero-card-list">
              <li>Audit express de votre pipeline</li>
              <li>Priorisation des quick wins</li>
              <li>Projection ROI 90 jours</li>
            </ul>
            <Link className="button secondary" to="/diagnostic">
              Réserver un créneau
            </Link>
          </Motion.div>
        </div>
      </section>

      <section className="section" aria-labelledby="preuve-roi">
        <div className="container">
          <div className="section-head">
            <h2 id="preuve-roi">Preuves & ROI</h2>
            <p>
              Évaluation initiale, objectifs chiffrés, coaching intensif et suivi 30 à 90 jours pour sécuriser un retour sur
              investissement rapide.
            </p>
          </div>
          <div className="metrics-grid">
            {proofMetrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <span className="metric-value">{metric.label}</span>
                <p>{metric.description}</p>
              </div>
            ))}
          </div>
          <div className="pricing-callout">
            À partir de <strong>5 000 € pour 6 commerciaux</strong> (≈ 833 €/pers.) – éligible OPCO*
          </div>
        </div>
      </section>

      <section className="section muted" id="programme" aria-labelledby="programme-intensif">
        <div className="container">
          <div className="section-head">
            <h2 id="programme-intensif">Programme intensif sur-mesure</h2>
            <p>Composez votre sprint commercial à partir de modules éprouvés et adaptés à votre cycle de vente.</p>
          </div>
          <div className="card-grid">
            {offers.map((offer) => (
              <article key={offer.slug} className="offer-card">
                <h3>{offer.title}</h3>
                <p className="offer-tagline">{offer.tagline}</p>
                <p className="offer-price">{offer.price}</p>
                <p>{offer.description}</p>
                <h4>Ce qui est inclus</h4>
                <ul>
                  {offer.modules.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h4>Livrables</h4>
                <ul>
                  {offer.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h4>Options</h4>
                <ul>
                  {offer.options.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="button tertiary" to="/offres">
                  Voir les offres détaillées
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="methode">
        <div className="container method-grid">
          <div>
            <h2 id="methode">Méthode prouvée</h2>
            <p>
              Du diagnostic terrain au suivi post-coaching, chaque étape vise des gains mesurables : taux de transformation,
              panier moyen, vélocité pipeline.
            </p>
            <Link className="button link" to="/methode-roi">
              Découvrir la méthode complète
            </Link>
          </div>
          <ol className="timeline">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <span className="timeline-index">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.content}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section muted" aria-labelledby="cas-clients">
        <div className="container">
          <div className="section-head">
            <h2 id="cas-clients">Cas clients locaux</h2>
            <p>Des PME B2B de Montpellier, Occitanie et Paris qui ont boosté leur croissance.</p>
          </div>
          <div className="card-grid">
            {caseStudies.map((cas) => (
              <article key={cas.title} className="case-card">
                <h3>{cas.title}</h3>
                <p className="case-location">{cas.location}</p>
                <p className="case-challenge">{cas.challenge}</p>
                <p className="case-result">{cas.result}</p>
              </article>
            ))}
          </div>
          <Link className="button link" to="/cas">
            Lire les études de cas
          </Link>
        </div>
      </section>

      <section className="section" aria-labelledby="temoignages">
        <div className="container">
          <h2 id="temoignages">Ils ont coaché leurs forces de vente</h2>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name}>
                <p>“{testimonial.quote}”</p>
                <cite>
                  {testimonial.name} — {testimonial.role}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted" aria-labelledby="partenaires">
        <div className="container">
          <h2 id="partenaires">Partenaires & écosystème</h2>
          <ul className="partner-list">
            {partners.map((partner) => (
              <li key={partner}>{partner}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="ressources">
        <div className="container resources-grid">
          <div>
            <h2 id="ressources">Ressources pour vos équipes</h2>
            <p>Webinars, guides et templates pour prolonger l’entraînement et onboarder vos nouvelles recrues.</p>
            <Link className="button link" to="/ressources">
              Voir toutes les ressources
            </Link>
          </div>
          <div className="resource-cards">
            <div>
              <h3>Articles récents</h3>
              <ul>
                {blogArticles.slice(0, 2).map((article) => (
                  <li key={article.title}>
                    <strong>{article.title}</strong>
                    <p>{article.excerpt}</p>
                    <span className="tag">{article.category}</span>
                    <span className="reading-time">{article.readingTime}</span>
                  </li>
                ))}
              </ul>
              <Link className="button tertiary" to="/blog">
                Consulter le blog
              </Link>
            </div>
            <div>
              <h3>Prochains webinars</h3>
              <ul>
                {webinarSeries.map((webinar) => (
                  <li key={webinar.title}>
                    <strong>{webinar.title}</strong>
                    <p>{webinar.focus}</p>
                    <span className="reading-time">{webinar.date}</span>
                    <Link className="button ghost" to="/webinaires">
                      {webinar.cta}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted" aria-labelledby="faq">
        <div className="container">
          <h2 id="faq">FAQ</h2>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner" aria-labelledby="cta-diagnostic">
        <div className="container cta-banner-inner">
          <div>
            <h2 id="cta-diagnostic">Prêts à muscler votre force de vente ?</h2>
            <p>
              Complétez le diagnostic gratuit pour qualifier vos enjeux, vos KPIs cibles et planifier votre sprint commercial.
            </p>
          </div>
          <Link className="button primary" to="/diagnostic">
            Lancer le diagnostic
          </Link>
        </div>
      </section>
    </div>
  )
}
