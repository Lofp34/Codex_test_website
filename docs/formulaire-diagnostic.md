# Spécification — Formulaire diagnostic multi-étapes

## Objectifs
- Qualifier les leads avant intégration HubSpot.
- Distribuer les rendez-vous vers Montpellier, Paris ou Visio via Calendly.
- Alimenter le scoring HubSpot (MQL vs SQL) et déclencher les séquences nurturing.

## Architecture technique
- Composant React `DiagnosticWizard` (Next.js) utilisant `react-hook-form` + `zod` pour la validation.
- 4 étapes, progression visuelle (barre 0-100 %) + résumé final.
- Soumission via HubSpot Forms API (endpoint `https://api.hsforms.com/submissions/v3/integration/submit/:portalId/:formGuid`).
- Enregistrement optionnel dans Supabase (`leads_diagnostic`) pour analytics enrichies.
- Consentement RGPD : double opt-in HubSpot + case obligatoire.

## Étapes & champs
### Étape 1 — Profil entreprise
| Champ | Type | Options | Validation | Mapping HubSpot |
| --- | --- | --- | --- | --- |
| Secteur d'activité | Select | Tech/SaaS, Industrie, Services B2B, Distribution, Autre | Requis | `industry_segment` |
| Chiffre d'affaires annuel | Select | 5–10 M€, 10–20 M€, 20–35 M€, 35–50 M€, > 50 M€ | Requis | `annual_revenue_bracket` |
| Taille équipe commerciale | Select | 3–5, 6–10, 11–15, 16+ | Requis | `sales_team_size` |
| Localisation souhaitée | Radio | Montpellier, Paris, Hybride | Requis | `preferred_location` |

### Étape 2 — Objectifs & freins
| Champ | Type | Détails | Validation | Mapping |
| --- | --- | --- | --- | --- |
| Objectifs 90 jours | Checkbox multiple | Augmenter prospection, Mieux qualifier, Accélérer négociation, Standardiser pitch, Autre | Min. 1 | `goal_90_days` |
| Principaux freins | Checkbox multiple + champ "Autre" | Manque de méthode, Formation peu pratico-pratique, Turn-over, Cycle trop long, Autre | Min. 1 | `main_blockers` |
| Commentaire libre | Textarea (300 char max) | Contexte | Optionnel | `additional_context` |

### Étape 3 — Budget & temporalité
| Champ | Type | Options | Validation | Mapping |
| --- | --- | --- | --- | --- |
| Financement envisagé | Checkbox | OPCO, CPF, Autofinancement, À étudier | Min. 1 | `funding_options` |
| Délai de décision | Select | < 30 jours, 30–60 jours, 60–90 jours, > 90 jours | Requis | `decision_timeline` |
| Urgence du besoin | Slider 1–5 | 1 = exploratoire, 5 = urgent | Requis | `urgency_score` |

### Étape 4 — Coordonnées & consentement
| Champ | Type | Validation | Mapping |
| --- | --- | --- | --- |
| Nom complet | Text | Requis (min. 2 caractères) | `firstname` + `lastname` (split) |
| Fonction | Text | Requis | `jobtitle` |
| Email pro | Email | Requis (format) | `email` |
| Téléphone | Tel | Requis (regex FR/intl) | `phone` |
| Consentement RGPD | Checkbox | Requis | `legal_consent` |
| Opt-in email | Checkbox | Facultatif | `hs_email_opt_in` |

## Post-soumission
1. Afficher écran de confirmation personnalisé selon localisation choisie.
2. CTA « Réserver un créneau » ouvrant Calendly (URL paramétrée `utm_source=site&utm_medium=diagnostic&utm_campaign=coaching_vente`).
3. En cas de Montpellier/Paris, afficher aussi coordonnées locales + Google Map.
4. Envoi email de confirmation via workflow HubSpot (avec PDF programme en PJ).

## Tracking & analytics
- Événements GTM : `wizard_step_view`, `wizard_field_change`, `wizard_submit_success`, `wizard_submit_error`.
- Champs hidden : `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content` + `gclid`, `ga_client_id`.
- Consent Mode : charger scripts HubSpot/GTM uniquement après consentement.

## Accessibilité & UX
- Navigation clavier (tab order logique, focus visible).
- Annoncer progression via `aria-live`.
- Boutons « Retour » et « Continuer » clairement libellés.
- Auto-save localStorage (clé `diagnosticWizardDraft`) pour éviter perte saisie.

