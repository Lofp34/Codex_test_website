# UI Kit — Laurent Serre Coaching

## 1. Palette de couleurs
| Usage | Couleur | Hex | Alternatives |
| --- | --- | --- | --- |
| Primaire énergie | Orange brûlé | `#F15A29` | Gradient `#F15A29` → `#FF7A45` |
| Primaire contraste | Bleu nuit | `#0A2342` | `#12284A` |
| Secondaire confiance | Bleu clair | `#1F6FEB` | |
| Accent succès | Vert sapin | `#1B9A59` | |
| Fond clair | Gris très pâle | `#F7F7F9` | |
| Fond foncé | Bleu marine profond | `#061427` | |
| Texte principal | Gris anthracite | `#1E1E24` | |
| Texte secondaire | Gris moyen | `#4F566B` | |
| Bordures/dividers | Gris clair | `#D9DFE7` | |
| Alerte | Rouge framboise | `#D7263D` | |

- Ratio contraste : vérifier minimum 4.5:1 sur texte / background.
- Utiliser dégradé primaire sur CTA principaux (hover : éclaircir + ombre douce `0 8px 20px rgba(241,90,41,0.3)`).

## 2. Typographies
- **Titres** : `Poppins` (600/700), fallback `Helvetica Neue`, `Arial`, sans-serif.
- **Textes courants** : `Inter` (400/500), fallback `system-ui`.
- **Chiffres & KPI** : `Space Grotesk` (500) pour assurer lisibilité.
- Chargement via `next/font/google` (optimisation + subsets latin).

### Hiérarchie typographique
| Niveau | Font | Taille | Interlignage | Usage |
| --- | --- | --- | --- | --- |
| H1 | Poppins 700 | 56 px desktop / 36 px mobile | 110 % | Hero, titres principaux |
| H2 | Poppins 600 | 40 px / 30 px | 120 % | Sections clés |
| H3 | Poppins 600 | 28 px / 24 px | 130 % | Sous-sections |
| Paragraphe | Inter 400 | 18 px / 16 px | 150 % | Texte courant |
| Légende | Inter 400 | 14 px | 150 % | Captions, indices |
| Bouton | Poppins 600 | 18 px | 120 % | CTA |

## 3. Boutons & états
- **CTA principal** : fond dégradé orange, texte blanc, bords 8 px, padding 16×28.
  - Hover : gradient plus clair + translation `transform: translateY(-2px)`.
  - Focus : outline 2 px `#1F6FEB` + shadow.
- **CTA secondaire** : contour bleu nuit (`border: 2px solid #0A2342`), texte bleu nuit, fond transparent, hover fond bleu nuit très clair.
- **CTA tertiaire** : lien texte souligné avec icône flèche.
- Bouton d'accordéon : fond gris clair, iconographie `+`/`-`, transition 0.2s.

## 4. Cartes & composants
- **Carte offre** : bordure 1 px gris clair, shadow douce `0 20px 40px rgba(10,35,66,0.08)`, badge tarif, liste bullet, [CTA].
- **Carte étude de cas** : image 16:9 en haut (lazy-load), titre, KPI (icônes), lien.
- **Bloc témoignage** : avatar circulaire, citation en italique, bouton play vidéo.
- **Barre KPI** : fond bleu nuit, texte blanc, icônes line `stroke-width:2`.
- **Timeline** : segments horizontaux avec icônes circulaires.

## 5. Icônes & illustrations
- Pack : `Phosphor Icons` ou `Lucide` en outline 24 px.
- Illustrations : photos réelles ateliers, converties en WebP, fallback JPEG.
- Vidéos : thumbnails custom (overlay play) pour optimiser LCP.

## 6. Formulaires
- Champs arrondis 6 px, bordure gris clair, focus border `#1F6FEB`.
- Erreur : bordure rouge + message en Inter 14 px rouge framboise.
- Labels au-dessus du champ, mention "(requis)" en texte secondaire.
- Étapes du wizard : puces numérotées + progress bar.

## 7. Grille & layout
- Grille responsive 12 colonnes, gutter 24 px desktop / 16 px mobile.
- Conteneur max 1200 px, marges latérales 64 px desktop, 24 px mobile.
- Sections pleine largeur pour hero, barres KPI, CTA final.

## 8. Effets & micro-interactions
- Scroll reveal léger (fade-up 40 px) avec `framer-motion` ou `IntersectionObserver`.
- Accordéons : transition hauteur + rotation icône.
- CTA : ripple discret sur clic (`scale` 0.98).
- Témoignages vidéo : autoplay muted on hover desktop, bouton "voir la transcription".

## 9. Accessibilité
- Tester navigation clavier, focus visible.
- Alt text descriptifs sur images (ex : "Laurent Serre anime un atelier de négociation").
- Transcript audio/vidéo obligatoire.
- Couleurs testées via `axe` et `lighthouse`.

