# Basis-Image verwenden (z. B. Node.js)
FROM node:16

# Arbeitsverzeichnis festlegen
WORKDIR /usr/src/app/

# Abhängigkeiten kopieren und installieren
COPY package.json /usr/src/app/
RUN npm install
RUN npm install -g serve

# Anwendungscode kopieren
COPY ./build /usr/src/app/build

# Port freigeben
EXPOSE 8080

# Startbefehl
CMD ["npm", "run", "serve"]