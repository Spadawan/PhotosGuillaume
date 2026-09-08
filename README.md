# Les échappées de Guillaume

Galerie responsive, diaporama (4,5 secondes), visionneuse, zoom, plein écran, navigation au clavier et balayage tactile. L’Admin permet de créer, renommer, ordonner et supprimer des dossiers, puis d’ajouter, déplacer, supprimer, réordonner et convertir les photos en WebP (qualité 80 %, grand côté 2 560 px maximum).

## Hébergement GitHub Pages

1. Créer un dépôt GitHub et y pousser ce projet sur la branche `main`.
2. Dans Settings → Pages, choisir **GitHub Actions** comme source.
3. Le workflow `.github/workflows/pages.yml` publie automatiquement la galerie. L’adresse du site est affichée dans le déploiement GitHub Pages.

La galerie statique partage la même API que la version Sites. GitHub Pages ne peut pas exécuter la partie serveur : https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

L’API configurée par défaut est `https://carnet-de-guillaume.simon-paindavoine.chatgpt.site/api/gallery`. Elle doit être publiée et accessible publiquement. Le domaine autorisé pour GitHub Pages est `https://spadawan.github.io`. Pour un autre propriétaire ou domaine, modifier `ALLOWED_ORIGIN` sur le service serveur. Si l’API change, définir la variable de dépôt GitHub `GALLERY_API` avant de republier.

Le dossier `github-pages/` est aussi un export prêt à publier, avec chemins relatifs compatibles avec les sous-dossiers GitHub Pages.

## Données et accès Admin

- Les originaux envoyés sont enregistrés dans R2. Les métadonnées, positions et sessions sont dans D1. Les données survivent aux rechargements et sont partagées entre visiteurs.
- Le code Admin est défini exclusivement dans le secret serveur `ADMIN_CODE`, jamais dans le JavaScript public. Il peut être changé via les variables d’environnement Sites, suivi d’une publication.
- Les sessions aléatoires expirent après 12 heures. Le jeton reste en mémoire dans l’onglet ; recharger la page exige de se reconnecter. Déconnexion révoque la session côté serveur.
- Limitation de connexion : 10 tentatives par IP et fenêtre de 15 minutes.
- JPG, PNG et WebP uniquement, maximum 20 Mo par photo, 500 photos par album. Les signatures de fichiers sont contrôlées côté serveur.
- L’optimisation se fait localement dans le navigateur, une photo à la fois. Elle remplace la version hébergée et retire les métadonnées EXIF ; conserver les originaux sur son ordinateur. Un WebP existant n’est remplacé que si le résultat est plus petit.
- Le code protège la modification, pas la consultation des images. L’album est accessible aux visiteurs du site.
- Aucun ajout en base n’est fait pour les photos de démonstration. Elles disparaissent à l’ajout de la première vraie photo. Un album vidé reste vide.

## Développement

`npm ci`, puis `npm run dev` pour le serveur de développement. `npm run build` pour la version Sites. `npx vite build --config vite.gallery.config.ts` pour l’export statique GitHub Pages.

Bindings serveur : D1 `DB`, R2 `BUCKET`. Variables serveur : `ADMIN_CODE` (secret), `PUBLIC_ORIGIN`, `ALLOWED_ORIGIN`. Le schéma se trouve dans `db/schema.ts`, les migrations dans `drizzle/`. Les paramètres `.openai/hosting.json` identifient la version Sites ; ne pas réutiliser cet identifiant pour un autre site.

## Crédits des photos de démonstration

Photographies provenant d’Unsplash, utilisées comme exemples et non comme photos personnelles de Guillaume.

- Positano : Thomas Bormans — https://unsplash.com/photos/NTLB-2WhkYw
- Lac alpin : Pietro De Grandi — https://unsplash.com/photos/T7K4aEPoGGk
- Rue italienne : Will Pantaleo — https://unsplash.com/photos/05aZ-1nGgGc
- Plage : Simon Spring — https://unsplash.com/photos/BJ-FvNGCfEY
- Montagnes : hajperlink — https://unsplash.com/photos/z_89rc91qCM
- Côte italienne : Christopher Pap de Pestény — https://unsplash.com/photos/K5wuHnrB6R0
