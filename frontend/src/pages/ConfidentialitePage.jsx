import { usePageTitle } from '../hooks/usePageTitle'

export default function ConfidentialitePage() {
  usePageTitle('Politique de confidentialité')

  return (
    <div className="page legal-page">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Légal</p>
          <h1>Politique de confidentialité</h1>
        </div>
      </section>
      <section className="section">
        <div className="container legal-text">
          <h2>Données collectées</h2>
          <p>
            Les données collectées via le formulaire diagnostic (nom, prénom, fonction, email, téléphone, informations
            d’entreprise) servent à la qualification commerciale et au suivi de la relation.
          </p>

          <h2>Base légale</h2>
          <p>Intérêt légitime et consentement explicite pour l’envoi d’informations commerciales.</p>

          <h2>Durée de conservation</h2>
          <p>Les données sont conservées 3 ans à compter du dernier échange ou jusqu’à la demande de suppression.</p>

          <h2>Destinataires</h2>
          <p>Laurent Serre Conseil et ses partenaires techniques (HubSpot, Calendly, solutions d’emailing).</p>

          <h2>Vos droits</h2>
          <p>
            Vous pouvez exercer vos droits d’accès, rectification, opposition, limitation et suppression en écrivant à
            contact@laurent-serre.fr.
          </p>
        </div>
      </section>
    </div>
  )
}
