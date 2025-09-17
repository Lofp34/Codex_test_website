import { Link } from 'react-router-dom'
import { blogArticles, webinarSeries } from '../data/siteContent'
import { usePageTitle } from '../hooks/usePageTitle'

const downloads = [
  {
    title: 'Kit de coaching commercial',
    description: 'Checklist de préparation des sessions, trame de scoring pipeline, scripts de découverte.',
    format: 'PDF — 18 pages',
  },
  {
    title: 'Modèle de plan d’action 90 jours',
    description: 'Priorisation hebdomadaire, KPIs et suivi managers.',
    format: 'Google Sheet',
  },
]

export default function ResourcesPage() {
  usePageTitle('Ressources')

  return (
    <div className="page resources-page">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Ressources</p>
          <h1>Guides, webinars et outils pour vos commerciaux</h1>
          <p>Accédez aux contenus qui prolongent le coaching intensif et facilitent l’onboarding de vos nouvelles recrues.</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-columns">
          <div>
            <h2>Articles stratégiques</h2>
            <ul className="resource-list">
              {blogArticles.map((article) => (
                <li key={article.title}>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <span className="tag">{article.category}</span>
                  <span className="reading-time">{article.readingTime}</span>
                </li>
              ))}
            </ul>
            <Link className="button secondary" to="/blog">
              Accéder au blog
            </Link>
          </div>
          <div>
            <h2>Webinars & replays</h2>
            <ul className="resource-list">
              {webinarSeries.map((webinar) => (
                <li key={webinar.title}>
                  <h3>{webinar.title}</h3>
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
      </section>

      <section className="section muted">
        <div className="container">
          <h2>Outils à télécharger</h2>
          <div className="card-grid">
            {downloads.map((doc) => (
              <article key={doc.title} className="download-card">
                <h3>{doc.title}</h3>
                <p>{doc.description}</p>
                <span className="reading-time">{doc.format}</span>
                <button type="button" className="button tertiary" disabled>
                  Bientôt disponible
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
