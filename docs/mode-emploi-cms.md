# Mode d'emploi — Gestion du contenu

## 1. Structure CMS (Sanity ou Contentful)
- **Schéma Page** : slug, title, description, blocks (hero, sections dynamiques), SEO (title/meta/OG), JSON-LD optionnel.
- **Schéma Article** : titre, accroche, auteur, date, contenu rich text, CTA, tags, image hero, transcript vidéo.
- **Schéma Cas client** : titre, secteur, taille équipe, localisation, problématique, solutions, résultats, témoignage, médias.
- **Schéma Webinar** : titre, date, intervenants, formulaire d'inscription (HubSpot form ID), replay vidéo, ressources.
- **Schéma FAQ** : question, réponse, catégorie (Offres, Diagnostic, Financement).
- **Schéma Témoignage** : nom, fonction, entreprise, citation, vidéo, note.

## 2. Workflow de publication
1. **Rédaction** dans Google Docs → validation interne → import via Sanity Studio.
2. **SEO check** : remplir champs meta title (60 char max), meta description (155 char max), slug optimisé (mots-clés séparés par tirets).
3. **JSON-LD** : cocher templates (Organization, LocalBusiness, Service) + renseigner champs dynamiques (prix, zone).
4. **Prévisualisation** : utiliser preview live (`/api/preview`) pour vérifier mise en forme.
5. **Publication** : statut `published` → déclenche build ISR sur Vercel (webhook).

## 3. Création d'une nouvelle page
1. Créer une entrée "Page" dans le CMS avec slug (ex : `bootcamp-vente`).
2. Composer sections via builder : hero, texte + image, stats, CTA.
3. Ajouter CTA diagnostic (component global) + SEO.
4. Publier → vérifier sur site (URL). Ajouter liens internes dans pages existantes.

## 4. Publication article de blog
1. Nouveau document "Article".
2. Ajouter cover image (1200×630, < 200 Ko) + alt text.
3. Renseigner plan H2/H3, bullet points, CTA vers diagnostic.
4. Ajouter schema `Article` + `BreadcrumbList` automatique.
5. Publier → diffuser via HubSpot (email nurturing + réseaux sociaux).

## 5. Gestion webinaires
- Formulaire d'inscription : créer HubSpot form dédié (champs : nom, email, entreprise, taille équipe).
- Dans CMS, associer ID du formulaire et URL replay.
- Après événement : uploader replay (Vimeo non listé), ajouter aux ressources.
- Mettre à jour CTA sur pages locales + blog.

## 6. Mise à jour cas clients
- Collecter data : KPIs avant/après, citation, visuels.
- Ajouter média (photo/vidéo) + transcript.
- Cocher région (Montpellier/Paris) pour filtres dynamiques.
- Publier → vérifier cross-link sur pages locales et accueil.

## 7. Maintenance
- Sauvegarde hebdo : exporter dataset Sanity (`sanity dataset export production backups/$(date)`).
- Contrôle qualité trimestriel : vérifier liens cassés, images lourdes, métas.
- Gestion utilisateurs : donner accès éditeur à l'équipe Laurent (droits restreints), administrateur agence.

## 8. Support & évolutions
- Documentation interne sur Notion (captions vidéo, scripts email).
- Ticketing Trello/Asana pour demandes évolutions.
- SLA : réponse support < 48 h, corrections critiques < 24 h.

