# Guide d'hébergement — LONDONBUSINESS

## 1. Contenu du dossier
| Fichier | Rôle |
|---|---|
| `index.html` | La boutique (page d'accueil, catalogue, panier, commande WhatsApp) |
| `produits.js` | La liste des produits et des catalogues (à modifier pour ajouter un produit) |
| `images/` | Les photos des produits |
| `connexion.html` | Page de connexion / création de compte (Google et Apple) |

Tout est statique : aucun serveur, aucune base de données à installer. Il suffit de mettre ce dossier en ligne.

## 2. Choisir un hébergeur (tous gratuits, HTTPS inclus)

### Option A — Netlify (la plus simple, 2 minutes)
1. Créez un compte sur netlify.com.
2. Allez sur **app.netlify.com/drop**.
3. Glissez-déposez le dossier complet. Le site est en ligne avec une adresse `xxx.netlify.app`.
4. Renommez le site : *Site configuration → Change site name* (ex. `londonbusiness`).

### Option B — GitHub Pages
1. Créez un dépôt GitHub (ex. `londonbusiness`), puis envoyez-y tous les fichiers à la racine.
2. *Settings → Pages → Branch: main / root → Save*.
3. Le site est disponible sur `https://VOTRE-COMPTE.github.io/londonbusiness/`.

### Option C — Cloudflare Pages
*Workers & Pages → Create → Pages → Upload assets* : déposez le dossier.

## 3. Nom de domaine (recommandé : `londonbusiness.com` ou similaire)
1. Achetez le domaine chez un registrar (Namecheap, OVH, Gandi, Google Domains/Squarespace…). Comptez environ 10 à 15 $ par an pour un `.com` (vérifiez le prix actuel).
2. Dans votre hébergeur : *Domain management → Add custom domain*.
3. Chez le registrar, ajoutez les enregistrements DNS que l'hébergeur vous indique (en général un enregistrement `A` ou `CNAME`). Propagation : de quelques minutes à 24 h.
4. Le certificat HTTPS est généré automatiquement.

## 4. Activer la connexion Google / Apple (`connexion.html`)
1. **console.firebase.google.com** → *Ajouter un projet* (gratuit).
2. *Paramètres du projet → Vos applications → Web (</>)* : copiez la configuration.
3. Ouvrez `connexion.html` et collez les valeurs dans `firebaseConfig` (`apiKey`, `authDomain`, `projectId`, `appId`).
4. *Authentication → Sign-in method → Google → Activer*.
5. *Authentication → Settings → Authorized domains → Ajouter* votre domaine (`londonbusiness.com` et l'adresse `xxx.netlify.app`).
6. **Apple** (facultatif) : compte Apple Developer requis (environ 99 $/an). Créez un *Service ID*, une clé *Sign in with Apple*, puis renseignez Service ID, Team ID, Key ID et clé privée dans *Authentication → Apple*. Dans Apple Developer, déclarez comme *Return URL* l'adresse `https://VOTRE-PROJET.firebaseapp.com/__/auth/handler`.
7. Remettez le fichier en ligne (nouveau glisser-déposer sur Netlify).

## 5. Personnaliser le site
- **Numéro WhatsApp** : dans `index.html`, remplacez `242053693004` (format international sans « + », 3 occurrences) et le texte `+242 05 369 3004`.
- **Adresse / email** : section « Contact » de `index.html`.
- **Ajouter un produit** : dans `produits.js`, copiez une ligne de `products`, modifiez `n`, `d`, `p` (prix, ex. `"15 000 FCFA"`), `c` (`sante` ou `auto`), puis déposez la photo dans `images/` et indiquez `"i":"images/ma-photo.jpg"`.
- **Ajouter un catalogue** : ajoutez une ligne dans `cats` (ex. `{"id":"pneus","name":"Pneus"}`) et utilisez `"c":"pneus"` sur ses produits.
- **Conseil images** : 700 px de large maximum, format JPG, moins de 150 Ko chacune.
- Après chaque modification : re-déposez le dossier (Netlify) ou faites un *commit* (GitHub Pages).

## 6. Liste de contrôle avant lancement
- [ ] Les boutons WhatsApp ouvrent bien le +242 05 369 3004
- [ ] Le panier envoie le message de commande correct
- [ ] Les prix sont renseignés (sinon « Prix sur demande »)
- [ ] L'image des batteries porte le bon numéro (l'ancienne affiche 053693004)
- [ ] Test sur téléphone (la majorité des clients)
- [ ] Connexion Google testée depuis le vrai domaine

## 7. Limites à connaître
- Le panneau « Ajouter un produit » du lien de prévisualisation ne fonctionne que sur claude.ai. Sur l'hébergement, les produits se modifient dans `produits.js`. Un vrai espace admin en ligne nécessiterait Firebase Firestore (possible en étape suivante).
- Les comptes Google/Apple ne gèrent que l'identité : historique de commandes et paniers enregistrés demandent une base de données.
- Le paiement en ligne (Mobile Money, carte) n'est pas inclus : les commandes se finalisent par WhatsApp.
