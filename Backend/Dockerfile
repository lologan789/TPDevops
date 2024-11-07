# Utiliser une image Node officielle
FROM node:18

# Créer et définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste du projet dans le conteneur
COPY . .

# Exposer le port utilisé par le serveur
EXPOSE 3000

# Démarrer l'application
CMD ["node", "server.js"]