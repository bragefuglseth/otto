const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder()
  .setName("hello")
  .setDescription("Say hello!");

const execute = async interaction => {
  await interaction.reply(`Hi, ${interaction.user}!`);
};

module.exports = { data, execute };
