# Laurent Serre • Coaching intensif à la vente

Première version du site web construite avec [Vite](https://vitejs.dev/) et [React](https://react.dev/). L’interface propose les
pages clés décrites dans le brief : offres, méthode, cas clients, ressources, formulaires diagnostics et pages locales
Montpellier/Paris.

## Démarrage

```bash
npm install
npm run dev
```

## Scripts disponibles

| Commande        | Description                                      |
| --------------- | ------------------------------------------------ |
| `npm run dev`   | Lance le serveur de développement Vite           |
| `npm run build` | Construit l’application pour la production       |
| `npm run preview` | Prévisualise la version produite après build |

## Structure

- `src/components` : layout, navigation, utilitaires.
- `src/pages` : pages React correspondant à l’arborescence.
- `src/data` : contenus statiques (offres, cas, FAQ…).
- `src/hooks` : hooks utilitaires (gestion du titre de page).
- `src/App.jsx` : configuration du router.

## Contenu & intégrations

- Formulaire diagnostic multi-étapes avec validation.
- Sections Preuves & ROI, timeline méthode, témoignages et FAQ accordéon.
- Pages locales avec cartes Google Maps intégrées.
- Scripts JSON-LD pour Organisation, Service et FAQ.
