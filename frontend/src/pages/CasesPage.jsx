import { Link } from 'react-router-dom'
import { caseStudies, testimonials } from '../data/siteContent'
import { usePageTitle } from '../hooks/usePageTitle'

const detailedCases = [
  {
    ...caseStudies[0],
    actions: [
      'Diagnostic pipeline + alignement des personas cibles',
      'Bootcamp 3 semaines avec jeux de rôle filmés et plan de relance',
      'Mise en place d’un tableau de bord HubSpot centré sur la vélocité',
    ],
  },
  {
    ...caseStudies[1],
    actions: [
      'Audit des scripts de prospection et ateliers multicanal',
      'Coaching terrain lors de rendez-vous prospects en Allemagne',
      'Plan de suivi hebdomadaire et mentoring manager export',
    ],
  },
  {
    ...caseStudies[2],
    actions: [
      'Simulation de négociation et préparation d’offres packagées',
      'Coaching Customer Success pour activer l’upsell',
      'Reporting ROI partagé au COMEX avec objectifs 90 jours',
    ],
  },
]

export default function CasesPage() {
  usePageTitle('Cas clients')

  return (
    <div className="page cases-page">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Cas clients</p>
          <h1>Des PME B2B qui accélèrent leurs ventes</h1>
          <p>
            Industrie, SaaS, services : découvrez comment les équipes coachées ont gagné en efficacité commerciale en quelques
            semaines.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container card-stack">
          {detailedCases.map((cas) => (
            <article key={cas.title} className="case-detail">
              <header>
                <span className="tag">{cas.location}</span>
                <h2>{cas.title}</h2>
              </header>
              <p className="case-challenge">{cas.challenge}</p>
              <div className="case-actions">
                <h3>Plan d’action</h3>
                <ul>
                  {cas.actions.map((action) => (
                    <li key={action}>{action}</li>
                  ))}
                </ul>
              </div>
              <p className="case-result">{cas.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <h2>Témoignages vidéo & audio</h2>
          <p>
            Les témoignages complets sont disponibles sur demande : replays vidéo des jeux de rôle, interviews dirigeants et
            enregistrements audio des coachings.
          </p>
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

      <section className="section">
        <div className="container split">
          <div>
            <h2>Envie d’explorer un cas similaire ?</h2>
            <p>Demandes de RDV : Montpellier/Occitanie, Paris ou visio. Diagnostic offert pour cadrer votre projet.</p>
          </div>
          <Link className="button primary" to="/diagnostic">
            Réserver un diagnostic
          </Link>
        </div>
      </section>
    </div>
  )
}
