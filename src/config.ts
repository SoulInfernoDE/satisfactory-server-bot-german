import dotenv from "dotenv";

dotenv.config();

const { DISCORD_TOKEN, SATISFACTORY_TOKEN, SATISFACTORY_API_BASE, DISCORD_CHANNEL_ID, UPDATE_FREQUENCY_SEC } = process.env;

if (!DISCORD_TOKEN || !SATISFACTORY_TOKEN || !SATISFACTORY_API_BASE || !DISCORD_CHANNEL_ID || !UPDATE_FREQUENCY_SEC) {
  throw new Error("Fehlende oder falsche Environment Variablen aus der .env-Datei");
}

export const config = {
  DISCORD_TOKEN,
  DISCORD_CHANNEL_ID,
  SATISFACTORY_TOKEN,
  SATISFACTORY_API_BASE,
  UPDATE_FREQUENCY_SEC: parseInt(UPDATE_FREQUENCY_SEC)
};
