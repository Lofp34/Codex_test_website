# Plan de conception — Site "Laurent Serre • Coaching intensif à la vente"

## 1. Objectifs business & KPIs
- **Objectifs principaux** :
  - Générer des leads qualifiés (PME B2B réalisant 5 à 50 M€ de CA) sur Montpellier/Occitanie et Paris.
  - Obtenir des prises de rendez-vous pour un diagnostic gratuit et vendre l'offre phare à 5 000 € pour 6 commerciaux.
- **KPIs suivis** :
  - Taux de conversion visite → lead ≥ 2 à 5 %.
  - Minimum 3 demandes de diagnostic par mois.
  - Performance Web : LCP < 2,5 s, score Lighthouse ≥ 90 en Performance/Accessibilité/Best Practices/SEO.

## 2. Cibles & personas
| Persona | Fonction | Contexte | Besoins clés | Déclencheurs |
| --- | --- | --- | --- | --- |
| **Paul, dirigeant fondateur** | CEO PME tech/SaaS | Équipe de 8 commerciaux, croissance plateau | ROI rapide, coaching opérationnel | Besoin d'un sprint d'accélération, recommandations pair-à-pair |
| **Nathalie, directrice commerciale** | Directrice des ventes industrie | Équipe de 12 commerciaux | Structurer discours, accélérer closing | Formation intensive, éligible financement |
| **Karim, DRH B2B services** | DRH | Harmoniser compétences vente, fidéliser équipe | Parcours modulable, preuves d'impact | Cas clients locaux, certification Qualiopi |

## 3. Positionnement & promesses
- **Signature** : *"Coaching intensif, hybride et sur-mesure pour doper vos ventes en 1 à 3 mois."*
- **Différenciateurs** :
  1. Programme hybride (3 visios + 1 journée présentielle) centré sur la pratique.
  2. ROI mesurable : objectifs chiffrés, suivi à 30/60/90 jours.
  3. Offre premium accessible : 5 000 € pour 6 commerciaux (≈ 833 €/pers.), éligible OPCO/CPF.
  4. Présence locale Montpellier/Occitanie & Paris avec réseau CCI/French Tech.

## 4. Parcours utilisateurs & architecture
1. **Accueil** : message clé, preuve sociale, CTA « Diagnostic gratuit » + CTA secondaire « Télécharger le programme ».
2. **Méthode & ROI** : déroulé du programme, indicateurs mesurés, méthodologie.
3. **Offres** : trois formules (Sprint 1 mois, Parcours 3 mois, Workshop Flash) + options.
4. **Cas clients** : études de cas sectorisées + témoignages vidéo.
5. **Diagnostic** : formulaire qualifiant multi-étapes + intégration Calendly.
6. **Pages locales** : /montpellier et /paris optimisées SEO local (NAP, carte, événements locaux).
7. **Ressources** : blog, webinaires (inscriptions/replays), lead magnets.
8. **Financements** : informations OPCO/Qualiopi, guides.
9. **À propos** : parcours de Laurent Serre, certifications, médias.
10. **Légal** : mentions, politique de confidentialité, cookies (Consent Mode v2).

**Flux principal** : Accueil → Méthode/ROI → Offres → Cas clients → Diagnostic → Calendly/HubSpot.

## 5. Structure de navigation
- Header sticky : logo, navigation (Accueil, Offres, Méthode & ROI, Cas clients, Ressources, Financements, À propos, Diagnostic).
- CTA « Diagnostic gratuit » dans le header + duplication dans hero.
- Footer : navigation secondaire, pages légales, coordonnées, NAP, réseaux sociaux, newsletter.

## 6. Contenus & messages clés
- **Preuves & ROI** :
  - Étapes : évaluation initiale → objectifs chiffrés → entraînement intensif → suivi 30-90 jours.
  - KPI monitorés : taux de transformation, panier moyen, deals signés, vélocité pipeline.
  - Encadré pricing : « À partir de 5 000 € pour 6 commerciaux (≈ 833 € / pers.) – éligible OPCO* ».
- **Offre Sprint 1 mois** : 3×3h visio (prospection, découverte/argumentaire, négociation/closing) + 1 journée présentielle. Inclut scripts, jeux de rôle filmés, plan d'action, call suivi J+30. Options : coaching manager, mentoring 3 mois.
- **CTA** : « Demander un diagnostic gratuit », « Télécharger le programme PDF », « Voir une étude de cas », « Réserver une place au prochain webinaire ».
- **Ton éditorial** : direct, énergique, orienté résultats ; utiliser verbes d'action (« accélérer », « doper », « signer plus vite »).

## 7. Fonctionnalités prioritaires
- Formulaire multi-étapes connecté HubSpot (voir spécification dédiée).
- Intégration Calendly avec slots Montpellier, Paris, Visio (iframe + événements GA4).
- Connexion HubSpot CRM (création contact, workflows nurturing, scoring MQL/SQL).
- Intégration GA4 via Google Tag Manager, suivi conversions, Consent Mode v2.
- Blog & webinaires gérés via CMS headless (Sanity/Contentful), replays hébergés (Vimeo/YT non listé).
- Témoignages vidéo avec miniatures optimisées (lazy-load), carrousel logos partenaires.
- FAQ en accordéon accessible (ARIA, clavier).
- Bannière cookies avec gestion des préférences et script différé.

## 8. Exigences techniques
- **Stack** : Next.js 14 (App Router, SSR/ISR), déploiement Vercel.
- **Performance** : images optimisées (next/image), lazy-load vidéos, compression Brotli/Gzip, pré-chargement polices.
- **Accessibilité** : contraste AA, focus visibles, labels explicites, navigation clavier.
- **SEO** : sitemap, robots, structured data JSON-LD (Organization, LocalBusiness, Service, Product, FAQPage, Article, Event).

## 9. Planning prévisionnel
| Phase | Livrable | Durée |
| --- | --- | --- |
| Discovery | Validation contenus & parcours | 1 semaine |
| Design | Wireframes low-fi + UI kit | 1,5 semaine |
| Contenus SEO | Rédaction métas, gabarits, FAQs | 1 semaine |
| Dév & intégrations | Next.js + CMS + HubSpot + Calendly | 3 semaines |
| QA & optimisation | Tests E2E, Lighthouse, RGPD | 1 semaine |
| Go-live | Mise en prod & handover | 0,5 semaine |

## 10. Gouvernance & suivi
- **Pilotage** : Laurent Serre + agence (weekly stand-up, KPI dashboard HubSpot/GA4).
- **Maintenance** : monitoring uptime (Vercel), sauvegardes CMS, mises à jour trimestrielles.
- **Reporting** : rapport mensuel sur leads, conversion, engagement contenus.

