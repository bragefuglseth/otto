require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { Client, Collection, Intents } = require("discord.js");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Get all files within command directory
const commandDir = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandDir)
  .filter(file => file.endsWith(".js"));

// Add all JS files to a collection
client.commands = new Collection();
for (file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

client.once("ready", () => {
  console.log("Client is ready");
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command.",
      ephemeral: true
    });
  }
});

// Login with token from .env file
client.login(process.env.DISCORD_TOKEN);
