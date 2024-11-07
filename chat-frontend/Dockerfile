# Utiliser l'image de Node.js pour la construction
FROM node:alpine AS builder

# Créer un répertoire de travail
WORKDIR /app

# Copier package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier tout le reste des fichiers
COPY . .

# Construire l'application Angular pour production
RUN npm run build --configuration=production

# Utiliser l'image Nginx de base
FROM nginx:alpine

# Copier le fichier de configuration Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers construits depuis Angular dans le répertoire Nginx
COPY --from=builder /app/dist/chat-frontend/browser /usr/share/nginx/html

# Changer les permissions des fichiers copiés
RUN chmod -R 755 /usr/share/nginx/html

# Exposer le port 80 pour que le conteneur puisse être accessible
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
