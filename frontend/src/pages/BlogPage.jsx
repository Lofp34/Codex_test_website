import { usePageTitle } from '../hooks/usePageTitle'
import { blogArticles } from '../data/siteContent'

export default function BlogPage() {
  usePageTitle('Blog')

  return (
    <div className="page blog-page">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Blog</p>
          <h1>Insights pour coacher vos équipes commerciales</h1>
          <p>Scripts, méthodes et retours terrain pour accélérer vos ventes sans sacrifier vos marges.</p>
        </div>
      </section>

      <section className="section">
        <div className="container blog-grid">
          {blogArticles.map((article) => (
            <article key={article.title} className="blog-card">
              <header>
                <span className="tag">{article.category}</span>
                <span className="reading-time">{article.readingTime}</span>
                <h2>{article.title}</h2>
              </header>
              <p>{article.excerpt}</p>
              <button type="button" className="button ghost" disabled>
                Article en cours de rédaction
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
