const { SlashCommandBuilder, MessageEmbed } = require("@discordjs/builders");
const { format } = require("date-fns");

const data = new SlashCommandBuilder()
  .setName("server")
  .setDescription("Information about this server");

const execute = async interaction => {
  const guildOwner = await interaction.guild.fetchOwner();
  const embed = {
    title: "Server info",
    thumbnail: { url: interaction.guild.iconURL() },
    fields: [
      { name: "Name", value: interaction.guild.name, inline: false },
      {
        name: "Members",
        value: interaction.guild.memberCount.toString(),
        inline: true
      },
      { name: "Owner", value: guildOwner.user.username, inline: true },
      {
        name: "Creation date",
        value: format(interaction.guild.createdAt, "MM/dd/yyyy hh:mm"),
        inline: false
      }
    ]
  };
  await interaction.reply({ embeds: [embed] });
};

module.exports = { data, execute };
