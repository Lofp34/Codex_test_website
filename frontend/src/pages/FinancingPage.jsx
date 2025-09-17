import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

const opcoSteps = [
  'Diagnostic : estimation du budget et des dispositifs mobilisables (OPCO, CPF, FNE).',
  'Montage dossier : convention, programme détaillé, planning, devis.',
  'Dépôt et suivi : accompagnement pour la plateforme OPCO et relances si besoin.',
  'Bilan pédagogique : reporting Qualiopi, attestations de présence et satisfaction.',
]

export default function FinancingPage() {
  usePageTitle('Financements & Qualiopi')

  return (
    <div className="page financing-page">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Financements</p>
          <h1>Mobilisez vos financements formation</h1>
          <p>Laurent travaille avec un organisme partenaire certifié Qualiopi pour faciliter vos démarches.</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-columns">
          <div>
            <h2>Dispositifs éligibles</h2>
            <ul className="checklist">
              <li>OPCO Atlas, Afdas, AKTO, OPCO 2i, OPCO EP…</li>
              <li>CPF entreprise & CPF de transition</li>
              <li>Plan de développement des compétences</li>
              <li>Financement Bpifrance / prêt croissance</li>
            </ul>
          </div>
          <div>
            <h2>Processus accompagné</h2>
            <ol className="step-list">
              {opcoSteps.map((step, index) => (
                <li key={step}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <h2>Documents fournis</h2>
          <div className="card-grid">
            <article className="note-card">
              <h3>Programme détaillé</h3>
              <p>Objectifs pédagogiques, compétences visées, déroulé séance par séance.</p>
            </article>
            <article className="note-card">
              <h3>Attestations Qualiopi</h3>
              <p>Feuilles d’émargement, évaluations à chaud/froid, bilan pédagogique.</p>
            </article>
            <article className="note-card">
              <h3>Suivi administratif</h3>
              <p>Support pour les relances OPCO, justificatifs financiers, facturation échelonnée.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>Besoin d’un coup de pouce pour monter le dossier ?</h2>
            <p>Le diagnostic gratuit comprend une estimation du financement mobilisable et des délais.</p>
          </div>
          <Link className="button primary" to="/diagnostic">
            Parler financements
          </Link>
        </div>
      </section>
    </div>
  )
}
