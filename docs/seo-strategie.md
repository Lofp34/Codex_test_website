# Stratégie SEO & contenus

## 1. Cocon sémantique
- **Thématique principale** : coaching commercial intensif pour PME B2B.
- **Silots** :
  1. *Coaching vente Montpellier / Occitanie* — mots-clés : « coaching vente Montpellier », « formation commerciale Occitanie », « coach commercial Hérault ».
  2. *Coaching vente Paris / Île-de-France* — mots-clés : « coaching commercial Paris », « bootcamp vente Paris », « formation closing B2B Paris ».
  3. *Programme intensif & ROI* — « bootcamp vente », « entraînement intensif vente », « ROI coaching commercial ».
  4. *Méthodes & ressources* — « jeu de rôle commercial », « scripts prospection B2B », « webinar vente B2B ».

## 2. Plan éditorial
| Mois | Contenu blog | Webinaire | Lead magnet |
| --- | --- | --- | --- |
| M1 | "Comment structurer un sprint commercial de 30 jours" | "Accélérer son taux de conclusion en 90 jours" | PDF programme détaillé |
| M2 | "Checklist prospection multicanal pour PME B2B" | "Scripts de découverte qui convertissent" | Template email follow-up |
| M3 | "Mesurer le ROI d'un coaching commercial" | "Gérer les négociations complexes" | Cas client détaillé (industrie) |

## 3. Métadonnées & Hn
| Page | Title | Meta description | H1 | H2 principaux |
| --- | --- | --- | --- | --- |
| Accueil | Coaching intensif vente à Montpellier & Paris \| Laurent Serre | Bootcamp hybride (3 visios + 1 jour) pour PME B2B. Programme sur-mesure, ROI mesurable, 5 000 € pour 6. Diagnostic gratuit. | Coaching intensif à la vente pour PME B2B (Montpellier & Paris) | Méthode orientée résultats • Des cas clients concrets • Nos offres intensives |
| Offres | Offres & Tarifs — Coaching commercial intensif (PME B2B) | Sprints 1 à 3 mois, ateliers flash et options manager. ROI mesurable, financement OPCO/CPF. | Nos offres de coaching commercial intensif | Sprint 1 mois • Parcours 3 mois • Workshop Flash |
| Méthode & ROI | Méthode & preuves — Coaching commercial ROI | Découvrez la méthode hybride Laurent Serre : objectifs chiffrés, entraînement filmé, suivi 90 jours. | La méthode qui garantit un ROI mesurable | Diagnostic initial • Coaching intensif hybride • Suivi post-programme |
| Cas clients | Cas clients — Coaching vente PME B2B | Études de cas locales Montpellier & Paris : +10 pts de taux de conclusion, pipeline accéléré. | Ils ont dopé leurs ventes en 90 jours | Industrie • Tech/SaaS • Services B2B |
| Diagnostic | Diagnostic commercial gratuit | Bénéficiez d'un audit en 45 min pour identifier leviers de croissance et plan d'action. | Demander un diagnostic commercial gratuit | Pourquoi un diagnostic ? • Ce que vous recevez • Comment se déroule l'entretien |
| Montpellier | Coach vente Montpellier — Formation commerciale Occitanie | Programme intensif local, ateliers en présentiel, réseau CCI & French Tech. | Coach vente Montpellier — Formation commerciale Occitanie | Nos accompagnements à Montpellier • Cas clients Occitanie • Agenda local |
| Paris | Coach vente Paris — Bootcamp intensif B2B | Coaching hybride pour équipes commerciales franciliennes. Diagnostic offert. | Coach vente Paris — Bootcamp intensif B2B | Nos accompagnements à Paris • Cas clients Île-de-France • Agenda Paris |
| Blog (listing) | Ressources & blog — Coaching commercial B2B | Articles, checklists et replays pour accélérer vos ventes B2B. | Ressources pour doper vos ventes | Derniers articles • Webinaires à venir |
| Webinar landing | Webinar vente B2B — [Titre spécifique] | Inscrivez-vous à notre webinar live animé par Laurent Serre. Places limitées. | Webinar : [Titre] | Ce que vous apprendrez • Intervenants • Bonus |

## 4. Données structurées JSON-LD (extraits)
- **Organization** : nom, logo, URL, contact, sameAs (LinkedIn, YouTube).
- **LocalBusiness** : deux entrées (Montpellier, Paris) avec `areaServed`, `geo`, `openingHours`, `hasMap`.
- **Service** : "Coaching commercial intensif" avec `provider`, `serviceType`, `areaServed`, `audience`.
- **Product** : offre à 5 000 € (Sprint 1 mois), `offers.priceCurrency = EUR`, `offers.availability = InStock`.
- **FAQPage** : sur /offres et /diagnostic.
- **Article** : pour chaque billet de blog (auteur, date, image).
- **Event** : pour les webinars (type `EducationEvent`).

## 5. Optimisations on-page
- Balises `meta robots` = index, follow (sauf pages légales = noindex?).
- Liens internes : CTA vers diagnostic dans chaque page, cross-link blog ↔ cas ↔ offres.
- Images : `alt` descriptifs + `width/height` définis.
- Utiliser `next/head` pour meta + `next-seo` pour gestion global.
- Performance : compressions, `prefetch` pour pages critiques, `priority` hero image.

## 6. Backlinks & autorité
- Partenariats CCI Montpellier, French Tech Méditerranée, French Tech Paris.
- Articles invités sur blogs B2B (Maddyness, Les Echos Solutions).
- Témoignages croisés clients (ex : Epitech, CCI) avec liens retour.
- Publication de cas clients PDF (gated) pour capture emails.

## 7. Tracking SEO
- Dashboard GA4 (rapport acquisition organique, conversions leads).
- Google Search Console : suivre impressions/mots clés, monitorer Core Web Vitals.
- Reporting mensuel (Top 10 requêtes, clics, CTR, positions).

