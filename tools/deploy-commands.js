require("dotenv").config();
const { readdirSync } = require("fs");
const path = require("path");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const commands = [];
// Find the commands directory
const commandDir = path.resolve(__dirname, "../src/commands");
const commandFiles = readdirSync(commandDir).filter(file =>
  file.endsWith(".js")
);
for (file of commandFiles) {
  const command = require(`../src/commands/${file}`);
  commands.push(command.data.toJSON());
}

const deploymentLocation =
  process.env.DEPLOY_GLOBALLY === "true"
    ? "global"
    : process.env.TEST_SERVER_ID;
console.log(deploymentLocation);
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
