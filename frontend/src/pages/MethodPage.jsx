import { Link } from 'react-router-dom'
import { processSteps, proofMetrics, qualifications, values } from '../data/siteContent'
import { usePageTitle } from '../hooks/usePageTitle'

export default function MethodPage() {
  usePageTitle('Méthode & preuves ROI')

  return (
    <div className="page method-page">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Méthode</p>
          <h1>Méthodologie ROI : diagnostic, entraînement, mesure</h1>
          <p>
            Une approche sparring-partner pour challenger vos équipes, sécuriser l’adoption et livrer un retour sur
            investissement tangible.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-columns">
          <div>
            <h2>Architecture du coaching</h2>
            <p>
              Chaque programme démarre par un diagnostic de performance : analyse pipeline, entretiens dirigeants et shadowing
              d’appels. Cette photographie nourrit un plan d’entraînement intensif structuré en modules.
            </p>
            <p>
              Le format hybride mixe ateliers distanciels, journées présentielles et coaching individuel manager pour ancrer
              les réflexes clés. Les sessions sont filmées pour favoriser l’auto-évaluation et la répétition.
            </p>
          </div>
          <div className="timeline-block">
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
        </div>
      </section>

      <section className="section muted">
        <div className="container metrics-grid">
          {proofMetrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <span className="metric-value">{metric.label}</span>
              <p>{metric.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container two-columns">
          <div>
            <h2>Un coaching sparring-partner</h2>
            <p>
              Laurent challenge vos commerciaux sur leurs situations réelles : rendez-vous clients, réponses aux objections,
              négociations tendues. Les sessions sont rythmées, directes et orientées résultat.
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
          <div>
            <h2>Garanties qualité</h2>
            <ul className="checklist">
              {qualifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
              <li>Reporting hebdomadaire : taux de transfo, panier moyen, vélocité pipeline</li>
              <li>Support HubSpot & outils d’aide à la vente fournis</li>
            </ul>
            <Link className="button secondary" to="/cas">
              Voir les cas clients
            </Link>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <h2>Suivi et gouvernance</h2>
          <div className="two-columns">
            <div>
              <h3>Comités de pilotage</h3>
              <p>
                Point hebdomadaire avec les managers : revue des deals clés, mise à jour des indicateurs, arbitrage des priorités
                et plan d’actions individuels.
              </p>
            </div>
            <div>
              <h3>Tableaux de bord ROI</h3>
              <p>
                Mise en place ou optimisation des dashboards HubSpot/CRM. Focus sur la vélocité pipeline, la conversion par
                étape et la valeur moyenne signée.
              </p>
            </div>
          </div>
          <div className="note-card">
            <p>
              90 % des équipes accompagnées constatent des gains significatifs sous 60 jours, confirmés par les KPIs suivis.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
