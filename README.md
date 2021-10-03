# Fetch crypto

---

#### Antonin Boinega | Thomas Excoffier

---

Cette application est réalisée dans le cadre du cours d'Intégration Continue & Containerisation.

Elle est en React et utilise l'api https://www.coingecko.com/api/documentations/v3 pour obtenir les données.

## Présentation du projet 

`https://github.com/excoffit/fetch-crypto`

Application ayant pour but d'afficher :
- Un top 100 des cryptos ayant les plus grosses capitalisations du marchés
- Un top 7 des cryptos en tendances

## Pré-requis 

- Docker version 20.10.8, build 3967b7d

## Lancement de l'application

 `docker run --rm -p 3000:3000 --name app-fetch excoffit/fetch-crypto:main`

Il faut ensuite se rendre sur `localhost:3000` afin d'utiliser l'application.

## CI/CD

La CI/CD se base sur les workflows github.

Elle se lance sur pull-request/merge sur la branche main et sur chaque release.

Elle se compose dans un premier d'un job de test qui build et lance les tests de l'image docker.

Une fois les tests passés cela se sépare en 2 parties :
- une partie pour la branche main
- une partie pour une release

Dans les 2 cas cela build et push une image docker sur le dockerhub `excoffit/fetch-crypto` avec le tag adéquat.




 


