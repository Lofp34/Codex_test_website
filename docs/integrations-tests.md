# Intégrations & plan de tests

## 1. Architecture globale
- **Front** : Next.js 14 (App Router), hébergé sur Vercel, `@vercel/analytics` pour monitoring léger.
- **CMS** : Sanity (dataset production) ou Contentful. Modèles : Page, Article, Cas client, Webinar, FAQ, Témoignage.
- **CRM** : HubSpot (forms + workflows + pipeline deals).
- **Calendly** : intégration inline + webhooks (Zapier/Make) pour push dans HubSpot via engagements.
- **Supabase** : stockage optionnel de ressources (replays, documents) + API Rest pour pages ressources.
- **Analytics** : GA4 via GTM, Consent Mode v2.
- **Emailing** : sequences HubSpot + templates (diagnostic, nurturing, rappel webinar).

## 2. Flux de données
1. Visiteur accepte cookies → GTM charge GA4 + HubSpot tracking.
2. Soumission formulaire diagnostic → HubSpot contact + pipeline "Opportunités Sprint".
3. RDV Calendly → webhook → HubSpot meeting + tag "RDV Diagnostiqué".
4. Téléchargement PDF → HubSpot form (embedded) pour lead magnet (scoring MQL = +10).
5. Webinar registration → HubSpot + automation emails (J-1, J-0, J+1 replay).

## 3. Tests fonctionnels
| Scénario | Description | Outil |
| --- | --- | --- |
| F1 — Soumission formulaire diagnostic | Vérifier validations, mapping HubSpot, email confirmation | Cypress E2E |
| F2 — Réservation Calendly | Vérifier qu'un RDV est créé et push dans HubSpot | Cypress + webhook test |
| F3 — Téléchargement programme | Vérifier gating PDF + envoi email | Cypress |
| F4 — Navigation | Tester menu sticky, responsive, focus clavier | Playwright |
| F5 — Accordéons FAQ | Vérifier accessibilité (ARIA, focus) | Jest + Testing Library |
| F6 — Lazy-load vidéos | Vérifier chargement différé + tracking événement | Cypress |

## 4. Tests de performance
- **Lighthouse** (desktop & mobile) : objectif ≥ 90.
- **WebPageTest** : scénario 4G, Largest Contentful Paint < 2,5 s.
- **Vercel Analytics** : monitoring TTFB, LCP, FID.
- Optimisations testées : `next/script` lazy, `next/image` placeholders, pré-rendu ISR (revalidate 60s blog, 300s cas).

## 5. Tests SEO
- Screaming Frog / Sitebulb : vérifier métas, Hn, canonicals.
- `next-sitemap` : vérifier sitemap auto + robots.
- Rich Results Test : valider JSON-LD (FAQ, LocalBusiness, Event).

## 6. Tests accessibilité
- `@axe-core/playwright` : audit automatisé.
- Tests manuels clavier, lecteur d'écran (NVDA/VoiceOver).
- Vérification contrastes via Stark ou Lighthouse.

## 7. Plan de recette
| Sprint | Tests | Responsables |
| --- | --- | --- |
| Semaine 1 (MVP) | F1, F4 | Agence (QA) |
| Semaine 2 | F2, F3, F5 | Agence + Laurent (UAT) |
| Semaine 3 | Performance + SEO + Accessibilité | Agence |
| Semaine 4 | Recette finale + Go/No-Go | Laurent + Agence |

## 8. Checklist go-live
- [ ] DNS & certificats SSL actifs.
- [ ] Variables d'environnement (HubSpot, Sanity, Supabase, Calendly) sur Vercel.
- [ ] Consent Mode v2 actif et testé.
- [ ] Backups CMS + exports.
- [ ] Tests E2E verts sur pipeline CI.
- [ ] Mise à jour du mode d'emploi (cf. `docs/mode-emploi-cms.md`).

