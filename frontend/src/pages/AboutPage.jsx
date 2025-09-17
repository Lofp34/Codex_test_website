import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import { qualifications, values } from '../data/siteContent'

const timeline = [
  {
    year: '2008-2014',
    title: 'Directeur commercial — Groupe industriel',
    description: 'Structuration de la force de vente export (Europe) et déploiement d’un CRM partagé.'
  },
  {
    year: '2014-2019',
    title: 'VP Sales — Scale-up SaaS B2B',
    description: 'Passage de 0 à 8 M€ ARR, mise en place du playbook, recrutement et coaching de 30 commerciaux.'
  },
  {
    year: 'Depuis 2019',
    title: 'Fondateur — Laurent Serre Conseil',
    description: 'Coaching intensif pour PME B2B : plus de 120 équipes accompagnées en Occitanie & Île-de-France.'
  },
]

export default function AboutPage() {
  usePageTitle('À propos de Laurent Serre')

  return (
    <div className="page about-page">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">À propos</p>
          <h1>Laurent Serre — Coach intensif à la vente</h1>
          <p>
            15 ans à diriger et coacher des forces de vente B2B. Aujourd’hui, Laurent accompagne les dirigeants de PME à
            structurer des équipes performantes et orientées ROI.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-columns">
          <div>
            <h2>Parcours</h2>
            <ul className="timeline-simple">
              {timeline.map((item) => (
                <li key={item.year}>
                  <strong>{item.year}</strong>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Signature pédagogique</h2>
            <p>
              Laurent mise sur l’entraînement intensif, l’immersion terrain et un suivi rapproché des managers. Les sessions
              sont filmées, les scripts retravaillés et les progrès mesurés chaque semaine.
            </p>
            <ul className="values-list">
              {values.map((value) => (
                <li key={value.title}>
                  <strong>{value.title}</strong>
                  <p>{value.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container two-columns">
          <div>
            <h2>Certifications & gages de qualité</h2>
            <ul className="checklist">
              {qualifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
              <li>Programme conforme aux exigences Qualiopi via partenaire formation</li>
              <li>Coach référencé French Tech Montpellier & Paris</li>
            </ul>
          </div>
          <div>
            <h2>Réseau</h2>
            <p>
              Collaboration avec HubSpot, Bpifrance, French Tech, CCI. Accès à un réseau de formateurs spécialisés (négociation,
              enablement marketing, customer success).
            </p>
            <Link className="button secondary" to="/webinaires">
              Rejoindre un webinar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
