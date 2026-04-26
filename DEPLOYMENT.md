# Deploiement Teranga Tech + Sanity Studio

## Option recommandee

Deployer le projet Next.js complet sur Vercel.  
Le Studio Sanity embarque sera alors disponible publiquement sur :

`https://votre-domaine/studio`

## Pre-requis

- Le depot GitHub est deja configure :
  `https://github.com/Fly-Teranga/terangaTech.git`
- Le projet build correctement en local avec :
  `npm run build`

## Variables d'environnement a ajouter dans Vercel

Dans le projet Vercel, ajouter les variables suivantes :

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=wwbtif9w
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-01
SANITY_API_WRITE_TOKEN=...
```

## Etapes de deploiement sur Vercel

1. Aller sur `https://vercel.com/new`
2. Importer le depot `Fly-Teranga/terangaTech`
3. Laisser Vercel detecter automatiquement Next.js
4. Ajouter les variables d'environnement ci-dessus
5. Lancer le deploy

## URL Studio a enregistrer dans Sanity

Une fois le deploy termine, recuperer l'URL publique du site.

Exemples :

- `https://teranga-tech.vercel.app/studio`
- `https://www.votredomaine.com/studio`

Puis dans Sanity Manage :

1. Ouvrir le projet `wwbtif9w`
2. Aller dans la section `Add studio` / `Custom studio URL`
3. Coller l'URL publique finissant par `/studio`

## Verification apres deploiement

Verifier que les pages suivantes repondent :

- `/`
- `/actualites`
- `/services`
- `/studio`
- `/api/actualites`
- `/api/services`

## Note importante

Le champ `SANITY_API_WRITE_TOKEN` est utile pour les scripts d'ecriture comme le seed.
Si tu ne veux pas exposer cette capacite en production, tu peux ensuite utiliser un token plus restreint selon tes besoins editoriaux.
