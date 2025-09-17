import { usePageTitle } from '../hooks/usePageTitle'

export default function CookiesPage() {
  usePageTitle('Politique cookies')

  return (
    <div className="page legal-page">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Légal</p>
          <h1>Politique cookies</h1>
        </div>
      </section>
      <section className="section">
        <div className="container legal-text">
          <h2>Cookies utilisés</h2>
          <p>
            Cookies techniques indispensables au fonctionnement du site (gestion de session) et cookies analytiques (Google
            Analytics 4 via Google Tag Manager).
          </p>

          <h2>Gestion du consentement</h2>
          <p>Une bannière permet de paramétrer votre consentement (acceptation, refus, personnalisation).</p>

          <h2>Durée de vie</h2>
          <p>Les cookies analytiques ont une durée maximale de 13 mois.</p>
        </div>
      </section>
    </div>
  )
}
