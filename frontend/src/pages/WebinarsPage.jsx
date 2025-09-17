import { usePageTitle } from '../hooks/usePageTitle'
import { webinarSeries } from '../data/siteContent'

export default function WebinarsPage() {
  usePageTitle('Webinars')

  return (
    <div className="page webinars-page">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Webinars</p>
          <h1>Sessions live & replays pour maintenir la pression commerciale</h1>
          <p>Des formats interactifs avec jeux de rôle en direct, templates et Q&A pour vos managers.</p>
        </div>
      </section>

      <section className="section">
        <div className="container card-stack">
          {webinarSeries.map((webinar) => (
            <article key={webinar.title} className="webinar-card">
              <header>
                <h2>{webinar.title}</h2>
                <span className="reading-time">{webinar.date}</span>
              </header>
              <p>{webinar.focus}</p>
              <button type="button" className="button secondary" disabled>
                Inscriptions bientôt ouvertes
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
