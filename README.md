## PROJET ANGULAR: MASTER 2 MBDS
 Nom des participants:
- YANKINE Aicha
- DEBY Cherubin

*************************************************
Présentation du projet
Titre :Conception d'une application pour la gestion des devoirs des étudiants.

Ce projet a pour but de fournir une solution fiable et complète pour la gestion des devoirs étudiants. Il associe une interface utilisateur conviviale à un backend robuste, permettant la création, la modification et la suppression des devoirs. Des fonctionnalités avancées, telles que l'authentification des utilisateurs et la gestion de leurs autorisations, sont également intégrées. Cette approche rend la gestion des devoirs plus efficace et sécurisée, tout en répondant de manière optimale aux attentes des utilisateurs.**

Les différentes fonctionnalités
s'authentifier : Le système d'authentification repose sur JSON Web Tokens (JWT), permettant une gestion des utilisateurs avec différents niveaux de permissions (utilisateur et administrateur). L'utilisateur se connecte via un identifiant et un mot de passe pour accéder au Dashboard, où il peut visualiser les cours et ajouter des devoirs. Notez que les autres sections présentes dans le menu latéral sont réservées à l'administrateur, et l'utilisateur n'y a pas accès.**

accéder au Dashboard: Après l'authentification, l'utilisateur accède au Dashboard avec les fonctionnalités suivantes :**

-Accueil : En cliquant sur l'icône "Accueil", l'utilisateur peut consulter l'ensemble des devoirs. -Informations : En cliquant sur le bouton "Informations", l'utilisateur peut afficher les détails d'un devoir, incluant le nom, la date limite de rendu, la photo de l'enseignant et la note attribuée. Si le devoir n'a pas été rendu à temps, il est marqué comme "Non Rendu" en rouge ; si le devoir est rendu dans les délais, il apparaît comme "Rendu" en vert. -Recherche et tri: L'utilisateur peut effectuer une recherche et trier les devoirs selon différents critères pour faciliter la gestion.

Les Profil : L'accès au profil de l'utilisateur se fait en cliquant sur l'icône de profil située en haut à droite de la page. À partir de là, l'utilisateur peut :

-Consulter ses informations personnelles, telles que son nom, son adresse e-mail et son rôle (ADMIN ou utilisateur standard). -Modifier ses informations en cliquant sur le bouton "Modifier" en bas à droite de la fenêtre. -Enregistrer les modifications en cliquant sur "Enregistrer" ou annuler l'opération en sélectionnant "Annuler".

En tant qu'administrateur, utilisez les identifiants suivants :

Adresse e-mail : aichayankine76@gmail.com

Mot de passe : 1234

En tant qu'utilisateur standard, utilisez les identifiants suivants :

Adresse e-mail : konan@gmail.com

Mot de passe : 1234

Autre utilisateur standard :

Adresse e-mail : deby@gmail.com

Mot de passe : 1234

En local :

Récupération du projet depuis Git : Utilisez la commande git clone pour récupérer à la fois le backend et le frontend du projet. Placez ces fichiers dans un dossier de votre choix sur votre système.

Configuration de l'environnement de développement : Ouvrez votre éditeur de texte préféré (par exemple, Sublime Text ou Visual Studio Code). Utilisez le terminal intégré ou un terminal séparé pour naviguer vers le dossier contenant votre projet en utilisant la commande cd.

Installation des dépendances : Dans le terminal, exécutez la commande npm install ou npm i pour installer toutes les dépendances nécessaires au projet.

Lancement du serveur backend : Démarrez le serveur backend en exécutant la commande node server.js. Assurez-vous que le serveur s'exécute correctement et écoute sur le port spécifié.

Lancement de l'application web : Lancez l'application frontend en exécutant la commande ng serve. Cette commande démarrera le serveur de développement Angular et vous permettra d'accéder à l'application via un navigateur web.

Connexion et interactions : Une fois l'application lancée, ouvrez un navigateur et accédez à l'URL fournie par le serveur de développement. Connectez-vous en utilisant les identifiants appropriés en fonction de votre statut d'utilisateur (administrateur ou utilisateur standard). Vous pourrez alors interagir avec l'application selon les permissions de votre rôle.

VII - Les Liens

-Sidebar Navigation [CodePen - Sidebar Navigation] https://codepen.io/yh10050846/pen/mdJeYbR Exemple de navigation latérale responsive avec des transitions fluides. Nous avons consulté cet exemple pour implémenter une sidebar fonctionnelle et élégante dans notre projet.

-Image Gallery CodePen - Image Gallery Galerie d'images élégante créée avec HTML, CSS et JavaScript. Nous avons adapté le concept de cette galerie pour améliorer l'affichage des images dans notre application.

-Animation Loader CodePen - Animation Loader Un modèle d'animation de chargement élégant en HTML, CSS et JavaScript, que nous avons utilisé comme référence pour intégrer une animation de chargement dynamique dans notre application.

-Image Gallery CodePen - Image Gallery Galerie d'images élégante créée avec HTML, CSS et JavaScript. Nous avons adapté le concept de cette galerie pour améliorer l'affichage des images dans notre application.

-Multi-step Form CodePen - Multi-step Form Formulaire multi-étapes avec une validation simple, parfait pour des processus de saisie d’informations complexes. Nous avons utilisé cette ressource pour créer un formulaire similaire dans notre application.

-Form Validation CodePen - Form Validation Code de validation de formulaire en HTML et JavaScript. Nous avons utilisé cet exemple pour mettre en place la validation des formulaires dans notre projet et assurer une gestion des erreurs efficace.

-Material Design Cards CodePen - Material Design Cards Ensemble de cartes au style Material Design, comprenant des animations et une mise en page responsive. Nous avons intégré des éléments de ce design pour enrichir l’affichage des devoirs dans notre application.

-PrimeReact - Component Library PrimeReact - Component Library Bibliothèque de composants React utilisée pour améliorer l’interface utilisateur de notre application, incluant des composants tels que des formulaires, des tableaux, et des graphiques riches en fonctionnalités.