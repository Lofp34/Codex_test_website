
## Première version du site React
Une première implémentation front-end est disponible dans [`frontend/`](frontend/) (Vite + React). Elle couvre :

- Accueil complet avec preuves ROI, offres, cas clients, FAQ et CTA diagnostic.
- Pages Offres, Méthode, Cas clients, Ressources, Blog, Webinaires, Financements, Diagnostic multi-étapes.
- Pages locales Montpellier et Paris avec cartes intégrées + pages légales (mentions, confidentialité, cookies).
- Gabarit responsive avec navigation, footer, styles globaux, JSON-LD et hook `usePageTitle`.

Consultez [`frontend/README.md`](frontend/README.md) pour les instructions d'installation et de démarrage.
=======
## Prochaines étapes recommandées
1. Valider les contenus et priorités avec Laurent Serre.
2. Produire maquettes UI hi-fi dans Figma en s'appuyant sur l'UI kit.
3. Démarrer intégration Next.js + CMS (Sanity/Contentful) + HubSpot/Calendly.
4. Implémenter suivi analytics et plan de tests décrit dans `docs/integrations-tests.md`.
5. Réaliser recette complète (performance, SEO, accessibilité) avant mise en production.