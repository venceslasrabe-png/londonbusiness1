# Tunnel de vente LONDONBUSINESS

Parcours : **offre.html** (page de capture) → **merci.html** (remerciement) → **page de vente** (redirection automatique après 12 s ou clic sur le bouton).

## Fichiers
- `offre.html` : page de capture (Nom complet, Téléphone, Email + consentement). Lien à diffuser dans vos publicités, statuts WhatsApp et publications.
- `merci.html` : page de remerciement avec bouton vers la page de vente et bouton WhatsApp.
- `config.js` : **lien de la page de vente** (`SALES_URL`), numéro WhatsApp, délai de redirection.
- `images/` : visuels de la page de capture.

## Mise en ligne (Netlify, même site que la boutique)
1. Copiez ces fichiers dans le dossier du site (à côté de `index.html`).
2. Redéposez le dossier sur app.netlify.com/drop (ou mettez à jour le dépôt GitHub).
3. Le formulaire « capture-londonbusiness » apparaît dans Netlify → *Forms*. Les contacts s'y enregistrent.
4. Notifications : *Forms → Form notifications → Add notification → Email* (doumbiayaya617@gmail.com).
5. Exportez les contacts en CSV depuis *Forms → Export CSV*.

## Changer la page de vente
Dans `config.js`, remplacez la valeur de `SALES_URL` par le lien de la page de vente. Actuellement : https://london-business.netlify.app/

## Important
- L'enregistrement des contacts fonctionne uniquement sur Netlify (ou un hébergeur avec formulaires). Hors Netlify, le formulaire affiche un message d'erreur avec un lien WhatsApp : aucun contact n'est perdu silencieusement.
- Netlify Forms gratuit : environ 100 envois par mois. Au-delà, passez à un plan payant ou connectez Google Sheets.
- Respectez la case de consentement : ne contactez que les personnes qui l'ont cochée.

## Liens du tunnel une fois en ligne
- Page de capture (à partager) : https://london-business.netlify.app/offre
- Page de remerciement : https://london-business.netlify.app/merci
- Page de vente : https://london-business.netlify.app/
