import { usePageTitle } from '../hooks/usePageTitle'
import { contactInfo } from '../data/siteContent'

export default function MentionsPage() {
  usePageTitle('Mentions légales')

  return (
    <div className="page legal-page">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Légal</p>
          <h1>Mentions légales</h1>
        </div>
      </section>
      <section className="section">
        <div className="container legal-text">
          <h2>Éditeur du site</h2>
          <p>
            {contactInfo.company}
            <br />
            {contactInfo.addressMontpellier}
            <br />
            SIRET : 000 000 000 00000
          </p>
          <p>
            Email : <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <br />
            Téléphone : <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}>{contactInfo.phone}</a>
          </p>

          <h2>Hébergement</h2>
          <p>Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</p>

          <h2>Directeur de la publication</h2>
          <p>Laurent Serre, en qualité de président.</p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus (textes, visuels, vidéos, éléments graphiques) est protégé. Toute reproduction partielle ou
            totale sans autorisation est interdite.
          </p>
        </div>
      </section>
    </div>
  )
}
