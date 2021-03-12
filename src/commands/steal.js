const { MessageEmbed, Client, Util } = require('discord.js')

module.exports.run = async(bot, message, args) => {
  if(!args.length) return message.channel.send(
    new MessageEmbed()
    .setDescription(`*Please enter an emoji!*`)
    .setColor('#f5da9f')
  )

  for (const rawEmoji of args) {
    const parsedEmoji = Util.parseEmoji(rawEmoji);


    if(parsedEmoji.id) {
      const extension = parsedEmoji.animated ? ".gif" : ".png";
      const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`;
      message.guild.emojis.create(url, parsedEmoji.name).then((emoji) => 
      message.channel.send(
      new MessageEmbed()
        .setDescription(`*I have successfully added: ${emoji}*`)
        .setColor('#f5da9f')))
    }
  }
}

module.exports.config = {
    name: 'steal', // Command Name
    description: 'Steal an emoji to add to your server!', // Description
    usage: 'nem steal <emoji>', // Usage
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI', 'MANAGE_EMOJIS'], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: ['MANAGE_EMOJIS'], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 2 // Command Cooldown
}