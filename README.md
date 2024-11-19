# Treppenglücksrad

Das Treppenglücksrad ist eine interaktive Anwendung, die spielerisch über verschiedene Sicherheitsmaßnahmen zur Prävention von Treppenunfällen aufklärt. Die Nutzer können das Glücksrad drehen, um themenspezifische Informationen zu erhalten, wie z. B. zu den Themen „Schuhe“, „Beleuchtung“ oder „Rutschhemmung“.

## Inhaltsverzeichnis
- [Features](#features)
- [Technologien](#technologien)
- [Installation](#installation)
- [Nutzung](#nutzung)
- [Lizenz](#lizenz)

## Features
- **Interaktives Glücksrad**: Spielerisches Drehen des Glücksrads, um verschiedene Präventionstipps anzuzeigen.
- **Präventionstipps**: Nützliche Hinweise zur Vermeidung von Treppenunfällen.
- **Dynamisches Design**: Fördert die Aufmerksamkeit und das Engagement der Nutzer.
- **Zeitgesteuerte Anzeige**: Tipps werden für 8 Sekunden eingeblendet, bevor das Rad erneut gedreht werden kann.

## Technologien
Das Projekt wurde mit folgenden Technologien umgesetzt:
- **React**: Für die Entwicklung der Benutzeroberfläche.
- **Docker**: Zur Containerisierung und Bereitstellung der Anwendung.

## Installation
1. Klone das Repository:
   ```bash
   git clone https://github.com/Neyzen48/Treppenglücksrad.git
   ```
2. Navigiere in das Projektverzeichnis:
   ```bash
   cd Treppenglücksrad
   ```
3. Installiere die Abhängigkeiten:
   ```bash
   npm install
   ```

## Nutzung

### Starten der Anwendung

#### 1. Lokale Ausführung
Starte die Anwendung lokal:
   ```bash
   npm run start
   ```

#### 2. Docker
Die Anwendung kann in einem Docker-Container ausgeführt werden.

1. Kompiliere die Anwendung
   ```bash
   npm run build
   ``` 

2. Docker-Image erstellen:
   ```bash
   docker build -t treppengluecksrad .
   ```

3. Docker-Container starten:
   ```bash
   docker run -it -p 8080:8080 --rm treppengluecksrad
   ```

### Interaktion
- **Rad drehen**: Klicke auf den Button „Drehen“, um das Glücksrad zu aktivieren.
- **Hinweise lesen**: Präventionstipps werden angezeigt und nach 8 Sekunden ausgeblendet.
- **Wiederholen**: Nach der Anzeige kann das Rad erneut gedreht werden, um weitere Tipps zu erhalten.

## Lizenz
Dieses Projekt steht unter der [MIT-Lizenz](LICENSE).