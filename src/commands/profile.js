const { MessageEmbed, Message } = require('discord.js');
const moment = require('moment');
const pm = require('pretty-ms');
const petss = require('../utils/pets')


/**
 * @param {Message} message
 */
module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(' ').toString().toLowerCase()) || message.guild.members.cache.find(member => member.user.username === args.slice(0).join(' ') || member.user.username === args[0]) || message.member;
    const user = await bot.fetchUser(member.user.id);
    
    const createDays = Math.floor((Date.now() - member.user.createdAt) / 86400000);
    const joinDays = Math.floor((Date.now() - member.joinedAt) / 86400000);
    const pet = user.pets.map(x => x.description)
    if(user.pets.length < 1) {
      const profileEmbed2 = new MessageEmbed()
        .setAuthor(member.user.tag, member.user.avatarURL())
        .setDescription(`**${member.user.username}'s Profile**`)
        .setThumbnail('https://media.discordapp.net/attachments/816429759713771561/816531263497830410/unknown.png')
        .addFields(
            { name: `Coins`, value: 
            `> **Bank:** ❀ ${user.coinsInBank.toLocaleString()}\n> **Wallet:** ❀ ${user.coinsInWallet.toLocaleString()}
            `, inline: true },
          { name: `Inventory`, value: `• Total Items: \`${user.items.length.toLocaleString()}\`
            `, inline: false },
          { name: `Misc`, value: `> Passive Mode: \`${user.passive}\`\n> \`${user.bankSpace.toLocaleString()}\` bank space`,inline: false }
        )
        .setColor('#f5da9f')
        return message.channel.send(profileEmbed2)
    } else { 
    const profileEmbed = new MessageEmbed()
        .setAuthor(member.user.tag, member.user.avatarURL())
        .setDescription(`**${member.user.username}'s Profile:**`)
        .setThumbnail('https://media.discordapp.net/attachments/816429759713771561/816531263497830410/unknown.png')
        .addFields(
            { name: `Coins`, value: 
            `> **Bank:** ❀ ${user.coinsInBank.toLocaleString()}\n> **Wallet:** ❀ ${user.coinsInWallet.toLocaleString()}
            `, inline: true },
          { name: `Inventory & Pets`, value: `• Total Items: **${user.items.length.toLocaleString()}**\n• Pet: ${pet}
            `, inline: false },
          { name: `Misc`, value: `\n> Passive Mode: \`${user.passive}\`\n> \`${user.bankSpace.toLocaleString()}\` bank space`,inline: false }
        )
        .setColor('#f5da9f')

    return message.channel.send(profileEmbed);
  }
} 
module.exports.config = {
    name: 'profile', // Command Name
    description: 'See your profile or others.', // Description
    usage: 'nem profile', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['userinfo'], // Aliases 
    bankSpace: 2, // Amount of bank space to give when command is used.
    cooldown: 3 // Command Cooldown
}
