require("dotenv").config();
const { Client, Intents } = require("discord.js");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.once("ready", () => {
  console.log("Client is ready");
});

client.login(process.env.DISCORD_TOKEN);
