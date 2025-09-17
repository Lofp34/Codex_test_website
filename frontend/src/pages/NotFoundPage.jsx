import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFoundPage() {
  usePageTitle('Page introuvable')

  return (
    <div className="page not-found-page">
      <section className="page-header">
        <div className="container">
          <h1>Page introuvable</h1>
          <p>La page recherchée n’existe pas ou plus. Revenez à l’accueil pour poursuivre votre navigation.</p>
          <Link className="button primary" to="/">
            Retour à l’accueil
          </Link>
        </div>
      </section>
    </div>
  )
}
