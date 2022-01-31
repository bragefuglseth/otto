require("dotenv").config();
const { readdirSync } = require("fs");
const path = require("path");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
// All commands are fetched from an external file for security reasons
const commandList = require("../src/command-list.js");

const commands = [];
for (file of commandList) {
  const command = require(`../src/commands/${file}.js`);
  commands.push(command.data.toJSON());
}

const deploymentLocation =
  process.env.DEPLOY_GLOBALLY === "true"
    ? "global"
    : process.env.TEST_SERVER_ID;
const rest = new REST({ version: "9" }).setToken(process.env.DISCORD_TOKEN);
rest
  .put(
    Routes.applicationGuildCommands(
      process.env.APPLICATION_ID,
      deploymentLocation
    ),
    {
      body: commands
    }
  )
  .then(() => console.log("Successfully registered commands"))
  .catch(error => console.log(error));
