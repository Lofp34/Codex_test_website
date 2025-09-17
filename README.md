# Conception du site "Laurent Serre • Coaching intensif à la vente"

Ce dépôt rassemble les livrables de conception pour le futur site Next.js hébergé sur Vercel. Ils couvrent la stratégie, l'expérience utilisateur, le design UI, la production de contenu et les intégrations techniques.

## Livrables disponibles
- [`docs/plan-site.md`](docs/plan-site.md) — Objectifs business, parcours utilisateurs, exigences techniques.
- [`docs/wireframes.md`](docs/wireframes.md) — Wireframes low-fi (Accueil, Offres, Cas clients, Diagnostic, Pages locales).
- [`docs/ui-kit.md`](docs/ui-kit.md) — Palette, typographies, composants et micro-interactions.
- [`docs/formulaire-diagnostic.md`](docs/formulaire-diagnostic.md) — Spécification complète du formulaire multi-étapes.
- [`docs/seo-strategie.md`](docs/seo-strategie.md) — Plan SEO, métadonnées, cocon sémantique.
- [`docs/templates-contenu.md`](docs/templates-contenu.md) — Templates article, cas client, landing webinar.
- [`docs/integrations-tests.md`](docs/integrations-tests.md) — Architecture intégrations, plan de tests, checklist go-live.
- [`docs/mode-emploi-cms.md`](docs/mode-emploi-cms.md) — Mode d'emploi CMS & workflow de publication.

## Première version du site React
Une première implémentation front-end est disponible dans [`frontend/`](frontend/) (Vite + React). Elle couvre :

- Accueil complet avec preuves ROI, offres, cas clients, FAQ et CTA diagnostic.
- Pages Offres, Méthode, Cas clients, Ressources, Blog, Webinaires, Financements, Diagnostic multi-étapes.
- Pages locales Montpellier et Paris avec cartes intégrées + pages légales (mentions, confidentialité, cookies).
- Gabarit responsive avec navigation, footer, styles globaux, JSON-LD et hook `usePageTitle`.

Consultez [`frontend/README.md`](frontend/README.md) pour les instructions d'installation et de démarrage.

## Résolution des conflits & maintenance

Lorsque des conflits Git surviennent (comme sur `README.md`, `package.json`, `package-lock.json`, `src/App.css` ou `src/pages/HomePage.jsx`), appliquez la démarche suivante :

1. **Identifier la source** : ouvrez les fichiers concernés et repérez les sections `<<<<<<<` / `=======` / `>>>>>>>` générées par Git.
2. **Comparer les intentions** : confrontez les apports des deux branches (ex. mise à jour de dépendances vs. ajustements CSS) afin de conserver la combinaison qui respecte la dernière version de la maquette et de la documentation.
3. **Harmoniser les dépendances** : réalignez `package.json` et regénérez le `package-lock.json` via `npm install` pour garantir un ensemble cohérent (React 18, Framer Motion, React Router 7, ESLint 9).
4. **Recompiler et tester** : lancez `npm run lint` puis `npm run build` pour vérifier qu'aucune régression n'a été introduite.

Après validation, commitez les fichiers nettoyés et poussez la branche. Cette routine évite les résolutions approximatives et garantit un historique lisible.

