import { Client } from "discord.js";
import { config } from "./config";
import SatisfactoryWatchdog from "./watchdog";

const client = new Client({
  intents: ["Guilds", "GuildMessages"],
});

let watchdog: SatisfactoryWatchdog | null = null;

client.once("ready", () => {
  const channel = client.channels.cache.get(config.DISCORD_CHANNEL_ID);
  if (!channel) {
    console.error("Kanal existiert nicht");
    return;
  }
  watchdog = new SatisfactoryWatchdog();

  console.log("Bot ist bereit !");

  const sendMsg = (msg?: string) => {
    if (msg && channel.isSendable()) {
      console.info(msg);
      channel.send(msg);
    }
  };


  // Player count
  watchdog.callbacks.numConnectedPlayers = async (oldValue, newValue) => {
    if (newValue > oldValue) {
      sendMsg(`Jemand hat das Spiel betreten! (Player count ${oldValue}->${newValue})`);
    } else if (newValue < oldValue) {
      sendMsg(`Jemand hat das Spiel verlassen! (Player count ${oldValue}->${newValue})`);
    }
  };

  watchdog.callbacks.isGamePaused = async (_, paused) => {
    if (paused) {
      sendMsg(`Der Server ist jetzt pausiert.`);
    } else {
      sendMsg(`Der Server ist nicht länger pausiert.`);
    }
  };

  setInterval(() => {
    watchdog?.update();
  }, config.UPDATE_FREQUENCY_SEC * 1000);
  watchdog?.update();


});

client.login(config.DISCORD_TOKEN);
