/* ====== CATALOGUE LONDONBUSINESS ======
   Pour ajouter un produit : copiez une ligne dans 'products', changez les textes,
   déposez la photo dans le dossier images/ et indiquez son chemin dans 'i'.
   c = identifiant du catalogue, n = nom, d = description, p = prix (laisser "" = Prix sur demande) */
const DATA = {
  cats: [
    {"id": "sante", "name": "Compléments alimentaires"},
    {"id": "auto", "name": "Accessoires de véhicules"}
  ],
  products: [
    {"c": "sante", "n": "Forever Aloe Vera Gel", "d": "Boisson à l'aloe vera, sans sucre. Confort digestif, hydratation, soutien immunitaire.", "p": "", "i": "images/forever-aloe-vera-gel.jpg"},
    {"c": "sante", "n": "Forever Aloe Vera Gel (infographie)", "d": "Pourquoi boire de l'aloe vera chaque jour : digestion, peau hydratée, antioxydants.", "p": "", "i": "images/forever-aloe-vera-gel-infographie.jpg"},
    {"c": "sante", "n": "Forever Aloe Berry Nectar", "d": "Nectar d'aloe vera aux fruits rouges, sans conservateur.", "p": "", "i": "images/forever-aloe-berry-nectar.jpg"},
    {"c": "sante", "n": "Aloe Lips avec jojoba", "d": "Baume à lèvres Forever à l'aloe vera et au jojoba, hydratation quotidienne.", "p": "", "i": "images/aloe-lips-avec-jojoba.jpg"},
    {"c": "sante", "n": "Lyftmax — Dynace Global", "d": "Produit de bien-être Dynace Global : « Firm Up, Spice Up with Confidence ».", "p": "", "i": "images/lyftmax-dynace-global.jpg"},
    {"c": "auto", "n": "Liquide de refroidissement 5 L", "d": "Radiator Coolant Aqua pour tous véhicules et moteurs lourds.", "p": "", "i": "images/liquide-de-refroidissement-5-l.jpg"},
    {"c": "auto", "n": "Filtres : huile, air, habitacle, carburant", "d": "Large choix de filtres pour toutes marques.", "p": "", "i": "images/filtres-huile-air-habitacle-carburant.jpg"},
    {"c": "auto", "n": "Disques et plaquettes de frein", "d": "Kit de freinage avant : disques ventilés et plaquettes.", "p": "", "i": "images/disques-et-plaquettes-de-frein.jpg"},
    {"c": "auto", "n": "Disque de frein arrière", "d": "Disque plein, disponible selon modèle de véhicule.", "p": "", "i": "images/disque-de-frein-arriere.jpg"},
    {"c": "auto", "n": "Pièces de suspension", "d": "Amortisseurs, ressorts, rotules, biellettes, coupelles et bras.", "p": "", "i": "images/pieces-de-suspension.jpg"},
    {"c": "auto", "n": "Kit de suspension complet", "d": "Amortisseurs, bras de suspension et coupelles.", "p": "", "i": "images/kit-de-suspension-complet.jpg"},
    {"c": "auto", "n": "Batterie, alternateur, démarreur", "d": "Pièces électriques pour démarrage et recharge.", "p": "", "i": "images/batterie-alternateur-demarreur.jpg"},
    {"c": "auto", "n": "Batteries DIN100MF 12V", "d": "Batteries fiables : Vatar Pro Sportif et WHLI Storage Battery.", "p": "", "i": "images/batteries-din100mf-12v.jpg"},
    {"c": "auto", "n": "Jantes et pneus", "d": "Jantes alliage et pneus Bridgestone, selon modèle.", "p": "", "i": "images/jantes-et-pneus.jpg"},
    {"c": "auto", "n": "Résistance de pulseur (ventilation)", "d": "Résistance de ventilateur d'habitacle, selon modèle.", "p": "", "i": "images/resistance-de-pulseur-ventilation.jpg"}
  ]
};
