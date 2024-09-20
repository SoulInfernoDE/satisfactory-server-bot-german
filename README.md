# Satisfactory Server Discord Bot

----------------------------------------
## Übersetzt auf Deutsch ##
----------------------------------------

Einfacher Discord bot welcher die neue Satisfactory dedicated server API verwendet um Daten in Discord zu posten, immer wenn jemand dem Spiel beitritt oder es verlässt.

Die API ist stark limitiert. Aktuell gibt es noch keine Möglichkeit chat logs oder Spielernamen abzufragen..

## Setup:

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
