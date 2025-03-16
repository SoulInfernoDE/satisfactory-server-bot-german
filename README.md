
## Satisfactory Server Discord Bot - Übersetzt auf Deutsch


->
Einfacher Discord Bot welcher die neue Satisfactory dedicated server API verwendet um Daten in Discord zu posten, immer wenn jemand dem Spiel beitritt oder es verlässt.

Die API ist stark limitiert. Aktuell gibt es noch keine Möglichkeit chat logs oder Spielernamen abzufragen..

#

### Setup:

- Erstelle die Datei `.env` mit folgendem Inhalt:

```dotenv
DISCORD_TOKEN=<bot token>
DISCORD_CHANNEL_ID=<server channel id>
SATISFACTORY_TOKEN=<satisfactory server API key>
SATISFACTORY_API_BASE=https://<server_ip>:7777/api/v1
UPDATE_FREQUENCY_SEC=20
```

Einen Bot auf dem Discord Entwicklerportal (https://discord.com/developers/applications) generieren und ihn seinem Server hinzufügen anschließend weiter mit:

- Run `npm install`
- Run `npm run build`
- Run `npm start`

DISCORD_TOKEN
-> Kann man aus dem Discord Entwicklerportal bekommen

DISCORD_CHANNEL_ID
-> Struktur: https ://discord.com/channels/[Server-ID]/[Channel-ID]/[Message-ID] 

SATISFACTORY_TOKEN
-> Kann man in der Konsole des laufenden Satisfactory Spiels generieren mit:
server.GenerateAPIToken



--------------------------------------------------

### Satisfactory Discord Status Bot Server per Docker Compose starten

#
--> Die compose.yaml Datei herunterladen und nutzen  ..oder
---> Diese Vorlage nutzen:

```
version: "3"

volumes:
  satisdiscordstatusbot:

services:
   satisfactorydiscordstatusbot:
      image: soulinferno/satisfactoryserverdiscordbotgerman
      restart: always
      container_name: satisfactorydiscordstatusbotgerman
      command: node ./dist/index.js
      volumes:
#  Pfadangabe ist verpflichtend. Bitte auf die selbsterstellte .env Datei ändern
        - /volume1/server/.env:/home/node/app/config/.env

```


--------------------------------------------------


### Satisfactory Discord Status Bot Server per Synology DiskStation einrichten (Angabe des Dateipfad der .env -Datei verpflichtend!)

Container Manager starten

![grafik](https://github.com/user-attachments/assets/0d0aa002-f997-4cf2-8100-02b6e4d5e27e)

#
Auf Registrierung klicken, dann rechts oben in das Suchfeld: SoulInfernoDE eingeben (Enter)
Die Zeile für den Discord Bot auswählen und oben links Download anklicken
![grafik](https://github.com/user-attachments/assets/de16343c-777a-427c-9ace-6f8ff4c76d4a)

#
Wenn der Download fertig ist links auf: Image, dann das Discord Bot Server Image auswählen
Oben rechts auf Ausführen klicken
![grafik](https://github.com/user-attachments/assets/16f10381-7831-4275-a688-0c87056d46ad)

#
Einen beliebiegen Containernamen eingeben wie z.B. satisfactorystatusdiscordbot 
Anschließend auf (Weiter)

![grafik](https://github.com/user-attachments/assets/9ed8afb8-048f-4443-826f-d63ee36c6ffe)

#

'+' Datei hinzufügen --> Die selbst erstellte .env Datei wählen
![grafik](https://github.com/user-attachments/assets/c908b7a9-a6e8-49b2-b085-2e91e676e4ca)

#
Im zweiten Feld MUSS folgendes eingetragen sein: /home/node/app/config/.env   (Schreibgeschützt) --> Weiter
![grafik](https://github.com/user-attachments/assets/fe1d18d7-c161-434e-8cba-732a09e9c55b)

#
Im letzten Fenster auf (Fertig)
![grafik](https://github.com/user-attachments/assets/a59cb48e-3d1b-4184-bc5c-75a00c7c7ef6)

#
Der Discord Bot läuft jetzt. Wenn er gestoppt wird kann in den Einstellungen "Automatisch starten"
aktiviert werden. Dann wird er auch nach einem Neustart der Synology DiskStation wieder automatisch
gestartet.

Konfigurationseinstellungen können mit einem Texteditor auf der Synology DiskStation vorgenommen werden.

--------------------------------------------------



### Satisfactory Discord Status Bot Server über Terminal aus der Docker Registry ziehen (Angabe des Dateipfad der .env -Datei verpflichtend!)

`docker pull soulinferno/satisfactoryserverdiscordbotgerman:latest`

und/oder

`docker run -v /mein/lokaler/Pfad/zur/.env-Datei:/home/node/app/config/.env soulinferno/satisfactoryserverdiscordbotgerman:latest`

ACHTUNG: Bitte den Pfad zur eigenen Datei angeben bei: /mein/lokaler/Pfad/zur/.env-Datei
Beispiel: /volume1/server/satisfactorybot/.env:/home/node/app/config/.env


Fertig. Der Bot läuft jetzt.


--------------------------------------------------


# Fehlerbehebung
Der Bot wirft den Fehler aus: .env Datei nicht gefunden:

-> Ändert den Eigentümer auf den Ordner der Datei auf: admin

-> Setzt die Berechtigungen der .env Datei auf: 644

--------------------------------------------------




### Satisfactory Discord Status Bot Server aus den Quellen bauen mit der Dockerfile Datei
--------------------------------------------------
Git-Verzeichnis auf die Festplatte klonen (git clone https://github.com/SoulInfernoDE/satisfactory-server-bot-german.git), im Terminal in den Docker-HUB einloggen und ein Docker Image daraus bauen:
-> Einloggen mit: docker login -u dein_dockerhub_benutzername
--> Image lokal Bauen mit: sudo docker build -t dein_dockerhub_benutzername/satisfactorystatusbotgerman .
---> UNBEDINGT VORHER DAS DOCKER HUB REPOSITORY AUF PRIVAT STELLEN SONST VERÖFFENTLICH IHR EURE .ENV DATEI. DIE .ENV DATEI NIEMALS VERÖFFENTLICHEN!!

Euer gebautes Image könnt ihr jetzt auf eure Docker-HUB Repository pushen
-> Pushen mit: docker push dein_dockerhub_benutzername/satisfactorystatusbot

Jetzt könnt ihr euer Satisfactory Discord Statusbot Docker Image jederzeit auf einem beliebigen Docker Server laufen lassen
-> Zum Starten müsst Ihr in den Docker-HUB eingeloggt sein (Da privates Repository): docker run dein_dockerhub_benutzername/satisfactorystatusbotgerman

TIPP:
Testet eure frisch erstellte .env Datei zunächst lokal und erstellt dann erst das Docker Image.
--------------------------------------------------
