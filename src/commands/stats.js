const { MessageEmbed } = require("discord.js");
const i = "<:infomation:779736273639440394>";
module.exports.run = async (bot, message, args) => {
  const Embed = new MessageEmbed()
    .setTitle(`> \`🌿\` ⏤・ **Nem's Stats** :`)
    .addField(
      `Servers:`,
      `> \`${bot.guilds.cache.size.toLocaleString()}\``,
      true
    )
    .addField(
      `Users:`,
      `> \`${message.client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}\` `,
      true
    )
    .setThumbnail(
      bot.user.displayAvatarURL({ format: "png", size: 256, dynamic: true })
    )
    .setColor("#f5da9f"); //[\`s\`](https://docs.brandondev.xyz/)
  message.channel.send(Embed);
};
module.exports.config = {
  name: "stats",
  description: "View nems statistics.",
  usage: "nem stats",
  botPerms: ["EMBED_LINKS", "SEND_MESSAGES", "EXTERNAL_EMOJI", "ATTACH_FILES"],
  userPerms: [],
  aliases: ["servers", "users", "stat"],
  bankSpace: 1,
  cooldown: 5
};
