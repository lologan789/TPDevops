# TPDevops
 
**NOMS BINOME : GODDARD Logan et JOURDAN Kevin**

Notre application est une simple chat box sur laquelle on peut envoyer des messages et qui envoie une une reponse automatique a ceux-ci.


**Déploiement de l'Application sur Kubernetes**

Ce projet contient une application Angular en frontend et un backend, déployables sur un cluster Kubernetes.

*Prérequis*

Avant de commencer, assurez-vous d'avoir les éléments suivants :

- Docker
- Minikube
- kubectl
- Docker Hub

**Étapes pour Déployer sur Kubernetes**

1. Configurer Minikube (ou un autre cluster)
Démarrez un cluster Kubernetes local avec Minikube :

minikube start

2. Créer les Manifestes Kubernetes
Assurez-vous que les fichiers suivants sont dans votre répertoire k8s/ :

frontend-deployment.yaml
backend-deployment.yaml

Ces manifestes devraient inclure :

Deployments pour décrire les pods de frontend et backend.

3. Déployer les Manifestes sur Kubernetes
Déployez les manifestes dans le cluster Kubernetes local :

kubectl apply -f k8s/

4. Accéder à l'Application
Une fois les services déployés, vous pouvez exposer votre service frontend pour le tester localement avec Minikube :

minikube service frontend